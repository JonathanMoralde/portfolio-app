import React from "react";

type SectionTitleProps = {
  text: String;
  className?: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { text, className } = props;
  return (
    <>
      <h3
        className={`text-3xl md:text-5xl lg:text-6xl  ${
          className == null ? "" : className
        } font-semibold`}
      >
        {text}
      </h3>
    </>
  );
};

export default SectionTitle;
