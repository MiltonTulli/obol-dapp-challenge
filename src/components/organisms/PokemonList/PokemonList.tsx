import { FC } from "react";
import { PokemonCard, Div, Text } from "@/components";
interface PokemonListProps {
  initialData: FetchPokemonsResponse;
}

export const PokemonList: FC<PokemonListProps> = ({ initialData }) => {
  return (
    <Div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {initialData?.results?.map((pokemon) => {
        return <PokemonCard key={pokemon.url} pokemon={pokemon} />;
      })}
      {initialData?.results?.length === 0 && <Text>No results Found</Text>}
    </Div>
  );
};
