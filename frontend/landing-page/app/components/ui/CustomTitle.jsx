"use client";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CurvedUnderline from "./CurvedUnderline";

function CustomTitle({ description, title, mainKeyword, isCenter }) {
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
        className={"flex flex-col justify-center items-center text-center  "}
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
                md: "50px",
              },
              lineHeight: {
                xs: "40px",
                md: "56px",
              },
              // fontFamily: "gazpacho",
              // letterSpacing: "normal",
              // color: "white",
            }}
          >
            {title}{" "}
            <Typography
              variant="h1"
              className=""
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
        >
          <Typography
            ref={ref}
            variant="h6"
            className="text-neutral-300 gazpacho"
            sx={{
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            {description}
          </Typography>
        </motion.div>
      </div>
    </>
  );
}

export default CustomTitle;
