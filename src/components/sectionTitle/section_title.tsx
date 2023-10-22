import React from "react";

type SectionTitleProps = {
  text: String;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props;
  return (
    <h3 className="text-3xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 font-semibold">
      {text}
    </h3>
  );
};

export default SectionTitle;
