import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tayblendz.online"),
  title: "Tay Blendz | Platteville Barber",
  description:
    "Modern cuts, clean fades, and sharp finishes from Tay The Barber in Platteville, Wisconsin.",
  openGraph: {
    title: "Tay Blendz | Platteville Barber",
    description:
      "Modern cuts, clean fades, and sharp finishes from Tay The Barber in Platteville, Wisconsin.",
    url: "https://tayblendz.online",
    siteName: "Tay Blendz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
