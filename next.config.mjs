/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "raw.githubusercontent.com",
          },
          {
            protocol: 'https',
            hostname: "img.pokemondb.net",
          },
        ],
      },
};

export default nextConfig;
