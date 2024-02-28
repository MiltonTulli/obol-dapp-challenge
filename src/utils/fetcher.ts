export async function fetcher(url: string, options: RequestInit = {}) {
  return await (await fetch(url, options)).json();
}
