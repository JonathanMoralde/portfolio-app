import React from "react";
import { Experience } from "./page";

type Props = { data: Experience };

const ExperienceCard = (props: Props) => {
  const { data } = props;
  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-1">
      <div className="text-gray-500 uppercase md:w-1/4 md:text-xl lg:text-2xl">
        <p className="">{data.date}</p>
      </div>

      <div className="bg-white text-black  py-4 px-3 rounded-lg shadow dark:shadow-none md:w-1/2">
        <h3 className="md:text-lg lg:text-xl font-medium">{data.position}</h3>
        <h5 className=" text-base  text-gray-500 mb-2">{data.company}</h5>
        <p className="mb-2 text-gray-700">{data.description}</p>
        <p className="text-gray-500">Tech used: {data.tech}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
