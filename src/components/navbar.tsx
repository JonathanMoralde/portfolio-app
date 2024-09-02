"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import Drawer from "./drawer/drawer";
import StyledBtn from "./styledBtn/styledBtn";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-provider";

// type Theme = "light" | "dark";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [theme, setTheme] = useState<Theme>("dark");
  // TODO fix issue with initial render making useState not work

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <>
      <nav className={"py-3 px-4 md:py-6 lg:pt-12 lg:pb-16  md:px-10 lg:px-48"}>
        <div className={"w-full flex justify-between items-center"}>
          <Link href="/" className="">
            <h3
              className={
                "text-olive-green font-semibold text-xl md:text-2xl lg:text-3xl"
              }
            >
              JM.
            </h3>
          </Link>
          <div className=" w-3/4">
            <ul className="list-none dark:text-white flex gap-10 justify-end font-normal md:text-lg lg:text-xl">
              <li>
                <FaBars
                  className={"cursor-pointer md:hidden"}
                  onClick={openDrawer}
                />
              </li>
              <li className="max-sm:hidden">
                <Link
                  href="/projects/all/all"
                  className="relative after:transition-all after:absolute after:bottom-0 after:w-0 after:h-1 after:bg-olive-green after:block hover:after:w-full"
                >
                  Projects
                </Link>
              </li>
              <li className="max-sm:hidden">
                <Link
                  href="/experience"
                  className="relative after:transition-all after:absolute after:bottom-0 after:w-0 after:h-1 after:bg-olive-green after:block hover:after:w-full"
                >
                  Experience
                </Link>
              </li>
              <li className="max-sm:hidden">
                <StyledBtn
                  text="REACH OUT"
                  isLink={true}
                  href="mailto:jonathanhernandez.moralde@gmail.com"
                  margin="mx-0"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div
        key={theme} // Key is used here to trigger re-mounting and animation on theme change
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="rounded-full fixed md:bottom-[3rem] md:right-[5rem] bottom-[3rem] right-[2rem] z-50 dark:bg-gray-100 bg-[#181B1A] text-olive-green shadow dark:shadow-none"
      >
        <button onClick={toggleTheme} className="md:p-3 p-2">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
