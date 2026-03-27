import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Kollab — Where Cultures Collide",
  description: "Hub créatif & média — street culture, sneakers, manga, pop culture, créateurs de contenu.",
  openGraph: {
    title: "La Kollab — Where Cultures Collide",
    description: "Hub créatif & média — street culture, sneakers, manga, pop culture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
