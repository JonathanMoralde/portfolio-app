"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const cardVariants: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const LeftToRight = ({ children }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default LeftToRight;
