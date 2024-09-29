import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BorderBeam } from "./border-beam";
import CustomHeading from "./CustomHeading";

function CustomHorizontalCard({ cardData, isRight, end }) {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row  sm:justify-around">
        {isRight ? (
          <>
            <div>
              {cardData.points ? (
                <div className="relative z-10 mt-20  sm:ml-10">
                  <CustomHeading
                    title={cardData.title}
                    points={cardData.points}
                    isCenter={false}
                  />
                </div>
              ) : (
                <div className="relative z-10 mt-20  sm:ml-10">
                  <CustomHeading
                    title={cardData.title}
                    description={cardData.desc}
                    isCenter={true}
                  />
                </div>
              )}
              {!end && (
                <div className="relative h-full w-full  hidden md:block">
                  <div className=" absolute -right-32 -top-7 h-[62%] w-[70%] border-t-2 border-l-2 border-dashed border-blue-500 rounded-tl-xl"></div>
                </div>
              )}
            </div>
            <div className={`flex flex-col sm:flex-row `}>
              <div className="relative flex p-1 mt-5  w-full flex-col  items-stretch justify-center overflow-hidden rounded-lg z-10">
                <Image
                  src={cardData.img}
                  width="500"
                  height="500"
                  alt="CustomHorizontalCard image"
                  className="rounded-lg"
                />
                <BorderBeam size={300} duration={12} delay={9} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex flex-col sm:flex-row ${
                isRight ? "sm:order-last" : ""
              }`}
            >
              <div className="relative flex p-1 mt-5  w-full flex-col  items-stretch justify-center overflow-hidden rounded-lg z-10">
                <Image
                  src={cardData.img}
                  width="500"
                  height="500"
                  alt="CustomHorizontalCard image"
                  className="rounded-lg"
                />
                <BorderBeam size={300} duration={12} delay={9} />
              </div>
            </div>
            <div>
              {cardData.points ? (
                <div className="relative z-10 mt-20  sm:ml-10">
                  <CustomHeading
                    title={cardData.title}
                    points={cardData.points}
                    isCenter={false}
                  />
                </div>
              ) : (
                <div className="relative z-10 mt-20  sm:ml-10">
                  <CustomHeading
                    title={cardData.title}
                    description={cardData.desc}
                    isCenter={true}
                  />
                </div>
              )}
              {!end && (
                <div className="relative h-full w-full hidden md:block">
                  <div className="relative h-full w-full ">
                    <div className=" absolute  -left-32 -top-7 h-[62%] w-[70%] border-t-2 border-r-2 border-dashed border-blue-500 rounded-tr-xl"></div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomHorizontalCard;
