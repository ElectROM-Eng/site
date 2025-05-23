import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Electrom Engenharia - Engenharia das Energias",
  description: "Soluções sustentáveis em energia elétrica e solar com mais de 25 anos de experiência.",
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
      <body className="font-primary" suppressHydrationWarning={true}>
        <Navbar />
        <main className="pt-16">
        {children}
        </main>
      </body>
    </html>
  );
}
