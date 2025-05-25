import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/carousel.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
