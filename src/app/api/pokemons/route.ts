import { NextResponse } from "next/server";
import json from "./pokemons-list.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  if (search) {
    // Employ server-side filtering to prevent the need for client-side mapping or filtering. In a practical scenario, such operations would typically be delegated to dedicated services like Elasticsearch or similar
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
