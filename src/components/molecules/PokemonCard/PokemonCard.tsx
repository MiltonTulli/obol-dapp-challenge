"use client";

import Image from "next/image";
import { Text, Button, CollectButton } from "@/components";
import Link from "next/link";
import {
  IconArrowNarrowRight,
  IconLoader2,
  IconInfoSquareRoundedFilled,
} from "@tabler/icons-react";
import { cap, fetcher, POKEMON_SCRAP_URL } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "react-tooltip";
import { type ScrapResponse } from "@/lib/scrapPokemonData";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const { data } = useQuery({
    queryKey: [url],
    queryFn: (): Promise<PokemonItemApiResponse> => fetcher(url),
    staleTime: Infinity, // Data won't change
  });

  const { data: scrapData, isLoading: scrapLoading } = useQuery({
    queryKey: ["scrap-poke-data", name],
    queryFn: (): Promise<ScrapResponse> => fetcher(`/api/pokemon/${name}`),
    staleTime: Infinity, // Data won't change
  });

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-[100%] min-h-[230px] h-[fit-content] relative rounded-t-lg bg-white text-[#869ca1]">
          <IconInfoSquareRoundedFilled
            data-tooltip-variant="light"
            data-tooltip-id={url}
            className="absolute top-1 left-1 h-5 w-5 hover:cursor-pointer z-10 outline-none"
          />
          <Image
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2 items-center p-5">
          <Text className="mb-2 text-lg font-bold text-[#D9EEF3]" nature="h5">
            {cap(name)}
          </Text>

          <div className="flex gap-2">
            {data?.abilities?.slice(0, 3).map((ability) => (
              <Text
                nature="span"
                key={ability.ability.name}
                className="mb-3 font-medium text-[#9CC2C9]"
              >
                {cap(ability.ability.name)}
              </Text>
            ))}
          </div>

          <CollectButton pokemon={name} />

          <Link target="_blank" href={`${POKEMON_SCRAP_URL}/${name}`}>
            <Button variant="subtle">
              Details <IconArrowNarrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <Tooltip place={"top"} id={url} className="z-20 max-w-[98vw]">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {!scrapData?.content && scrapLoading && (
            <IconLoader2 className="animate-spin h-5 w-5" />
          )}
          {scrapData?.content?.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </div>
      </Tooltip>
    </>
  );
}
