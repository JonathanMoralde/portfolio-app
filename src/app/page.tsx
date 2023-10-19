import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-content bg-hero-pattern-dark">
      <Navbar />

      {/* Hero Section */}
      <section className=" h-sm-hero flex flex-col justify-between">
        {/* Text */}
        <div className="container px-4 pt-4">
          <h3 className="dark:text-white text-xl font-semibold">
            Software Developer
          </h3>
          <h1 className="text-olive-green text-5xl font-semibold uppercase">
            Jonathan Moralde
          </h1>
        </div>
        {/* Image */}
        <div className="max-sm:h-3/4 w-full relative">
          <Image
            src="/darkmode.svg"
            alt="Image of Jonathan Moralde"
            className="object-contain h-full w-full"
            fill
          />
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="container py-10 px-4 bg-gray-950">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Recent Projects
        </h3>
      </section>
    </main>
  );
}
