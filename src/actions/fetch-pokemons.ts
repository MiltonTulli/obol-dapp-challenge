"use server";

import { ITEMS_PER_PAGE, POKEMON_API, fetcher } from "@/utils";
import json from "@/data/pokemons-list.json";

const getSearchResults = (search?: string) =>
  search
    ? json
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
        )
        .slice(0, 12)
    : null;

export async function fetchPokemons(page: number, search?: string) {
  const url = `${POKEMON_API}/pokemon?offset=${
    (page - 1) * ITEMS_PER_PAGE
  }&limit=${ITEMS_PER_PAGE}`;

  try {
    let data: PokemonListApiResponse;
    if (search) {
      const searchResults = getSearchResults(search);

      data = {
        count: searchResults?.length ?? 0,
        next: "",
        previous: "",
        results: searchResults ?? [],
      };
    } else {
      const fetchData: PokemonListApiResponse = await fetcher(url);
      data = fetchData;
    }

    const itemsData = await Promise.allSettled(
      data.results?.map(({ url }) => fetcher(url))
    );

    data.results.forEach((_, index) => {
      const pokeData = itemsData[index] ?? {};
      data.results[index] = {
        ...data.results[index],
        ...pokeData,
      };
    });
    return data as FetchPokemonsResponse;
  } catch (error) {
    console.error("[actions/fetch-pokemons] Error fetching data:", error);
    return null;
  }
}
