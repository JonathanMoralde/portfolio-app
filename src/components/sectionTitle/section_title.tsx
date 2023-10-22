import React from "react";

type SectionTitleProps = {
  text: String;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props;
  return <h3 className="text-3xl md:text-5xl mb-4 font-semibold">{text}</h3>;
};

export default SectionTitle;
