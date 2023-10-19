import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Jonathan Moralde",
  description: "Personal Portfolio Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-white
        dark:bg-gray-950
        `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
