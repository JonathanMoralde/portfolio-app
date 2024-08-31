import React from "react";
import ProjectCard from "./project_card";
import { Data, fetchProjects } from "@/app/actions";

type ProjectContainerProps = {
  isLimit: boolean;
  currentProjects?: string;
  currentTech?: string;
};

const ProjectContainer = async ({
  isLimit,
  currentProjects,
  currentTech,
}: ProjectContainerProps) => {
  const data: Data = await fetchProjects(isLimit, currentProjects, currentTech);

  return (
    <>
      {data?.map((proj) => {
        const id = proj.id;
        return <ProjectCard key={id} data={proj} />;
      })}
    </>
  );
};

export default ProjectContainer;
