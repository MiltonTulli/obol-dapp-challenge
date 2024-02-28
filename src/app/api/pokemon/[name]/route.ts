import { scrap } from "@/lib/scrapPokemonData";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const result = await scrap(params.name);
  return Response.json(result);
}
