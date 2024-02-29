"use client";
import { FC, useMemo, useState } from "react";
import { PokemonCard, Button, SearchBar, Div } from "@/components";
import clsx from "clsx";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetcher, ITEMS_PER_PAGE, POKEMON_API } from "@/utils";
import { IconLoader2 } from "@tabler/icons-react";

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
  const [useFilteredResults, setUseFilteredResults] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null | undefined>("");

  function handleSearch(searchTerm?: string | null) {
    if (searchTerm) {
      setSearch(searchTerm);
      setUseFilteredResults(true);
    } else {
      setSearch("");
      setUseFilteredResults(false);
    }
  }

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

  const { data: searchData, isFetching: isSearching } = useQuery({
    queryKey: ["pokemon-search", search],
    staleTime: Infinity,
    queryFn: async () => {
      const response: PokemonSimpleResponse[] = await fetcher(
        `/api/pokemons?search=${search}`
      );
      return response;
    },
    enabled: useFilteredResults && !!search,
  });

  const renderList = useMemo(() => {
    if (useFilteredResults) {
      return searchData;
    }
    return data?.pages?.flat();
  }, [useFilteredResults, data?.pages, searchData]);

  return (
    <Div>
      <SearchBar className="mt-8" onSearch={handleSearch} />
      <Div
        className={clsx(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {renderList || isFetching || isSearching
          ? renderList?.map(({ name, url }) => {
              return <PokemonCard key={name} name={name} url={url} />;
            })
          : children}
      </Div>
      {useFilteredResults && renderList?.length === 0 && (
        <Div className="flex justify-center my-12">No results</Div>
      )}
      <Div className="flex justify-center my-12">
        {(isFetching || isSearching) && (
          <IconLoader2 color="#82EDCC" className="animate-spin h-12 w-12" />
        )}
        {hasNextPage && !useFilteredResults && !isFetching && (
          <Button onClick={() => fetchNextPage()}>Load more</Button>
        )}
      </Div>
    </Div>
  );
};
