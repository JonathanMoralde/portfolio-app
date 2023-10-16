import React from "react";
import Link from "next/link";
import { FaBars, FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className={"py-6 px-4"}>
      <div className={"container flex justify-between items-center"}>
        <Link href="/">
          <h3 className={"text-green-300 font-semibold text-xl"}>Jhm.</h3>
        </Link>
        <div className="icon-container text-green-300 text-base flex">
          <FaSun />
          <FaBars className={"ms-4 cursor-pointer"} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
