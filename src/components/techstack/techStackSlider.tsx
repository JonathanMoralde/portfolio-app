"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StackCard from "./stack_card";

type Props = {};

const techStackImages = [
  "/techstack/next-js-seeklogo.com.svg",
  "/techstack/React-icon.svg",
  "/techstack/Node.js_logo.svg",
  "/techstack/MongoDB_Logo.svg",
  "/techstack/Vue.js_Logo_2.svg",
  "/techstack/Quasar.svg",
  "/techstack/PHP-logo.svg",
  "/techstack/mysql-official.svg",
  "/techstack/Bootstrap_logo.svg",
  "/techstack/Tailwind_CSS_logo.svg",
  "/techstack/flutter-svgrepo-com.svg",
  "/techstack/firebase-svgrepo-com.svg",
  "/techstack/Figma Icon (Community).svg",
];

const TechStackSlider = (props: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-6 md:px-4 lg:px-2">
      <Slider {...settings}>
        {techStackImages.map((url, index) => (
          <StackCard key={index} url={url} />
        ))}
      </Slider>
    </div>
  );
};

export default TechStackSlider;
