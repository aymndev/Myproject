import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./layout.css";

const geist = Geist({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My Website",
  description: "Modern, responsive Next.js site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Header />

        <main className="min-h-[60vh] px-6 py-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
