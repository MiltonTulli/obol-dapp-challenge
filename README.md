# Obol - dApp Challenge

by Milton Tulli

---

This is my solution to the Obol challenge. This is a very simple dApp that allows users to see a list of pokemons and "collect" them by signing a simple message and also filtering by name. Additionally, it includes a search feature that queries an endpoint to discover similar results and a web scraper that retrieves additional data for Pokémon

> The app is hosted here 👉 [https://obol-dapp-challenge.vercel.app/](https://obol-dapp-challenge.vercel.app/).

This project was bootstrapped with [Next](https://nextjs.org/).

## Project Screen Shot(s)

![app 1](https://github.com/MiltonTulli/obol-dapp-challenge/blob/main/screenshots/wp2.png)

## Folder Structure

Folder structure options and naming conventions for software projects

    ├── public              # Public files (static content)
    ├── src                 # Source files
    │   ├── app
    │   │   ├── api         # Api routes
    │   ├── components      # Shared Components using atomic design principles
    │   ├── contexts        # Custom react contexts
    │   ├── contracts       # ABIs for internal contracts
    │   ├── hooks           # Custom hooks
    │   ├── utils           # Custom utils
    │   └── types.ts        # Global types
    ├── ...
    └── README.md

## Getting Started

To run the game, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MiltonTulli/obol-dapp-challenge.git
   cd obol-dapp-challenge
   ```

2. **Install Dependencies:**
   ```bash
   pnpm install
   ```
3. **Start the Development Server:**
   ```bash
   pnpm run dev
   ```
   The app will be available at http://localhost:3000 in your web browser.

## Built with 🛠️

| Lib         | URL                                                                    |
| ----------- | ---------------------------------------------------------------------- |
| Next        | [https://nextjs.org/](https://nextjs.org/)                             |
| Wagmi       | [https://wagmi.sh/](https://wagmi.sh/)                                 |
| Viem        | [https://viem.sh/](https://viem.sh/)                                   |
| React Query | [https://tanstack.com/query/latest](https://tanstack.com/query/latest) |
| Tailwindcss | [https://tailwindcss.com/](https://tailwindcss.com/)                   |

## Author ✒️

> **Milton Tulli** > milton.tulli@gmail.com > [https://www.linkedin.com/in/miltontulli/](https://www.linkedin.com/in/miltontulli/)

## Notes:

- After constructing the tooltip component as per the designs, I noticed that its appearance did not align well with the pokemonCard. Therefore, I opted to use a smaller tooltip component that only displays the description. The scraping service continues to function in the same manner. I took the liberty of making this change to expedite things, but in a real-world scenario, it would have been a subject for discussion with the design team. Generally, there is always an element triggering the tooltip, and since this was not clear in the design, I also added an "info" icon. Hovering over this icon reveals the tooltip
