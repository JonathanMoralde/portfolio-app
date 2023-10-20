import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Projects = () => {
  return (
    <main>
      <Navbar />
      {/* Projects Section */}
      <section className="container px-4 py-10 text-white">
        <SectionTitle text="Projects" />
        <article className="container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </article>
      </section>
    </main>
  );
};

export default Projects;
