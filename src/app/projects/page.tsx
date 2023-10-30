import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project_card";
import ProjectContainer from "@/components/projects/project_container";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Projects = () => {
  return (
    <main>
      <Navbar />
      {/* Projects Section */}
      <section className="w-full px-4 max-sm:text-center md:px-10 lg:px-48 py-10 dark:text-white">
        <SectionTitle text="Projects" />
        <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectContainer isLimit={false} />
        </article>
      </section>
    </main>
  );
};

export default Projects;
