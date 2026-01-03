import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

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
      <body className="font-main">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
