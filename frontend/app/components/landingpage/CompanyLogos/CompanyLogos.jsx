import React from "react";
import { Container } from "@mui/material";
import { InfiniteMovingLogos } from "../../ui/infinite-moving-logos";
import { companyLogos } from "../../../store/staticData";

function CompanyLogos() {
  return (
    <>
      <Container maxWidth="xl" className="my-40">
        <InfiniteMovingLogos items={companyLogos} />
      </Container>
    </>
  );
}

export default CompanyLogos;
