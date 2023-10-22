"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Drawer from "./drawer/drawer";

type Theme = "light" | "dark";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>("dark");
  // TODO fix issue with initial render making useState not work

  const openDrawer = () => {
    setIsOpen(true);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <nav className={"py-6 px-4 md:py-9 lg:py-16 md:px-10 lg:px-28"}>
        <div className={"w-full flex justify-between items-center"}>
          <Link href="/" className="">
            <h3
              className={
                "text-olive-green font-semibold text-xl md:text-3xl lg:text-4xl"
              }
            >
              Jhm.
            </h3>
          </Link>
          <div className="max-sm:hidden w-1/2">
            <ul className="list-none dark:text-white flex justify-around font-semibold md:text-xl lg:text-2xl">
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
          <div className="text-olive-green text-xl lg:text-2xl flex">
            <Link href="/" className="max-sm:hidden">
              <FaInstagram />
            </Link>
            <Link href="/" className="ms-4 max-sm:hidden">
              <FaFacebook />
            </Link>
            <Link href="/" className="ms-4 max-sm:hidden">
              <FaGithub />
            </Link>
            <button className="ms-4" onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <FaBars
              className={"ms-4 cursor-pointer md:hidden"}
              onClick={openDrawer}
            />
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
