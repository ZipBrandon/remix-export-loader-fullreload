import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";

export const loader = async (args: LoaderFunctionArgs) => {
  const { request, context, params } = args;

  return defer({
    data: "new route",
  });
};
