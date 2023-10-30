import Project from "@/model/project";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  id: number;
  data: Project;
};

const ProjectCard = ({ id, data }: ProjectCardProps) => {
  console.log(id);

  return (
    <div key={id} className=" w-full">
      <Link href={data.project_link} target="_blank">
        <div className=" w-full h-64 relative bg-hero-pattern-dark dark:bg-hero-pattern-light rounded-lg shadow-lg group transition-transform py-4 overflow-hidden">
          <Image
            src={data.image_url}
            alt={data.title}
            className="object-contain h-full w-full group-hover:scale-105 transition-transform py-4"
            fill
            sizes="w-full"
          />
        </div>
      </Link>
      <div className="w-full">
        <Link href={data.project_link} target="_blank" className="inline-block">
          <h3 className="mt-2 text-2xl font-semibold">{data.title}</h3>
        </Link>
        <div className="flex mt-2">
          {data.stack.map((s) => {
            return (
              <div
                className={`flex items-center me-4 ${
                  s === "REACT" ? "bg-cyan-300" : ""
                } ${s === "BOOTSTRAP" ? "bg-violet-400" : ""} ${
                  s === "HTML5" ? "bg-orange-400" : ""
                } ${s === "CSS3" ? "bg-sky-300" : ""} ${
                  s === "PHP" ? "bg-indigo-400" : ""
                } ${s === "JAVASCRIPT" ? "bg-yellow-300" : ""} ${
                  s === "MYSQL" ? "bg-yellow-400" : ""
                } ${s === "FLUTTER" ? "bg-blue-300" : ""} ${
                  s === "FIREBASE" ? "bg-amber-400" : ""
                }  px-2 py-1 rounded-xl text-sm`}
              >
                <div className="h-1 w-1 rounded-full bg-gray-950  me-1"></div>
                <p className="text-gray-950 tracking-wider font-medium">{s}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
