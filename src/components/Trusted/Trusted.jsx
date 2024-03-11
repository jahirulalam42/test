import React from "react";
import walmart from "../../images/Walmart_Index_Only.svg.png";
import cisco from "../../images/cisco.svg.png";
import volvo from "../../images/Volvo_Index_Only.svg.png";
import deloitte from "../../images/deloitte.svg.png";
import okta from "../../images/okta.svg.png";

const Trusted = () => {
  return (
    <div className="grid place-content-center pb-20 min-w-full">
      <div className="grid place-content-center py-10">
        <p>Trusted by 45M + users</p>
      </div>

      <div className="flex flex-wrap justify-center">
        <img className="m-2" src={walmart} alt="Walmart" />
        <img className="m-2" src={cisco} alt="Cisco" />
        <img className="m-2" src={volvo} alt="Volvo" />
        <img className="m-2" src={deloitte} alt="Deloitte" />
        <img className="m-2" src={okta} alt="Okta" />
      </div>
    </div>
  );
};

export default Trusted;
