import { scrap } from "@/lib/scrapPokemonData";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const result = await scrap(params.name, 4);
  // If no search parameter, return the entire data
  return Response.json({ result });
  //   return result;
  //   return new Response(result);
}
