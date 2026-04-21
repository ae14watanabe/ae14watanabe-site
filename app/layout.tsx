import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Kosugi_Maru } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const kosugiMaru = Kosugi_Maru({
  variable: "--font-jp",
  weight: "400",
});

export const metadata: Metadata = {
  title: "渡辺 龍二 / ae14watanabe",
  description: "渡辺龍二 (ae14watanabe) のプロフィールサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${kosugiMaru.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
