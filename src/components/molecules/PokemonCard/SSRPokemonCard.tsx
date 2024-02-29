import Image from "next/image";
import { Text, Button, CollectButton, Div } from "@/components";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cap, fetcher, POKEMON_SCRAP_URL } from "@/utils";

interface SSRPokemonCardProps {
  name: string;
  url: string;
}

export async function SSRPokemonCard({ name, url }: SSRPokemonCardProps) {
  const data: PokemonItemApiResponse = await fetcher(url);

  return (
    <>
      <Div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Div className="w-[100%] min-h-[230px] h-[fit-content] relative rounded-t-lg bg-white text-[#869ca1]">
          <Image
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </Div>
        <Div className="flex flex-col gap-2 items-center p-5">
          <Text className="mb-2 text-lg font-bold text-[#D9EEF3]" nature="h5">
            {cap(name)}
          </Text>

          <Div className="flex gap-2">
            {data?.abilities?.slice(0, 3).map((ability) => (
              <Text
                nature="span"
                key={ability.ability.name}
                className="mb-3 font-medium text-[#9CC2C9]"
              >
                {cap(ability.ability.name)}
              </Text>
            ))}
          </Div>

          <CollectButton pokemon={name} />

          <Link target="_blank" href={`${POKEMON_SCRAP_URL}/${name}`}>
            <Button variant="subtle">
              Details <IconArrowNarrowRight className="ml-2" />
            </Button>
          </Link>
        </Div>
      </Div>
    </>
  );
}
