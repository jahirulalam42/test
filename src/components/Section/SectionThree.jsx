import React from "react";
import sectionImage from "../../images/section.png";

const SectionWithBackground = () => {
  return (
    <div className="grid place-content-center">
      <img className="max-w-screen-2xl" src={sectionImage} alt="" />
    </div>
  );
};

export default SectionWithBackground;
