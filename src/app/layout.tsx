import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const Web3Provider = dynamic(
  () => import("./../components/providers/Web3Provider")
);
const ToastProvider = dynamic(
  () => import("./../components/providers/ToastProvider")
);

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
      <body className={inter.className}>
        <Web3Provider>
          <ToastProvider>{children}</ToastProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
