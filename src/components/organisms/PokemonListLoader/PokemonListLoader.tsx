"use client";

import { FC, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { PokemonCard, Div } from "@/components";
import clsx from "clsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ITEMS_PER_PAGE } from "@/utils";
import { IconLoader2 } from "@tabler/icons-react";
import { fetchPokemons } from "@/actions/fetch-pokemons";

interface PokemonListLoaderProps {
  className?: string;
  initialData: PokemonListApiResponse;
  children?: React.ReactNode;
}

export const PokemonListLoader: FC<PokemonListLoaderProps> = ({
  initialData,
  className = "",
  children,
}) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: async ({ pageParam = 2 }) => {
      const response = await fetchPokemons(pageParam);
      return response?.results;
    },
    initialPageParam: 2,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPageParam + 1;
    },
    maxPages: initialData.count / ITEMS_PER_PAGE,
  });

  const renderList = useMemo(() => {
    return data?.pages?.flat();
  }, [data?.pages]);

  return (
    <Div className="mt-6">
      <InfiniteScroll
        loadMore={() => {
          // Only fetch more if is not displaying search results
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        <Div
          className={clsx(
            "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
            className
          )}
        >
          {renderList || isFetching
            ? renderList?.map((pokemon) => {
                return pokemon ? (
                  <PokemonCard key={pokemon?.name} pokemon={pokemon} />
                ) : null;
              })
            : children}
        </Div>
      </InfiniteScroll>
      {renderList?.length === 0 && (
        <Div className="flex justify-center my-12">No results</Div>
      )}
      <Div className="flex justify-center my-12">
        {isFetching && (
          <IconLoader2 color="#82EDCC" className="animate-spin h-12 w-12" />
        )}
      </Div>
    </Div>
  );
};
