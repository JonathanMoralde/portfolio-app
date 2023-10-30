"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./project_card";
import supabase from "../../../supabase";
import Project from "@/model/project";
import ProjectSkeleton from "./project_skeleton";

type Data = Array<Project> | null;

type ProjectContainerProps = {
  isLimit: Boolean;
};

const ProjectContainer = ({ isLimit }: ProjectContainerProps) => {
  const [data, setData] = useState<Data>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(() => {
    const fetchSupabaseData = async () => {
      try {
        let { data: projects, error } = !isLimit
          ? await supabase
              .from("projects")
              .select("*")
              .order("created_at", { ascending: false })
          : await supabase
              .from("projects")
              .select("*")
              .order("created_at", { ascending: false })
              .limit(4);

        if (error) {
          console.error("Error fetching data from Supabase:", error);
        } else {
          // Use the 'data' variable to access the fetched data

          setData(projects);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSupabaseData();
  }, []);

  console.log(data);

  return (
    <>
      {isLoading ? ( // Conditionally render skeleton cards when loading
        <>
          <ProjectSkeleton />
        </>
      ) : (
        data?.map((proj) => {
          console.log(`id in container${proj.id}`);
          return <ProjectCard key={proj.id} data={proj} />;
        })
      )}
    </>
  );
};

export default ProjectContainer;
