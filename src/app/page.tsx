import Drawer from "@/components/drawer/drawer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import ProjectContainer from "@/components/projects/project_container";
import SectionTitle from "@/components/sectionTitle/section_title";
import StyledBtn from "@/components/styledBtn/styledBtn";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-content dark:bg-hero-pattern-dark bg-hero-pattern-light">
        <Navbar />
        {/* Hero Section */}
        <section className=" h-sm-hero lg:h-lg-hero lg:overflow-hidden flex flex-col justify-between md:justify-center items-center md:text-left md:flex-row ">
          {/* Text */}
          <div className="container px-4 pt-4 md:w-2/5  md:me-[-3.5rem] lg:me-[-10rem]">
            <h3 className="dark:text-white lg:text-4xl md:text-2xl text-xl font-semibold">
              Software Developer
            </h3>
            <h1 className="text-olive-green lg:text-8xl md:text-6xl text-5xl font-semibold uppercase">
              Jonathan Moralde
            </h1>
          </div>
          {/* Image */}
          <div className="h-3/4 w-full relative md:h-full md:w-3/5 md:me-[-5rem] lg:me-[-12rem] hidden dark:block transition-all">
            <Image
              src="/darkmode.svg"
              alt="Image of Jonathan Moralde"
              className="object-contain h-full w-full"
              fill
            />
          </div>
          <div className="h-3/4 w-full relative md:h-full md:w-3/5 md:me-[-5rem] lg:me-[-12rem] dark:hidden transition-all">
            <Image
              src="/lightmode.svg"
              alt="Image of Jonathan Moralde"
              className="object-contain h-full w-full"
              fill
            />
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="w-full py-10 px-4 md:px-10 lg:px-48 bg-gray-50 dark:bg-gray-950 dark:text-white text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <SectionTitle text="Recent Projects" />
            <StyledBtn
              text="View All"
              isLink={true}
              href="/projects"
              margin="mx-0 mb-4"
            />
          </div>

          <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ProjectContainer isLimit={true} />
          </article>
        </section>
      </main>
    </>
  );
}
