import Project from "@/model/project";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  data: Project;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  const stackClassMap: Record<string, string> = {
    REACT: "bg-cyan-200",
    BOOTSTRAP: "bg-violet-400",
    TAILWIND: "bg-cyan-200",
    HTML: "bg-orange-300",
    CSS: "bg-sky-200",
    PHP: "bg-indigo-300",
    JAVASCRIPT: "bg-yellow-200",
    MYSQL: "bg-yellow-300",
    FLUTTER: "bg-blue-300",
    FIREBASE: "bg-amber-300",
    EXPRESSJS: "bg-amber-200  ",
    NODEJS: "bg-amber-200  ",
    MONGODB: "bg-lime-300",
    POSTGRESQL: "bg-blue-300",
    NEXTJS: "bg-slate-300",
    QUASAR: "bg-violet-300",
    VUEJS: "bg-green-200",
  };

  return (
    <div className=" w-full">
      <Link href={data.project_link} target="_blank">
        <div className=" w-full h-64 relative bg-hero-pattern-dark dark:bg-hero-pattern-light rounded-lg dark:shadow-lg shadow-none group transition-transform py-4 overflow-hidden">
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
          <h3 className="mt-2 text-xl lg:text-2xl font-semibold">
            {data.title}
          </h3>
        </Link>
        <div className="flex max-sm:justify-center mt-2">
          {data.stack.map((s, index) => {
            const className = `flex items-center me-2 lg:me-4 ${
              stackClassMap[s] || ""
            } px-2 py-1 rounded-xl text-xs lg:text-sm shadow dark:shadow-none`;
            return (
              <div key={index} className={className}>
                <div className="h-1 w-1 rounded-full bg-gray-950  me-1"></div>
                <p className="text-gray-950 max-sm:tracking-wide tracking-wider font-medium">
                  {s}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
