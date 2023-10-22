import React from "react";
import Image from "next/image";

type StackCardProps = {
  url: string;
};

const StackCard = (props: StackCardProps) => {
  const { url } = props;

  return (
    <div className="w-28% md:w-1/5 h-24 md:h-28 bg-white py-5 md:py-7 px-4 md:px-8 mb-4 me-4 rounded shadow">
      <div className="relative container h-full">
        <Image src={url} alt={url} fill className="object-contain" />
      </div>
    </div>
  );
};

export default StackCard;
