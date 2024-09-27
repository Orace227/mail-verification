"use client";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import CurvedUnderline from './CurvedUnderline';

function Title({
  description,
  title,
  mainKeyword,
  descriptionClassName,
  titleClassName,
  hasBtn,
}) {
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
        className={
          "flex flex-col justify-center items-center text-center mb-10 "
        }
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
            // variant="bo"
            className={titleClassName}
            sx={{
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              lineHeight: {
                xs: "40px",
                md: "56px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            // variant="h1"
            className={titleClassName}
            sx={{
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              lineHeight: {
                xs: "40px",
                md: "56px",
              },
            }}
          >
            {mainKeyword}
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
          className={descriptionClassName}
        >
          <Typography
            ref={ref}
            sx={{
              textAlign: "center",
              marginTop: "15px",
              color: "gray",
              fontSize: {
                xs: "16px",
                md: "20px",
              },
              lineHeight: {
                xs: "24px",
                md: "30px",
              },
            }}
          >
            {description}
          </Typography>
          {hasBtn && (
            <Button variant="contained" className="my-2 bg-[#31b3ff]">
              Get Started for Free
            </Button>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Title;
