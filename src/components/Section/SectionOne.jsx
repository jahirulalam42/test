import React from "react";
import hybrid from "../../images/hybridwork.png";

const SectionOne = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hybrid} className="max-w-4xl rounded-lg px-16" />
          <div>
            <h1 className="text-6xl font-bold">
              Work together,
              <br /> wherever you work
            </h1>
            <p className="py-6">
              In the office, remote, or a mix of the two, with Miro,
              <br /> your team can connect, collaborate, and co-create in <br />{" "}
              one space no matter where you are.
            </p>
            <a className="link link-primary">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
