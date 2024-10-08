import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Chen",
  description:
    "Hi, this is my portfolio created with Next.js and deployed through Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ color: "#0D1B2A" }}>
        {" "}
        <NavBar />
        <div className="max-w-screen-xl px-2.5 md:px-20 mx-auto h-full select-none 2xl:max-w-screen-2xl ">
          {children}
        </div>
      </body>
    </html>
  );
}
