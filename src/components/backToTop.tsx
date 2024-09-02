"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";

type Props = {};

const BackToTop = (props: Props) => {
  return (
    <button
      className="md:flex items-center gap-2 hidden "
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp /> <span>Back to Top</span>
    </button>
  );
};

export default BackToTop;
