"use client";

import { IconLoader2, IconInfoSquareRoundedFilled } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "react-tooltip";
import { fetcher } from "@/utils";
import { Div, Text } from "@/components";
import { type ScrapResponse } from "@/utils/scrapPokemonData";

interface PokemonTooltipProps {
  name: string;
}

export function PokemonTooltip({ name }: PokemonTooltipProps) {
  const {
    data: scrapData,
    isLoading: scrapLoading,
    error,
  } = useQuery({
    queryKey: ["scrap-poke-data", name],
    queryFn: (): Promise<ScrapResponse> => fetcher(`/api/pokemon/${name}`),
    staleTime: Infinity, // Data won't change
    retry: true,
  });

  return (
    <>
      <IconInfoSquareRoundedFilled
        data-tooltip-variant="light"
        data-tooltip-id={name}
        className="absolute top-1 left-1 h-5 w-5 hover:cursor-pointer z-10 outline-none"
      />
      {/* Scrap service might be rate-limited */}
      {!error && scrapData?.content && scrapData?.content?.length !== 0 && (
        <Tooltip place={"top"} id={name} className="z-20 max-w-[98vw]">
          <Div style={{ display: "flex", flexDirection: "column" }}>
            {!scrapData?.content && scrapLoading && (
              <IconLoader2 className="animate-spin h-5 w-5" />
            )}
            {scrapData?.content?.map((text) => (
              <Text nature="span" key={text}>
                {text}
              </Text>
            ))}
          </Div>
        </Tooltip>
      )}
    </>
  );
}
