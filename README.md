# Obol - dAPP Challenge

by Milton Tulli

---

This is my solution to the Obol challenge. This is a very simple dApp that allows users to see a list of pokemons and "collect" them by signing a simple message and also filtering by name.

> The app is hosted here 👉 [https://obol-dapp-challenge.vercel.app/](https://obol-dapp-challenge.vercel.app/).

This project was bootstrapped with [Next](https://nextjs.org/).

## Project Screen Shot(s)

![app 1](https://github.com/MiltonTulli/obol-dapp-challenge/blob/main/screenshots/wp1.png)

## Folder Structure

Folder structure options and naming conventions for software projects

    ├── public              # Public files (static content)
    ├── src                 # Source files
    │   ├── app
    │   │   ├── api         # Api routes
    │   ├── components      # Shared Components using atomic design principles
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
   cd blackjack
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
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

- El tooltip component usé otro componente ya que no estaba claro el diseño pero use un servicio custom
- La firma de la tx estoy solamente haciendo una firma de un mensaje. Al ejercicio no establecer qué tx e
