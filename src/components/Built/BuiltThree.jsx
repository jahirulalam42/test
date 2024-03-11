import React from "react";
import vmware from "../../images/vmware.svg.png";
import docusign from "../../images/docusign.png";
import frog from "../../images/frog.png";
import roxanne from "../../images/roxanne.png";
import jane from "../../images/jane.png";
import laura from "../../images/laura.png";

const BuiltThree = () => {
  return (
    <div>
      <div className="grid place-content-center pb-10 min-w-full">
        <h2 className="text-5xl font-bold">Loved by the world's best teams</h2>
      </div>
      <div className="grid place-content-center pb-10">
        <button className="btn btn-outline btn-primary rounded-full">
          See all customer stories →
        </button>
      </div>

      <div className="flex justify-center justify-evenly">
        <div>
          <img className="text-2xl font-bold py-6" src={vmware} />
          <p>
            “When the pandemic hit, those of us <br /> who thrive on in-person{" "}
            <br />
            collaboration were worried that our <br /> creativity and
            productivity would <br /> suffer. Miro was the perfect tool to{" "}
            <br /> help us with collaboration, <br /> whiteboarding, and
            retrospectives <br /> while remote.”
          </p>
          <img className="py-6" src={roxanne} />
        </div>

        <div>
          <img className="text-2xl font-bold py-6" src={docusign} />
          <p>
            “Miro helps solve one of the major <br /> gaps in product design:
            how to <br />
            manage tasks across product <br /> designers whose projects are in{" "}
            <br />
            different tools.”
          </p>
          <img className="py-20" src={jane} />
        </div>

        <div>
          <img className="text-2xl font-bold py-6" src={frog} />
          <p>
            “As we used Miro we moved from <br /> skepticism to belief to
            innovation, <br />
            and now we have a tool that’s at <br /> the core of what we do and
            will <br />
            continue to extend into the future.”
          </p>
          <img className="py-20" src={laura} />
        </div>
      </div>
    </div>
  );
};

export default BuiltThree;
