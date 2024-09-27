import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TestimonialTitle from "./TestimonialTitle";
import AnimationFadeIn from "../animation/Animation";

//Carousel slider for product
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialSliderData } from "../../../store/staticData";

const Testimonial = () => {
  const [value, setValue] = React.useState(5);

  const settings = {
    className: "testimonial-slider",
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (e.g., 3000 = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Box pt={10} pb={11}>
        <Container maxWidth="lg" className="   ">
          <TestimonialTitle />
          <Box mt={5}>
            <AnimationFadeIn>
              <Slider {...settings}>
                {testimonialSliderData.map((slider, index) => (
                  <Box p="15px" key={index}>
                    <CardContent>
                      <Stack direction="row">
                        {/* <Avatar
                            src={slider.avatar}
                            alt="user"
                            sx={{ width: 40, height: 40 }}
                          /> */}
                        <Box>
                          <Typography variant="h6">{slider.title}</Typography>
                          <Typography color="textSecondary" variant="subtitle1">
                            {slider.subtitle}
                          </Typography>
                        </Box>
                        <Box ml="auto">
                          <Rating
                            size="small"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </Stack>
                      <Typography fontSize="15px" color="textSecondary" mt={3}>
                        {slider.subtext}
                      </Typography>
                    </CardContent>
                  </Box>
                ))}
              </Slider>
            </AnimationFadeIn>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Testimonial;
