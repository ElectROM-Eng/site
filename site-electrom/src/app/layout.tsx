import type { Metadata } from "next";
import { Suspense } from 'react';
import "../styles/globals.css";
import "../styles/carousel.css";
import Navbar from "@/components/Navbar";
import FacebookPixel from "@/components/FacebookPixel";
// import Footer from "@/components/Footer"; // Comentado para landing page - Footer será incluído na seção de serviços

export const metadata: Metadata = {
  title: "Electrom Engenharia - Engenharia das Energias",
  description: "Soluções sustentáveis em energia elétrica e solar com mais de 30 anos de experiência.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-primary">
        <Suspense>
          <FacebookPixel />
        </Suspense>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        {/* <Footer /> */} {/* Comentado para landing page - Footer será incluído na seção de serviços */}
      </body>
    </html>
  );
}
