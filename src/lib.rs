use worker::*;

#[event(fetch)]
async fn main(_req: Request, env: Env, _ctx: Context) -> Result<Response> {
    #[allow(deprecated)]
    // Uses secrets "LIBSQL_CLIENT_URL" and "LIBSQL_CLIENT_TOKEN"
    let client = libsql_client::Client::from_workers_env(&env).unwrap();

    #[allow(deprecated)]
    client.execute("SELECT * FROM members").await.unwrap();

    Response::ok("Hello, World!")
}


