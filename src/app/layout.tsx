import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Social",
  description: "A simple social media interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-light min-h-screen h-full flex flex-col justify-between`}
      >
        <div>
          <NavBar />
          <main className="w-full pt-28 flex max-w-4xl mx-auto flex-col items-center justify-between px-4 md:px-14 lg:px-0">
            {children}
          </main>
        </div>
        <footer className="w-full text-center bg-zinc-100 dark:bg-zinc-950 p-5 mt-5">
          Simple Social
        </footer>
      </body>
    </html>
  );
}
