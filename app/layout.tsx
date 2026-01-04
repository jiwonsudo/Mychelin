import type { Metadata } from "next";
import { fonts } from "@/app/fonts";
import "@/app/globals.css";

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mychelin",
  description: "당신만의 미식 가이드북",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${fonts.hsBombaram.variable} ${fonts.pretendardVariable.variable}`}>
      <body className="font-main mt-12">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
