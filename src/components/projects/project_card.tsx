import Project from "@/model/project";
import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  data: Project;
};

const ProjectCard = ({ data }: ProjectCardProps, key: number) => {
  console.log(data);
  console.log(key);

  return (
    <div key={`${key}`} className=" w-full h-40 lg:h-80 shadow-lg">
      <div className="h-3/4 w-full relative bg-white rounded-lg">
        <Image
          src={data.image_url}
          alt={data.title}
          className="object-contain h-full w-full"
          fill
          sizes="w-full"
        />
      </div>
      <div className="w-full h-1/5">
        <h3>{data.title}</h3>
        <div className="flex">
          {data.stack.map((s) => {
            return <p className="me-4">{s}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
