import Drawer from "@/components/drawer/drawer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import SectionTitle from "@/components/sectionTitle/section_title";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-content bg-hero-pattern-dark">
        <Navbar />

        {/* Hero Section */}
        <section className=" h-sm-hero flex flex-col justify-between items-center text-center md:text-left md:flex-row">
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
          <div className="h-3/4 w-full relative">
            <Image
              src="/darkmode.svg"
              alt="Image of Jonathan Moralde"
              className="object-contain h-full w-full"
              fill
            />
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="container py-10 px-4 bg-gray-950 text-white text-center md:text-left">
          <SectionTitle text="Recent Projects" />
          <article className="container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </article>
        </section>
      </main>
    </>
  );
}
