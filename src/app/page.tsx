import { Header, PokemonList } from "@/components";
import { fetcher, ITEMS_PER_PAGE, POKEMON_API } from "@/utils";

export default async function Home() {
  const initialPokemonResponseList: PokemonListApiResponse = await fetcher(
    `${POKEMON_API}/pokemon?offset=0&limit=${ITEMS_PER_PAGE}`
  );

  return (
    <>
      <Header />
      <main className="container max-w-screen-xl mx-auto p-8">
        <PokemonList
          className="mt-12"
          initialData={initialPokemonResponseList}
        />
      </main>
    </>
  );
}
