import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pb-10 bg-gray-950">
      {/* divider */}
      <div className=" h-1 bg-olive-green mx-10 mb-4"></div>
      {/* logo & social icons */}
      <div className="flex justify-between items-center px-10">
        <Link href="/" className="text-xl text-white me-4">
          Jhm.
        </Link>

        <div className="flex text-xl text-white">
          <FaInstagram />
          <FaFacebook className="ms-4" />
          <FaGithub className="ms-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
