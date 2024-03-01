import {
  Header,
  PokemonList,
  SearchBar,
  PokemonListLoader,
  Div,
} from "@/components";
import { IconLoader2 } from "@tabler/icons-react";
export default function Loading() {
  return (
    <>
      <Header />
      <main className="container max-w-screen-xl mx-auto p-8">
        <SearchBar className="mt-8 mb-6" />
        <Div className="flex justify-center my-12">
          <IconLoader2 color="#82EDCC" className="animate-spin h-12 w-12" />
        </Div>
      </main>
    </>
  );
}
