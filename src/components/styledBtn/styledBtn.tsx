"use client";

import Link from "next/link";
import React from "react";

type StyledBtnProps = {
  text: string;
  width?: string;
  height?: string;
  isLink?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnColor?: string;
  margin?: string;
  padding?: string;
};

const StyledBtn = ({
  text,
  width,
  height,
  btnColor,
  isLink,
  href,
  onClick,
  margin,
  padding,
}: StyledBtnProps) => {
  const clicked = () => {
    console.log("clicked");
  };

  return isLink ? (
    <Link
      href={href ? href : "#"}
      className={`${btnColor ?? "bg-olive-green"} ${width ?? ""} ${
        height ?? ""
      } ${margin ?? "mx-auto mb-4"} ${
        padding ?? "py-2 px-8"
      } rounded text-xl dark:text-white hover:bg-gray-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick ?? clicked}
      className={`${btnColor ?? "bg-olive-green"} ${width ?? ""} ${
        height ?? ""
      } ${margin ?? "mx-auto mb-4"} ${
        padding ?? "py-2 px-8"
      } rounded text-xl dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors`}
    >
      {text}
    </button>
  );
};

export default StyledBtn;
