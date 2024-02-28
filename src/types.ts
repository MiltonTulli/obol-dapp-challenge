type Toast = {
  id: number;
  message: string;
  type: string;
};

type PokemonSimpleResponse = {
  name: string;
  url: string;
};
interface PokemonListApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimpleResponse[];
}

interface PokemonItemApiResponse {
  abilities: Array<{
    ability: { name: string; url: string };
    is_hidden: boolean;
  }>;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  id: number;
}
