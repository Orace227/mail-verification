"use client";

import React from "react";
import "../styles/globals.css";

// components
import Banner from "./components/landingpage/banner/Banner";
import LpHeader from "./components/landingpage/header/Header";
import VideoSection from "./components/landingpage/VideoSection/VideoSection";
import ServicesSection from "./components/landingpage/ServicesSection/ServicesSection";
import Testimonial from "./components/landingpage/testimonial/Testimonial";
import Questions from "./components/landingpage/faq/Questions";
import Footer from "./components/landingpage/footer/Footer";
import PricingCards from "./components/landingpage/pricingCards/PricingCards";
import RootLayout from "./layout";
import axios from "axios";
export default function LandingPage() {

  if (process.env.NODE_ENV === 'production') {
    // for production
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_AXIOS_URL;
  } else {
    // for local
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_AXIOS_URL;
  }
  axios.defaults.withCredentials = true;

  return (
    <>
      <RootLayout>
        <LpHeader />
        <Banner />
        <VideoSection />
        <ServicesSection />
        <PricingCards />
        <Testimonial />
        <Questions />
        <Footer />
      </RootLayout>
    </>
  );
}
