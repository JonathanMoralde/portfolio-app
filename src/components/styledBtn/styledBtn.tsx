"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

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
  isDropdown?: boolean;
  dropdownOptions?: { label: string; href: string }[];
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
  isDropdown = false,
  dropdownOptions = [],
}: StyledBtnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const clicked = () => {
    console.log("clicked");
  };

  return isLink ? (
    isDropdown ? (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          // target={target ?? undefined}
          className={`${btnColor ?? "bg-olive-green"} ${width ?? ""} ${
            height ?? ""
          } ${margin ?? "mx-auto mb-4"} ${padding ?? "py-2 px-8"} ${
            textColor ? textColor : "dark:text-white"
          } rounded-full text-sm md:text-xl  ${
            hoverOpacity
              ? "hover:opacity-80 transition-opacity"
              : "hover:bg-[#181B1A] hover:text-white dark:hover:text-[#181B1A] dark:hover:bg-white"
          } transition-colors flex items-center gap-2`}
        >
          <span>{text}</span>
          <LuChevronDown />
        </button>

        {isOpen && (
          <div
            className="z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
          >
            <div className="py-1 px-1 max-h-80 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-700">
              {dropdownOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.href}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors`}
                  role="menuitem"
                  target={target}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    ) : (
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
    )
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
