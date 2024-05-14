# workers-rs-tursodb

Updated from the example
https://github.com/cloudflare/workers-rs

# Todo List

A todo list example featuring [Turso](https://turso.tech) and [Cloudflare worker](https://github.com/cloudflare/workers-rs).

## Development

Create a turso database.

```sh
turso db create <db-name>
```

Get the database credentials:

```sh
# db url
turso db show --url <db-name>

# authentication token
turso db tokens create <db-name>
```

Store the credentials inside a `.dev.vars` file next to your wrangler.toml:

```text
LIBSQL_CLIENT_URL=
LIBSQL_CLIENT_TOKEN=
```

## Run project

```sh
npx wrangler dev
```

Add a new task:

```sh
curl "http://localhost:8787/todos" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"task": "Do task m"}'
```

Get the list of added tasks:

```sh
curl "http://localhost:8787/todos"
```

```sh
npx wrangler deploy
```

```sh
curl https://cloudflare-worker-rs-turso.petar-vasilev0727.workers.dev/todos
```