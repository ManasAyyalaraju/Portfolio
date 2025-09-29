import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manas Ayyalaraju Portfolio",
  description: "Personal portfolio of Manas Ayyalaraju",
  icons: {
    icon: "/Logo_web_White.svg",
    shortcut: "/Logo_web_White.svg",
  },
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
        <main className="max-w-8xl mx-auto px-6 md:px-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
