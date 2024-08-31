import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <div className="bg-white text-black  py-4 px-3 rounded-lg shadow dark:shadow-none">
      <h3 className="md:text-lg lg:text-xl font-medium">
        Frontend Developer Intern
      </h3>
      <div className="flex justify-between mb-2 text-gray-500">
        <h5 className=" text-base w-1/2">
          Pixel8 Web Solutions & Consultancy Inc.
        </h5>
        <p>Feb 2024 - Apr 2024</p>
      </div>
      <p className="mb-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in unde
        distinctio, velit quidem officia ipsa eveniet dicta voluptatum id? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quasi
        inventore, facilis dolorum quaerat provident nemo? Id maiores error
        asperiores.
      </p>
      <p className="text-gray-500">Tech used:</p>
    </div>
  );
};

export default ExperienceCard;
