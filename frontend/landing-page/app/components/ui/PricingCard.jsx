import React from "react";
import { BorderBeam } from "./border-beam";

const PricingCard = ({ plan, features, price, buttonText }) => {
  return (
    <div className="relative flex  mt-5  w-full flex-col   justify-center overflow-hidden  rounded-lg z-10 h-[100%]">
      <div className="bg-white border border-gray-500  text-black  p-6 rounded-lg shadow-lg flex flex-col justify-between h-[100%] ">
        <div>
          <h2 className="text-4xl  font-bold gazpacho  ">{plan}</h2>
          <ul className="mt-5 ">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-[#0098DC] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-4xl font-bold mb-6 text-">{price}</p>
          <button className="w-full py-2 text-white bg-[#0098DC] hover:bg-[#13DEB9]  font-semibold rounded-lg transition-colors duration-300">
            {buttonText}
          </button>
        </div>
        <BorderBeam size={200} duration={10} delay={7} />
      </div>
    </div>
  );
};

export default PricingCard;
