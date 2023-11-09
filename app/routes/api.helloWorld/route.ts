import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";


export async function loader  (args: LoaderFunctionArgs)  {
  const { request, context, params } = args;

  return defer({
    data: "hello world",
  });
};

