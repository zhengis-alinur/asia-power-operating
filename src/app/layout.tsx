import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { keywords } from "@/data/keywords";
import Footer from "@/components/Footer";

const ptSans = PT_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Asia Power Operating",
    template: "%s | Asia Power Operating",
  },
  description:
    "Весь спектр электротехничесской продукции в Астане/НурСултане в одном месте по оптовым ценам. Широкий ассортимент. Гарантия качества. Вся продукция сертифицированна.",
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  keywords,
  openGraph: {
    images: ["/favicon.png"],
    description:
      "Весь спектр электротехничесской продукции в Астане/НурСултане в одном месте по оптовым ценам. Широкий ассортимент. Гарантия качества. Вся продукция сертифицированна.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${ptSans.className} antialiased flex flex-col justify-between min-h-screen`}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
