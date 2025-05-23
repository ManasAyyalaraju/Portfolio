import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manas Ayyalaraju Portfolio",
  description: "Personal portfolio of Manas Ayyalaraju",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full bg-white text-gray-900 text-base `}
      >
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 md:px-10">{children}</main>
      </body>
    </html>
  );
}
