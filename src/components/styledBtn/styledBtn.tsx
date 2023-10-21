"use client";

import React from "react";

type StyledBtnProps = {
  text: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  btnColor?: string;
  margin?: string;
  padding?: string;
};

const StyledBtn = ({
  text,
  width,
  height,
  btnColor,
  onClick,
  margin,
  padding,
}: StyledBtnProps) => {
  return (
    <button
      className={`${btnColor ?? "bg-olive-green"} ${width ?? ""} ${
        height ?? ""
      } ${margin ?? "mx-auto mb-4"} ${
        padding ?? "py-2 px-8"
      } rounded text-xl dark:text-white`}
    >
      {text}
    </button>
  );
};

export default StyledBtn;
