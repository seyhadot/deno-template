import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { db } from "./DBinit.ts";

export interface State {
  context: Context;
}

export class Context {
  private static context: Context;
  // deno-lint-ignore no-explicit-any
  database: any;

  public constructor() {
    this.database = db;
  }

  public static init() {
    Context.context = new Context();
  }

  public static instance() {
    if (this.context) return this.context;
    else throw new Error("Context is not initialized!");
  }
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.context = Context.instance();

  const resp = await ctx.next();
  return resp;
}
