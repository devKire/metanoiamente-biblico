import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Metanoiamente Bíblico - Transformação Espiritual através das Escrituras",
  description:
    "Alcance uma transformação genuína da mente e do coração através do estudo profundo da Bíblia. Descubra o verdadeiro significado da metanoia e transforme sua vida espiritual.",
  openGraph: {
    title:
      "Metanoiamente Bíblico - Transformação Espiritual através das Escrituras",
    description:
      "Alcance uma transformação genuína da mente e do coração através do estudo profundo da Bíblia. Descubra o verdadeiro significado da metanoia e transforme sua vida espiritual.",
    url: "https://metanoiamentebiblico.vercel.app",
    siteName:
      "Metanoiamente Bíblico - Transformação Espiritual através das Escrituras",
    images: [
      {
        url: "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Metanoiamente Bíblico - Transformação Espiritual através das Escrituras",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
