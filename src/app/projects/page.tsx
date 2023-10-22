import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Projects = () => {
  return (
    <main>
      <Navbar />
      {/* Projects Section */}
      <section className="w-full px-4 md:px-10 lg:px-28 py-10 dark:text-white">
        <SectionTitle text="Projects" />
        <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </article>
      </section>
    </main>
  );
};

export default Projects;
