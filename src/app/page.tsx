import { SearchBar, Header, PokemonList, PokemonCard } from "@/components";
import { fetcher, ITEMS_PER_PAGE, POKEMON_API } from "@/utils";

export default async function Home() {
  const initialPokemonResponseList: PokemonListApiResponse = await fetcher(
    `${POKEMON_API}/pokemon?offset=0&limit=${ITEMS_PER_PAGE}`
  );

  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <SearchBar className="mt-8" />
        <PokemonList className="mt-12" initialData={initialPokemonResponseList}>
          {/* SSR first items */}
          {initialPokemonResponseList.results.map(({ name, url }) => {
            return <PokemonCard key={name} name={name} url={url} />;
          })}
        </PokemonList>
      </main>
    </>
  );
}
