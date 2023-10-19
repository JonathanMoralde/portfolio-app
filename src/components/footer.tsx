import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container pb-10 bg-gray-950">
      {/* divider */}
      <div className=" h-1 bg-olive-green mx-4 mb-4"></div>
      {/* logo & social icons */}
      <div className="flex justify-between items-center px-4">
        <Link href="/" className="text-xl text-white">
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
