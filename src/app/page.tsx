import {
  Header,
  PokemonList,
  SearchBar,
  PokemonListLoader,
} from "@/components";
import { fetchPokemons } from "@/actions/fetch-pokemons";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home(props: Props) {
  const search = (props.searchParams.q ?? "") as string;
  const pokes = await fetchPokemons(1, search.trim());
  if (!pokes) throw new Error("Can't fetch pokemons");

  return (
    <>
      <Header />
      <main className="container max-w-screen-xl mx-auto p-8">
        <SearchBar className="mt-8 mb-6" />
        {/* Show ssr list */}
        <PokemonList initialData={pokes} />
        {/* Show client-side list after initial list only when search is no "enabled" */}
        {!search && <PokemonListLoader initialData={pokes} />}
      </main>
    </>
  );
}
