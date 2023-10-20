import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Drawer = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 bottom-0 transition-all translate-x-full z-10">
      <FaTimes className="absolute right-10 top-10 text-lg " />
      <div className="container flex justify-center items-center h-full">
        <ul className="list-none h-1/4 flex flex-col justify-between text-xl font-semibold">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
