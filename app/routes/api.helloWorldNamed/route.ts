import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";


export const namedLoader = loader; // <-- this makes the fetcher fail
export async function loader  (args: LoaderFunctionArgs)  {
  const { request, context, params } = args;

  return defer({
    data: "hello world named",
  });
};

