import { scrap } from "@/lib/scrapPokemonData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const result = await scrap(params.name);
  return NextResponse.json({ data: result });
}
