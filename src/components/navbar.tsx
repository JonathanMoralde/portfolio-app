"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaSun } from "react-icons/fa";
import Drawer from "./drawer/drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className={"py-6 px-4"}>
        <div className={"container flex justify-between items-center"}>
          <Link href="/">
            <h3 className={"text-olive-green font-semibold text-xl"}>Jhm.</h3>
          </Link>
          <div className="icon-container text-olive-green text-lg flex">
            <FaSun className="cursor-pointer" />
            <FaBars className={"ms-4 cursor-pointer"} onClick={openDrawer} />
          </div>
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
