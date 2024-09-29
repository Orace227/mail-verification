import React from "react";
import { ParallaxScroll } from "../../ui/parallax-scroll";
import { logoPreviewImages } from "../../../store/staticData";
import { Container } from "@mui/material";
import CustomTitle from "../../ui/CustomTitle";
function LogoPreview() {
  return (
    <>
      <Container maxWidth="lg">
        <CustomTitle
          description="Create stunning logos effortlessly with our AI-powered logo maker."
          mainKeyword="AI Logo Creation"
          isCenter
        />
        <ParallaxScroll images={logoPreviewImages} />
      </Container>
    </>
  );
}

export default LogoPreview;
