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
        <h3 className="text-xl lg:text-2xl w-1/2">{school}</h3>
        <h5 className="bg-olive-green rounded py-1 px-2 self-center lg:text-lg">
          {yr}
        </h5>
      </div>

      <p className="font-extralight w-3/4 lg:text-lg">{description}</p>
    </div>
  );
};

export default EducationalBg;
