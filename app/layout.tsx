import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smile Solutions | Cabinet de Tehnica Dentara",
  description:
    "Laborator digital de tehnica dentara din Romania. Solutii premium pentru coroane, fatete, proteze si dinti in 24 de ore.",
  keywords: [
    "cabinet tehnica dentara",
    "laborator dentar digital",
    "dinti in 24 ore",
    "implant dentar",
    "protetica dentara",
    "Romania",
  ],
  openGraph: {
    title: "Smile Solutions | Cabinet de Tehnica Dentara",
    description:
      "Precizie digitala, estetica premium si flux rapid de productie pentru restaurari dentare moderne.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
