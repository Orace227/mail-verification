"use client";

import React from "react";
import "../styles/globals.css";

// components
import Banner from "./components/landingpage/banner/Banner";
import LpHeader from "./components/landingpage/header/Header";
import VideoSection from "./components/landingpage/VideoSection/VideoSection";
import ServicesSection from "./components/landingpage/ServicesSection/ServicesSection";
import Testimonial from "./components/landingpage/Testimonial/Testimonial";
import Questions from "./components/landingpage/faq/Questions";
import Footer from "./components/landingpage/Footer/Footer";
import RootLayout from "./layout";
export default function LandingPage() {

  
  return (
    <>
      <RootLayout>
        <LpHeader />
        <Banner />
        <VideoSection />
        <ServicesSection />
        <Testimonial />
        <Questions />
        <Footer />
      </RootLayout>
    </>
  );
}
