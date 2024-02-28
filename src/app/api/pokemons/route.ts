import { NextResponse } from "next/server";
import json from "./pokemons-list.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  if (search) {
    // Perform unefitient server filtering to avoid client mapping/filtering. In a real case this would be handled by elasticsearch or other service.
    const searchResults = json
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
      )
      .slice(0, 9);

    return NextResponse.json(searchResults);
  }

  // If no search parameter, return the entire data
  return NextResponse.json(json);
}
