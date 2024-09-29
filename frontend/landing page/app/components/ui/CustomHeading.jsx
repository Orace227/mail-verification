"use client";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { IconBounceRightFilled } from "@tabler/icons-react";
import CurvedUnderline from "./CurvedUnderline";
function CustomHeading({ description, title, mainKeyword, points, isCenter }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    }
  }, [controls, inView]);
  return (
    <>
      <div
        className={isCenter ? "flex flex-col justify-center items-center" : ""}
      >
        <motion.div
          initial={{ opacity: 0, translateY: 350 }}
          animate={controls}
          transition={{
            duration: 900,
            type: "spring",
            stiffness: 150,
            damping: 30,
          }}
        >
          <Typography
            ref={ref}
            variant="h1"
            className=""
            sx={{
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              lineHeight: {
                xs: "40px",
              },
              fontFamily: "gazpacho",
              letterSpacing: "normal",
              color: "white",
            }}
          >
            {title}{" "}
            {mainKeyword && (
              <Typography
                variant="h1"
                className="  font-bold gazpacho"
                sx={{
                  fontSize: {
                    xs: "32px",
                    md: "50px",
                  },
                  lineHeight: {
                    xs: "40px",
                    md: "56px",
                  },
                }}
              >
                <CurvedUnderline mainKeyword={mainKeyword} />
              </Typography>
            )}
          </Typography>
        </motion.div>
        {points ? (
          points?.map((p) => {
            return (
              <>
                <motion.div
                  initial={{ opacity: 0, translateY: 350 }}
                  animate={controls}
                  transition={{
                    duration: 900,
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                  }}
                  className="z-50"
                >
                  <Typography
                    ref={ref}
                    variant="h5"
                    className="  flex gap-2  items-center"
                    sx={{
                      marginTop: "15px",
                    }}
                  >
                    <div className="bg-[#006ED0] rounded-full p-1">
                      {<IconBounceRightFilled size={15} />}
                    </div>
                    {p?.title}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, translateY: 350 }}
                  animate={controls}
                  transition={{
                    duration: 900,
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                  }}
                  className="z-50"
                >
                  <Typography
                    ref={ref}
                    variant="h6"
                    className="text-neutral-300"
                    sx={{
                      marginTop: "15px",
                    }}
                  >
                    {p?.desc}
                  </Typography>
                </motion.div>
              </>
            );
          })
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: 350 }}
            animate={controls}
            transition={{
              duration: 900,
              type: "spring",
              stiffness: 150,
              damping: 30,
            }}
            className="z-50"
          >
            <Typography
              ref={ref}
              variant="h5"
              className="text-neutral-300 text-center mx-8  gazpacho"
              sx={{
                marginTop: "15px",
              }}
            >
              {description}
            </Typography>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default CustomHeading;
