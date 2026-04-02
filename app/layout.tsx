import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CLDtech",
  description: "Soluções digitais de alta performance",

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${mono.className} bg-[#0b0f2a] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}