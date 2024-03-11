import React from "react";
import integrations from "../../images/integrations.png";

const SectionTwo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={integrations} className="max-w-4xl rounded-lg px-16" />
          <div>
            <h1 className="text-6xl font-bold">
              Connect <br />
              your tools, <br />
              close your tabs
            </h1>
            <p className="py-6">
              Whether you want to edit your Google Docs, resolve <br /> Jira
              issues, or collaborate over Zoom, Miro has 100+ <br />{" "}
              integrations with tools you already use and love.
            </p>
            <a className="link link-primary">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
