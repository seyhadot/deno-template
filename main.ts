/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { ServerContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import options from "./options.ts";
import { serve } from "$std/http/server.ts";
import { Context } from "./db/_middleware.ts";
await Context.init();

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
const ctx = await ServerContext.fromManifest(manifest, options);
console.log(Deno.version);
await serve(ctx.handler(), { port: 3000 });
