import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ana Maria Medina | International Model — Medellín, Colombia",
  description:
    "Ana Maria Medina — Professional model from Medellín, Colombia. Available for fashion campaigns, editorial photography, commercial shoots, luxury events and brand collaborations. Book now.",
  keywords: [
    "Ana Maria Medina model",
    "Colombian model Medellin",
    "Latin fashion model",
    "Hire professional model Colombia",
    "fashion model Medellín",
    "editorial model Colombia",
  ],
  openGraph: {
    title: "Ana Maria Medina | International Model",
    description: "Professional model from Medellín. Fashion, editorial, commercial & events.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
