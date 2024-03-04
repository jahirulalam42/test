import React from "react";
import hero from "../../images/hero.png";
import star from "../../images/star.png";
import getapp from "../../images/getapp.png";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero} className="max-w-4xl rounded-lg shadow-2xl" />
          <div className="px-20">
            <h1 className="text-5xl font-bold">
              Take ideas from <br /> better to best
            </h1>
            <p className="py-6">
              Miro is your team's visual platform to connect,
              <br />
              collaborate, and create -together.
            </p>

            <form>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>

              <div className="form-control mt-2">
                <button className="btn btn-primary rounded-full">
                  Sign up free
                </button>
              </div>
              <p className="py-2">Collaborate with your team within minutes</p>

              <div className="flex py-6">
                <div className="flex-auto">
                  <img src={star} />
                  <p className="text-xs">Based on 5149+ reviews:</p>
                </div>
                <div>
                  <img src={getapp} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
