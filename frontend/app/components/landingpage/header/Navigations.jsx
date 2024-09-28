"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const Navigations = () => {
  return (
    <>
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
    </>
  );
};

export default Navigations;
