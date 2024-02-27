import { FC } from "react";
import { PokemonCard } from "@/components";
import clsx from "clsx";

interface PokemonListProps {
  className?: string;
}

export const PokemonList: FC<PokemonListProps> = ({ className = "" }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        // "flex flex-row flex-wrap gap-6",
        className
      )}
    >
      {list.map((n) => {
        return <PokemonCard key={n} />;
      })}
    </div>
  );
};
