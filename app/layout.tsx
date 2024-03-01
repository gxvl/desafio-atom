import type { Metadata } from "next";
import "./globals.css";
import Home from "@app/page";

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
    <html lang="pt-BR">
      <body>
        <Home />
      </body>
    </html>
  );
}
