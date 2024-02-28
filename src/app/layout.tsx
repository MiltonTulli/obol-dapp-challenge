import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3Provider, ToastProvider } from "@/components/providers";
import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obol Pokemon list",
  description: "Interactive pokemon showcase with some web3 features",
  icons: {
    icon: "/obol-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Web3Provider>
          <ToastProvider>{children}</ToastProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
