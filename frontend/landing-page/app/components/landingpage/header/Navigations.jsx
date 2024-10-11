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
        href="/contact-us"
        className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
      >
        Contact Us
      </Link>
      <Link
        href="/#pricing"
        className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
      >
        Price
      </Link>
      {/* <Link
        href="/"
        className="text-black hover:bg-[#31B3FF] p-2 rounded-lg hover:text-white font-bold"
      >
        Blog
      </Link> */}

      <div className="">
        <Link
          href={
            process.env.NODE_ENV === "production"
              ? `${process.env.NEXT_PUBLIC_PROD_USER_PANEL_URL}/auth/login`
              : `${process.env.NEXT_PUBLIC_USER_PANEL_URL}/auth/login`
          }
          target="_blank"
          className="text-black font-bold mr-2"
        >
          <Button className="hover:bg-[#31B3FF]"> Log In</Button>
        </Link>
        <Link
          href={
            process.env.NODE_ENV === "production"
              ? `${process.env.NEXT_PUBLIC_PROD_USER_PANEL_URL}/auth/register`
              : `${process.env.NEXT_PUBLIC_USER_PANEL_URL}/auth/register`
          }
          target="_blank"
          className="text-black font-bold"
        >
          <Button className="hover:bg-[#31B3FF]">Sign Up</Button>
        </Link>
      </div>
    </>
  );
};

export default Navigations;
