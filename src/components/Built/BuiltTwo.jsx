import React from "react";
import thirdDiv from "../../images/divThree.png";
import fourthDiv from "../../images/divfour.png";

const BuiltTwo = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 flex flex-col py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Built for all kinds of teams</h1>
            <div className="flex justify-between py-10">
              <ul className="flex flex-wrap">
                <li className="mr-8">UX & Design</li>
                <li className="mr-8">Marketing</li>
                <li className="mr-8">Product Management</li>
                <li className="mr-8">Engineering</li>
                <li className="mr-8">Consultants</li>
                <li className="mr-8">Agile Coaches</li>
                <li className="mr-8">Sales</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={thirdDiv} className="max-w-6xl rounded-lg px-16" />
          <div>
            <span className="py-6">
              <p className="py-2">Build low-fi wireframes</p>
              <p className="py-2">
                Involve stakeholders in the <br /> design process
              </p>
              <p className="py-2">
                Run engaging design <br /> workshops
              </p>
            </span>
            <a className="link link-primary">Learn more →</a>

            <img className="py-20" src={fourthDiv} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltTwo;
