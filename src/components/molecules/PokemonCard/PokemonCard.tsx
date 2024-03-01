import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import clsx from "clsx";
import { cap, POKEMON_SCRAP_URL } from "@/utils";
import { Text, Button, CollectButton, Div, PokemonTooltip } from "@/components";

interface PokemonCardProps {
  pokemon: PokemonItemApiResponse;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <>
      <Div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Div className="w-[100%] min-h-[230px] h-[fit-content] relative rounded-t-lg bg-white text-[#869ca1]">
          <PokemonTooltip name={pokemon.name} />
          <Image
            src={`https://img.pokemondb.net/artwork/${pokemon?.name}.jpg`}
            alt="Pokemon"
            layout="fill"
            objectFit="contain"
            quality={100}
            className={clsx("rounded-t-lg", false && "p-6")}
          />
        </Div>
        <Div className="flex flex-col gap-2 items-center p-5">
          <Text className="mb-2 text-lg font-bold text-[#D9EEF3]" nature="h5">
            {cap(pokemon.name)}
          </Text>

          <Div className="flex gap-2">
            {pokemon.value?.abilities?.slice(0, 3).map((ability) => (
              <Text
                nature="span"
                key={ability.ability.name}
                className="mb-3 font-medium text-[#9CC2C9]"
              >
                {cap(ability.ability.name)}
              </Text>
            ))}
          </Div>

          <CollectButton pokemon={pokemon.name} />

          <Link target="_blank" href={`${POKEMON_SCRAP_URL}/${pokemon.name}`}>
            <Button variant="subtle">
              Details <IconArrowNarrowRight className="ml-2" />
            </Button>
          </Link>
        </Div>
      </Div>
    </>
  );
}
