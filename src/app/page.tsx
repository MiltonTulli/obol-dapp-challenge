import { SearchBar, Header, PokemonList } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <SearchBar className="mt-8" />
        <PokemonList className="mt-12" />
      </main>
    </>
  );
}
