use worker::*;
use libsql::Builder;
use std::env;

#[event(fetch)]
async fn main(req: Request, env: Env, ctx: Context) -> Result<Response> {
    let url = env::var("TURSO_DATABASE_URL").expect("LIBSQL_URL must be set");
    let token = env::var("TURSO_AUTH_TOKEN").unwrap_or_default();

    let db = Builder::new_remote(&url, &token).build().await.unwrap();
    let conn = db.connect().unwrap();
    conn.execute("SELECT * FROM members", ()).await?;

    Response::ok("Hello, World!")
}
