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
          <Link href="/StepperForm" className="text-black hover:font-bold">
            About Us
          </Link>
          <Link href="/StepperForm" className="text-black hover:font-bold">
            Price
          </Link>
          <Link href="/StepperForm" className="text-black hover:font-bold">
            Blog
          </Link>
          <Link href="/StepperForm" className="text-black hover:font-bold">
            Contact Us
          </Link>
          <Link href="/StepperForm" className="text-black hover:font-bold">
            Log In
          </Link>
          <Link href="/StepperForm" className="text-black hover:font-bold">
            Sign Up
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
