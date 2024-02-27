import { FC } from "react";
import Image from "next/image";
import { Text, Button } from "@/components";
import { IconArrowNarrowRight } from "@tabler/icons-react";
interface PokemonCardProps {}

// <div className=" sm:w-[100%] sm:h-auto md:w-[395px] md:h-[506px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
// <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
export const PokemonCard: FC<PokemonCardProps> = () => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-[100%] h-[222px] relative rounded-t-lg">
        <Image
          className="w-[100%] "
          src="/fallback-pokemon.svg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center p-5">
        <Text className="mb-2 text-lg font-bold text-[#D9EEF3]" nature="h5">
          Pikachu
        </Text>

        <Text className="mb-3 font-medium text-[#9CC2C9]">
          List of the the abiilities here, max 3 or the info that you think is
          relevant
        </Text>

        <Button className="">Collect</Button>
        <Button variant="subtle">
          Details <IconArrowNarrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
