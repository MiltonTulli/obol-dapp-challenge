"use client";
import { FC } from "react";
import { PokemonCard, Button } from "@/components";
import clsx from "clsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetcher, ITEMS_PER_PAGE, POKEMON_API } from "@/utils";

interface PokemonListProps {
  className?: string;
  initialData: PokemonListApiResponse;
  children?: React.ReactNode;
}

export const PokemonList: FC<PokemonListProps> = ({
  initialData,
  className = "",
  children,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: async ({ pageParam = 0 }) => {
      const offset = pageParam * ITEMS_PER_PAGE;
      const response: PokemonListApiResponse = await fetcher(
        `${POKEMON_API}/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      );
      return response.results;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPageParam + 1;
    },
    maxPages: initialData.count / ITEMS_PER_PAGE,
  });

  return (
    <div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {data
          ? data?.pages?.flat().map(({ name, url }) => {
              return <PokemonCard key={name} name={name} url={url} />;
            })
          : children}
      </div>
      <div className="flex justify-center my-12">
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>Fetch More Pokemons</Button>
        )}
      </div>
    </div>
  );
};
