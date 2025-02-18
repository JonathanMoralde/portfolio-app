"use client";

import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

type DrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`bg-white dark:bg-[#181B1A] dark:text-white fixed top-0 left-0 right-0 bottom-0 transition-all ${
        !isOpen ? "translate-x-full" : ""
      } z-10`}
    >
      <FaTimes
        onClick={closeDrawer}
        className="cursor-pointer absolute right-10 top-10 text-lg text-olive-green"
      />
      <div className="container flex justify-center items-center h-full">
        <ul className="list-none h-1/4 flex flex-col justify-between text-xl font-semibold uppercase">
          <li>
            <Link href="/projects/all/all">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="mailto:jonathanhernandez.moralde@gmail.com">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
