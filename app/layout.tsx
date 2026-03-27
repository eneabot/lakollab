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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
