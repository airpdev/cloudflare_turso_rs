#[allow(deprecated)]
use libsql_client::{Client, Statement};
use serde::{Deserialize, Serialize};
use worker::*;
use reqwest::{Client as LinkedinClient, header};
use std::collections::HashMap;

#[derive(Debug, Deserialize, Serialize)]
struct GenericResponse {
    status: u16,
    message: String,
}

// the struct for a todo item
#[derive(Deserialize, Serialize, Debug)]
struct LinkedinCode {
    code: String,
    state: String,
}

// the struct for a todo item
#[derive(Deserialize, Serialize, Debug)]
struct Todo {
    task: String,
}


// Initializes a database connection
#[allow(deprecated)]
async fn connection(env: &Env) -> Client {
    #[allow(deprecated)]
    // Uses secrets "LIBSQL_CLIENT_URL" and "LIBSUrlQL_CLIENT_TOKEN"
    Client::from_workers_env(env).unwrap()
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    let conn = connection(&env).await;

    #[allow(deprecated)]
    let _ = conn
        .execute("CREATE TABLE IF NOT EXISTS todolist(task varchar non null)")
        .await;

    Router::new()
        .get_async("/linkedin_callback", linkedin_callback)
        .get_async("/todos", handle_get)
        .post_async("/todos", handle_post)
        .delete_async("/todos", handle_delete)
        .run(req, env)
        .await
}

#[worker::send]
pub async fn handle_post(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let todo: Todo = match req.json::<Todo>().await {
        Ok(todo) => todo,
        Err(_err) => {
            return Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            });
        }
    };

    let conn = connection(&_ctx.env).await;

    #[allow(deprecated)]
    let resp = conn
        .execute(Statement::with_args(
            "INSERT into todolist values (?1)",
            &[todo.task.clone()],
        ))
        .await;

    match resp {
        #[allow(deprecated)]
        Ok(_) => Response::from_json(&GenericResponse {
                    status: 200,
                    message: serde_json::to_string(&todo)?,
                 }),
        Err(error) => {
            console_log!(":{:?}", error);
            Response::from_json(&GenericResponse {
                status: 500,
                message: serde_json::to_string(&todo)?,
            })
        }
    }

}

const CLIENT_ID:&str = "78fmam3a1hx8nm";
const CLIENT_SECRET:&str = "WPL_AP0.xK5Xb9w9QJEFlsgy.MTc2MDU1MDk0NA==";
const REDIRECT_URI:&str = "https://cloudflare-worker-rs-turso.petar-vasilev0727.workers.dev/linkedin_callback";

#[worker::send]
pub async fn linkedin_callback(req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let linkincode: LinkedinCode = match req.query::<LinkedinCode>() {
        Ok(linkincode) => linkincode,
        Err(_err) => {
            return Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            });
        }
    };
    
    let response_result = get_accesstoken(&linkincode.code, "authorization_code", CLIENT_ID, CLIENT_SECRET, REDIRECT_URI).await;
    let mut response = match response_result {
        Ok(response) => response,
        Err(e) => {
            // In case of a network or fetch error, return an Internal Server Error.
            return Response::error(&format!("Network/Fetch Error: {:?}", e), 500);
        }
    };

    let json_value: serde_json::Value = response.json().await.expect("REASON");
    if let Some(message) = json_value.get("message") {
        console_log!("message ====> {}", message);
        let message_val: serde_json::Value = serde_json::from_str(message.as_str().expect("REASON"))?;
        if let Some(access_token) = message_val.get("access_token") {
            console_log!("access_token ====> {}", access_token);
            return Ok(get_linkedin_profile(access_token.as_str().expect("REASON")).await?);
            // return Response::from_json(&GenericResponse {
            //     status: 200,
            //     message: access_token.to_string(),
            // });
        }
        
    }

    Response::from_json(&GenericResponse {
        status: 500,
        message: "Failed to serialize".to_string(),
    })
}

async fn get_accesstoken(code_val: &str, grant_type_val: &str, client_id_val: &str, client_secret_val: &str, redirect_uri_val: &str) -> worker::Result<Response> {
    let url = "https://www.linkedin.com/oauth/v2/accessToken";
    
    let client = LinkedinClient::new();

    let mut params = HashMap::new();
    params.insert("grant_type", grant_type_val);
    params.insert("code", code_val);
    params.insert("client_id", client_id_val);
    params.insert("client_secret", client_secret_val);
    params.insert("redirect_uri", redirect_uri_val);


    // Send the POST request
    let response_result = client
        .post(url)
        .form(&params) // This encodes the parameters as application/x-www-form-urlencoded
        .send()
        .await;
    
    match response_result {
        Ok(response) => {
            Response::from_json(&GenericResponse {
                status: 200,
                message: response.text().await.unwrap(),
            })
        },
        Err(_e) => {
            Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            })
        }
    }
    
}
async fn get_linkedin_profile(access_token: &str) -> worker::Result<Response> {
    let url = "https://api.linkedin.com/v2/userinfo";
    
    let client = LinkedinClient::new();

    let response_result = client
    .get(url)
    .header(header::AUTHORIZATION, format!("Bearer {}", access_token))
    .send()
    .await;

    match response_result {
        Ok(response) => {
            Response::from_json(&GenericResponse {
                status: 200,
                message: response.text().await.unwrap(),
            })
        },
        Err(_e) => {
            Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            })
        }
    }
    
}


#[worker::send]
pub async fn handle_get(_req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let conn = connection(&_ctx.env).await;

    #[allow(deprecated)]
    let results = conn.execute("SELECT * FROM todolist").await;

    let results = match results {
        #[allow(deprecated)]
        Ok(results) => results.rows,
        Err(error) => {
            console_log!(":{:?}", error);
            return Response::from_json(&GenericResponse {
                status: 500,
                message: serde_json::to_string(&Vec::<Todo>::new())?,
            });
        }
    };

    let mut todos: Vec<Todo> = Vec::new();

    for row in results {
        let todo: Todo = Todo {
            #[allow(deprecated)]
            task: row.values.get(0).unwrap().to_string(),
        };
        todos.push(todo);
    }

    Response::from_json(&GenericResponse {
        status: 200,
        message: serde_json::to_string(&todos)?
    })
}

#[worker::send]
pub async fn handle_delete(mut req: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    let todo: Todo = match req.json::<Todo>().await {
        Ok(todo) => todo,
        Err(_err) => {
            return Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            });
        }
    };
    let conn = connection(&_ctx.env).await;

    #[allow(deprecated)]
    let resp = conn.execute(Statement::with_args(
                    "DELETE FROM todolist WHERE task = (?1)",
                    &[todo.task.clone()],
                ))
                .await;

    match resp {
        #[allow(deprecated)]
        Ok(_) => Response::from_json(&GenericResponse {
                    status: 200,
                    message: serde_json::to_string_pretty(&todo)?,
                    }) ,
        Err(error) => {
            console_log!(":{:?}", error);
            Response::from_json(&GenericResponse {
                status: 500,
                message: "Failed to serialize".to_string(),
            })
        }
    }
}
