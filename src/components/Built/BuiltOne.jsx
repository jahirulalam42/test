import React from "react";
import secondDiv from "../../images/divtwo.png";

const BuiltOne = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 flex flex-col py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Built for the way you work</h1>
            <div className="flex justify-between py-10">
              <ul className="flex flex-wrap">
                <li className="mr-8">Brainstorming</li>
                <li className="mr-8">Diagraming</li>
                <li className="mr-8">Meeting & Workshops</li>
                <li className="mr-8">Scrum Events</li>
                <li className="mr-8">Mapping</li>
                <li className="mr-8">Research and Design</li>
                <li className="mr-8">Strategic Planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={secondDiv} className="max-w-3xl rounded-lg px-16" />
          <div>
            <p className="font-bold">Brainstorming!</p>
            <p className="py-6">
              Unleash creative ideas and build on <br /> them with the help of
              sticky notes, <br /> images, mind maps, videos, drawing <br />{" "}
              capabilities — the list goes on.
            </p>
            <a className="link link-primary">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltOne;
