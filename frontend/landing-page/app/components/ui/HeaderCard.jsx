import { Container } from "@mui/material";
import React from "react";

function HeaderCard({ title }) {
  return (
    <Container maxWidth="xl">
      <div className="flex mt-5 rounded-xl text-black text-[50px] text-center font-extrabold py-20  justify-center items-center bg-[#DBEAFE] ">
        {title}
      </div>
    </Container>
  );
}

export default HeaderCard;
