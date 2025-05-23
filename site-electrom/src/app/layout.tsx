import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Electrom Engenharia - Engenharia das Energias",
  description: "Soluções sustentáveis em energia elétrica e solar com mais de 25 anos de experiência.",
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
      </body>
    </html>
  );
}
