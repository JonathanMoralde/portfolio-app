import React from "react";
import Link from "next/link";
import { FaLocationArrow, FaLongArrowAltRight } from "react-icons/fa";

const CertificationCard = () => {
  return (
    <div className="container mb-4 bg-white text-black py-4 px-3 rounded">
      <h3 className="mb-1">Javascript Developer</h3>
      <p className={"text-sm mb-1"}>FreeCodeCamp</p>
      <div className="flex">
        <Link href="#" className="me-1">
          View Certificate
        </Link>
        <FaLongArrowAltRight className="self-center text-xl" />
      </div>
    </div>
  );
};

export default CertificationCard;
