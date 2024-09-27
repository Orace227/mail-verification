"use client";
import React from "react";
import { Container } from "@mui/material";
import CustomTitle from "../../ui/CustomTitle";
import LogoCanvas from "./LogoCanvas";
function RealTimeLogo() {
  return (
    <>
      <Container maxWidth="lg" className="mt-40">
        <CustomTitle
          title="Real Time"
          mainKeyword=" Logo Maker"
          description="Create stunning logos effortlessly with our AI-powered logo maker."
          isCenter
        />
        <LogoCanvas />
      </Container>
    </>
  );
}

export default RealTimeLogo;
