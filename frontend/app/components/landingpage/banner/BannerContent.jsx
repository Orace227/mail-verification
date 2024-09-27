import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// third party
import { motion } from "framer-motion";
import { TypewriterEffect } from "../../ui/typewriter-effect";
import { heroLineWords } from "../../../store/staticData";
import { Spotlight } from "../../ui/Spotlight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Container, Input } from "@mui/material";
import { IconSend2 } from "@tabler/icons-react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BannerContent = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <>
      {/* <Spotlight /> */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        justifyContent="center"
        textAlign={"center"}
        zIndex="20"
        height="100vh"
      >
        {/* <HoverBorderGradient>Neweb.ai</HoverBorderGradient> */}

        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
          }}
          // className="w-[110%]"
        >
          <Typography
            variant="h2"
            fontWeight={900}
            fontFamily="monospace"
            sx={{
              fontSize: {
                xs: "32px",
                md: "3.8rem",
              },
              lineHeight: {
                xs: "40px",
                md: "70px",
              },
            }}
          >
            Email Verification API
          </Typography>
        </motion.div>
        <Box pt={4} pb={3}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
              delay: 0.2,
            }}
          >
            <Typography variant="h5" fontWeight={500} className=" max-w-3xl">
              {/* <TypewriterEffect words={heroLineWords} /> */}
              Welcome to Memeswala, the one-stop destination for all your meme
              needs! Whether you're a social media marketer, creator, or meme
              enthusiast, we've got the latest and greatest memes, GIFs, and
              MP4s from across the Indian meme scene.
            </Typography>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 30,
            delay: 0.4,
          }}
          className=""
        >
          <Typography
            variant="h5"
            fontWeight={900}
            className="text-left mb-2 mt-5"
          >
            🎉 try it now
          </Typography>
          <div className="w-full max-w-md space-y-4">
            <div className="relative flex justify-center items-center">
              <TextField
                type="email"
                placeholder="Someone@gmail.com"
                variant="outlined"
                size="medium"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                className=" text-lg rounded-lg  border-none bg-white shadow-sm"
              />
              <button className="bg-white p-2 rounded-lg ml-4 shadow-sm">
                <IconSend2 className="h-6 w-6" />
              </button>
            </div>
            <p className="">
              Enter an email address to perform verification. Check
              documentation to know more about response object properties.
            </p>
          </div>
        </motion.div>
      </Box>
    </>
  );
};

export default BannerContent;
