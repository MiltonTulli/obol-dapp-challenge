"use client";

import { FC } from "react";
import Image from "next/image";
import { Text, Button, CollectButton } from "@/components";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cap, fetcher } from "@/utils";
import { useQuery } from "@tanstack/react-query";
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

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-[100%] min-h-[230px] h-[fit-content] relative rounded-t-lg bg-white">
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

        <CollectButton />
        <Button variant="subtle">
          Details <IconArrowNarrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
