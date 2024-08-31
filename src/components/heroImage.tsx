"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useTheme } from "@/context/theme-provider";
import { motion } from "framer-motion";

type Props = {};

const HeroImage = (props: Props) => {
  const { theme } = useTheme();
  return (
    <motion.div
      key={theme} // Key is used here to trigger re-mounting and animation on theme change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="h-3/4 w-full relative md:h-full md:w-3/5 md:me-[-5rem] lg:me-[-12rem] transition-all"
    >
      {theme === "dark" ? (
        <Image
          src="/darkmode.svg"
          alt="Image of Jonathan Moralde"
          className="object-contain h-full w-full"
          fill
          priority
        />
      ) : (
        <Image
          src="/lightmode.svg"
          alt="Image of Jonathan Moralde"
          className="object-contain h-full w-full"
          fill
          priority
        />
      )}
    </motion.div>
  );
};

export default HeroImage;
