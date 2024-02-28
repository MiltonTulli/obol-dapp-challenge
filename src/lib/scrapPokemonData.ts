import { cap, POKEMON_SCRAP_URL } from "@/utils";
import { load } from "cheerio";

export type ScrapResponse = {
  content: string[] | null;
  img: string | null;
};
export async function scrap(
  pokemonName: string,
  lines = 2
): Promise<ScrapResponse> {
  const url = `${POKEMON_SCRAP_URL}/${pokemonName}`;
  try {
    const content: string[] = [];
    // Fetch HTML content of the website
    const result = await fetch(url);
    const html = await result.text();

    // Use Cheerio to parse HTML
    const $ = load(html);

    // Select description elements
    const p = $("#mw-content-text .mw-parser-output > p");
    p.slice(0, lines).each((index, element) => {
      content.push($(element).text().trim());
    });

    const img = $(`.mw-parser-output img[alt="${cap(pokemonName)}"]`);

    return {
      content: content.length ? content : null,
      img: img ? `https:${img.attr("src")}` : null,
    };
  } catch (error) {
    console.error("[scrap]: Error scrapping content");
    throw error;
  }
}
