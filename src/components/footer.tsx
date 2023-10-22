import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pb-6 md:pb-10 bg-gray-950">
      {/* divider */}
      <div className=" h-1 bg-olive-green mx-4 md:mx-10 lg:mx-28 mb-4 md:mb-5 lg:mb-6"></div>
      {/* logo & social icons */}
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-28">
        <Link href="/" className="text-xl lg:text-4xl text-white me-4">
          Jhm.
        </Link>

        <div className="flex text-xl lg:text-2xl text-white">
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/" className="ms-4 ">
            <FaFacebook />
          </Link>
          <Link href="/" className="ms-4 ">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
