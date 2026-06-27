import type { Metadata } from "next";
import { Anton, Inter, Lobster } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionInit from "@/components/motion/MotionInit";
import "./globals.css";

// Sans body, neutra y legible.
const bodyFont = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
  display: "swap",
});

// Sans condensada/heavy en mayúsculas para titulares.
const displayFont = Anton({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Script con peso para la palabra clave de cada titular.
const scriptFont = Lobster({
  variable: "--font-script-raw",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edgard Ibarra — Estrategia de marketing para restaurantes",
  description:
    "Ayudo a dueños de restaurante a que su marca se vea, se recuerde y se elija. Diagnóstico gratuito por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <MotionInit />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
