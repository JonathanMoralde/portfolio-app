import React from "react";

type EducationalBgProps = {
  school: string;
  yr: string;
  description: string;
};

const EducationalBg = (props: EducationalBgProps) => {
  const { school, yr, description } = props;
  return (
    <div className="container mb-4">
      <div className="flex justify-between">
        <h3 className="text-xl w-1/2">{school}</h3>
        <h5 className="bg-olive-green rounded py-1 px-2 self-center">
          <p className="">{yr}</p>
        </h5>
      </div>

      <p className="font-extralight w-3/4">{description}</p>
    </div>
  );
};

export default EducationalBg;
