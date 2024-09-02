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
  hoverOpacity?: boolean;
  textColor?: string;
  target?: string;
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
  hoverOpacity,
  textColor,
  target,
}: StyledBtnProps) => {
  const clicked = () => {
    console.log("clicked");
  };

  return isLink ? (
    <Link
      href={href ? href : "#"}
      target={target ?? undefined}
      className={`${btnColor ?? "bg-olive-green"} ${width ?? ""} ${
        height ?? ""
      } ${margin ?? "mx-auto mb-4"} ${padding ?? "py-2 px-8"} ${
        textColor ? textColor : "dark:text-white"
      } rounded-full text-sm md:text-xl  ${
        hoverOpacity
          ? "hover:opacity-80 transition-opacity"
          : "hover:bg-[#181B1A] hover:text-white dark:hover:text-[#181B1A] dark:hover:bg-white"
      } transition-colors`}
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
      } rounded-full text-sm md:text-xl ${
        textColor ? textColor : "dark:text-white"
      }  ${
        hoverOpacity
          ? "hover:opacity-80 transition-opacity"
          : "hover:bg-[#181B1A] hover:text-white dark:hover:text-[#181B1A] dark:hover:bg-white"
      } transition-colors`}
    >
      {text}
    </button>
  );
};

export default StyledBtn;
