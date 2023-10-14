import type { GenericAsyncResponse } from "@/types/fetch";

import { castingError } from "./error";

interface CreateHTTPRequestArgs {
  body?: FormData | URLSearchParams | string;
  headers?: Record<string, string>;
  method: "POST" | "GET";
  url: string;
}

export async function createHTTPRequest<T>(
  args: CreateHTTPRequestArgs
): Promise<GenericAsyncResponse<T>> {
  const { body, headers, method, url } = args;

  try {
    const responseAPI = await fetch(url, {
      body,
      cache: "force-cache",
      headers,
      method,
      next: { tags: ["collection"] },
    });

    if (!responseAPI.ok) {
      let customErrorMessage = `Failed api request to ${url}`;

      const responseText = await responseAPI.text();
      if (responseText) {
        customErrorMessage += responseText;
      }

      throw new Error(customErrorMessage);
    }

    return { error: undefined, result: await responseAPI.json() };
  } catch (e) {
    return {
      error: castingError(e),
      result: undefined,
    };
  }
}
