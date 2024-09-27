"use client";
import React from "react";
import Link from "next/link";

const Navigations = () => {
  return (
    <>
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
    </>
  );
};

export default Navigations;
