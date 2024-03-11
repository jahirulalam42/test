import React from "react";
import group from "../../images/Group.png";

const Feature = () => {
  return (
    <div>
      <div className="grid place-content-center pb-20 min-w-full">
        <img className="justify-self-end" src={group} />
        <h2 className="text-5xl font-bold">
          Collaborate without <br /> constrains
        </h2>
      </div>

      <div className="flex justify-center justify-evenly">
        <div>
          <h2 className="text-2xl font-bold py-6">Free forever</h2>
          <p>
            Our free plan gives you unlimited team <br />
            members, 3 boards, and 300+ expert- <br />
            made templates. Signing up with your <br />
            work email lets you bring in your team <br />
            faster. See our <br />
            <span>pricing plans</span> for more features.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold py-6">Easy integrations</h2>
          <p>
            Miro has 100+ powerful integrations <br />
            with tools you already use like G <br />
            Suite, Slack, and Jira, so your <br />
            workflow is seamless. View the full <br />
            list in our <span>Marketplace .</span>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold py-6">Security first</h2>
          <p>
            We treat your data like you would — <br />
            with the utmost care. We follow <br /> industry-leading security
            standards <br /> and give you tools to protect <br /> intellectual
            property. Learn more <br />
            at our <span>Trust Center .</span>
          </p>
        </div>
      </div>

      <div className="grid justify-center py-10">
        <button className="btn btn-primary rounded-full w-40">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default Feature;
