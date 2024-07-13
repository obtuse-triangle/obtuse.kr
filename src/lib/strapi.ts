interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(
    `${import.meta.env.STRAPI_URL || "https://strapi.obtuse.kr"}/api/${endpoint}`
  );

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  console.log(url.toString());

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${
        import.meta.env.STRAPI_TOKEN ||
        "bc31b59f4cf0df8dda5c4dceb3792434a3e9ec3620333266b01d4edb7207dc1654cf9c84bad0c03a60caf495a86c1399ebe9dbda54c6e6e1ea8a770a7b131c41d153f3b245201f7bebdc8c69cf31a63af100876534fbbdd52892c71ff3225355cf85217d78c7cde1f7103041e205cb2ceb2861c918d138060db197c5a73dea1e"
      }`,
    },
  });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
