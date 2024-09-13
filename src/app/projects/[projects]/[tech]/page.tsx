import AnimateScroll from "@/components/AnimateScroll";
import Navbar from "@/components/navbar";
import Dropdown from "@/components/projects/dropdown";
import ProjectContainer from "@/components/projects/project_container";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

type Props = {
  params: { projects: string; tech: string };
};
const Projects = (props: Props) => {
  const { projects, tech }: { projects: string; tech: string } = props.params;
  return (
    <main>
      <Navbar />
      {/* Projects Section */}
      <section className="w-full px-4 max-sm:text-center md:px-10 lg:px-48 py-10 dark:text-white">
        <AnimateScroll>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4 lg:mb-10 ">
            <SectionTitle text="Projects" />

            <div className="flex gap-5">
              <Dropdown
                isProjects={true}
                currentTech={tech}
                currentProjects={projects}
                label={`${projects[0].toLocaleUpperCase()}${projects.substring(
                  1
                )} Projects`}
                options={["All", "Freelance", "Personal"]}
              />
              <Dropdown
                isProjects={false}
                currentTech={tech}
                currentProjects={projects}
                label={`${tech[0].toLocaleUpperCase()}${tech.substring(1)}`}
                options={[
                  "All",
                  "NextJS",
                  "React",
                  "Nodejs",
                  "MongoDB",
                  "VueJS",
                  "Quasar",
                  "PHP",
                  "MySQL",
                  "Tailwind",
                  "Bootstrap",
                  "Flutter",
                  "Firebase",
                  "HTML",
                  "CSS",
                  "Javascript",
                  "Wordpress",
                ]}
              />
            </div>
          </div>
        </AnimateScroll>
        <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectContainer
            isLimit={false}
            currentProjects={projects}
            currentTech={tech}
          />
        </article>
      </section>
    </main>
  );
};

export default Projects;
