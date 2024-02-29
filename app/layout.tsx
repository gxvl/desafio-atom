import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "The Blog.",
  description: "Desafio para a Atom Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Home />
      </body>
    </html>
  );
}
