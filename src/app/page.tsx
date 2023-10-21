import Drawer from "@/components/drawer/drawer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import SectionTitle from "@/components/sectionTitle/section_title";
import StyledBtn from "@/components/styledBtn/styledBtn";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-content bg-hero-pattern-dark">
        <Navbar />

        {/* Hero Section */}
        <section className=" h-sm-hero flex flex-col justify-between md:justify-center items-center md:text-left md:flex-row ">
          {/* Text */}
          <div className="container px-4 pt-4 md:w-2/5  md:me-[-3.5rem]">
            <h3 className="dark:text-white md:text-2xl text-xl font-semibold">
              Software Developer
            </h3>
            <h1 className="text-olive-green md:text-6xl text-5xl font-semibold uppercase">
              Jonathan Moralde
            </h1>
          </div>
          {/* Image */}
          <div className="h-3/4 w-full relative md:h-full md:w-3/5 md:me-[-5rem]">
            <Image
              src="/darkmode.svg"
              alt="Image of Jonathan Moralde"
              className="object-contain h-full w-full"
              fill
            />
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="w-full py-10 px-4 md:px-10 bg-gray-950 text-white text-center md:text-left">
          <div className="flex justify-between items-center">
            <SectionTitle text="Recent Projects" />
            <StyledBtn text="View All" margin="mx-0 mb-4" />
          </div>

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
