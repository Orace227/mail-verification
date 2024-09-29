"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";
import { IconLoader, IconSend2 } from "@tabler/icons-react";

const BannerContent = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const fetchEmailData = async () => {
    try {
      setShowLoader(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if (res.data) {
        setApiResponse(res.data);
        setShowLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center text-center flex-col h-full xl:h-screen">
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
        }}
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
            Welcome to Memeswala, the one-stop destination for all your meme
            needs! Whether you're a social media marketer, creator, or meme
            enthusiast, we've got the latest and greatest memes, GIFs, and MP4s
            from across the Indian meme scene.
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
        className="w-full px-4"
      >
        <div className="max-w-full">
          <div className="w-full max-w-2xl space-y-4 mx-auto">
            <Typography
              variant="h5"
              fontWeight={900}
              className="text-left mb-2 mt-5"
            >
              🎉 try it now
            </Typography>
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
                className="text-lg rounded-lg border-none bg-white shadow-sm"
              />
              <button
                onClick={fetchEmailData}
                className="bg-white p-2 rounded-lg ml-4 shadow-sm"
              >
                {showLoader ? (
                  <IconLoader className="h-6 w-6 animate-spin" />
                ) : (
                  <IconSend2 className="h-6 w-6" />
                )}
              </button>
            </div>
            <p className="">
              Enter an email address to perform verification. Check
              documentation to know more about response object properties.
            </p>
          </div>
        </div>
        <div
          className={`bg-black rounded-lg  text-left mt-5 text-[#ffffff] w-full max-w-2xl mx-auto overflow-auto max-h-[300px] sm:max-h-[400px] ${
            apiResponse ? "block" : "hidden"
          }`}
        >
          {apiResponse ? (
            <SyntaxHighlighter
              language="json"
              style={a11yDark}
              customStyle={{
                background: "transparent",
                // padding: "10px",
                whiteSpace: "pre-wrap", // Wrap long lines
                wordBreak: "break-word", // Break long words if necessary
              }}
              wrapLines={true}
            >
              {JSON.stringify(apiResponse, null, 2)}
            </SyntaxHighlighter>
          ) : (
            <p>/* Result will be displayed here... */</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BannerContent;
