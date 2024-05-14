#[allow(deprecated)]
use libsql_client::{Client, Statement};

use serde::{Deserialize, Serialize};
use worker::*;

#[derive(Debug, Deserialize, Serialize)]
struct GenericResponse {
    status: u16,
    message: String,
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
    // Uses secrets "LIBSQL_CLIENT_URL" and "LIBSQL_CLIENT_TOKEN"
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
                 }) ,
        Err(error) => {
            console_log!(":{:?}", error);
            Response::from_json(&GenericResponse {
                status: 500,
                message: serde_json::to_string(&todo)?,
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
