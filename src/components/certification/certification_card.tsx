import React from "react";
import Link from "next/link";
import { FaLocationArrow, FaLongArrowAltRight } from "react-icons/fa";

const CertificationCard = () => {
  return (
    <div className="container shadow bg-white text-black py-4 px-3 rounded">
      <h3 className="mb-1">Javascript Developer</h3>
      <p className={"text-sm mb-1 font-light"}>FreeCodeCamp</p>
      <div className="flex">
        <Link href="#" className="flex group ">
          View Certificate
          <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform ms-1 self-center text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default CertificationCard;
