"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const AnimateScroll = ({ children }: Props) => {
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

export default AnimateScroll;
