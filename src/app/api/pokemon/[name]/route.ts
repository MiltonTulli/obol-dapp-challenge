import { scrap } from "@/utils/scrapPokemonData";
import { NextResponse } from "next/server";

// Simple service to return scrap data from a single pokemon
export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const result = await scrap(params.name);
  return NextResponse.json(result);
}
