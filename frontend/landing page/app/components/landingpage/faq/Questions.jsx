import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { IconChevronDown } from "@tabler/icons-react";
import { GradientBackground } from "../../ui/gradiant-background";
import { faqs } from "../../../store/staticData";
import { Container } from "@mui/material";
import CustomTitle from "../../ui/CustomTitle";
import CustomHeading from "../../ui/CustomHeading";

const Questions = () => {
  return (
    <Container
      maxWidth="2xl "
      sx={{ paddingTop: "50px", paddingBottom: "100px" }}
    >
      <CustomTitle title="Frequently asked" mainKeyword="questions" />
      <Grid container spacing={3}  justifyContent="center">
        {faqs.map((faq, index) => (
          <>
            <Grid item xs={12} lg={6} className="mt-5">
              {faq.faqs.map((faq, index) => (
                <Accordion elevation={9} key={index}>
                  <AccordionSummary
                    expandIcon={<IconChevronDown />}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel${index + 1}a-header`}
                  >
                    <Typography variant="h6" px={2} py={1}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails>
                    <Typography
                      variant="subtitle1"
                      pt={1}
                      px={2}
                      color="textSecondary"
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Questions;
