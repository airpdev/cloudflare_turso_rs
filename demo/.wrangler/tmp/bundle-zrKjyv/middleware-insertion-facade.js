				import worker, * as OTHER_EXPORTS from "/home/aipvdev/work/work/cloudflare_turso_rs/demo/build/worker/shim.mjs";
				import * as __MIDDLEWARE_0__ from "/home/aipvdev/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/home/aipvdev/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/home/aipvdev/work/work/cloudflare_turso_rs/demo/build/worker/shim.mjs";
				export default worker;