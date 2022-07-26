import React from "react";
import chair from "../../assets/images/chair.png";
import GradientButton from "../Shared/GradientButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" rounded-lg shadow-2xl lg:max-w-lg " />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <GradientButton>Get Started</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
