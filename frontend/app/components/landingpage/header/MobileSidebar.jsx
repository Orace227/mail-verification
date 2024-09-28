"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Logo from "../../logo/Logo";

import Link from "next/link";

const MobileSidebar = () => {
  return (
    <>
      <Box px={3}>
        <Logo />
      </Box>
      <Box p={3} sx={{ zIndex: "50" }}>
        <Stack direction="column" spacing={2}>
          <Link
            href="/about-us"
            className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
          >
            About Us
          </Link>
          <Link
            href="/#pricing"
            className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
          >
            Price
          </Link>
          <Link
            href="/"
            className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
          >
            Blog
          </Link>

          <div className="">
            <Link href="/" className="text-black font-bold mr-2">
              <Button className="hover:bg-[#31B3FF]"> Log In</Button>
            </Link>
            <Link href="/" className="text-black font-bold">
              <Button className="hover:bg-[#31B3FF]">Sign Up</Button>
            </Link>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
