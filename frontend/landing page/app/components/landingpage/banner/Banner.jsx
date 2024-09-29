import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <Box mb={10} sx={{ overflow: "hidden", background: "#eaf9ff" }}>
      <Container maxWidth="xl" className="py-5">
        <BannerContent />
      </Container>
    </Box>
  );
};

export default Banner;
