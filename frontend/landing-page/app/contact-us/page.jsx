import React from "react";
import HeaderCard from "../components/ui/HeaderCard";
import { Container } from "@mui/material";
import LpHeader from "../components/landingpage/header/Header";
import Footer from "../components/landingpage/footer/Footer";
import Image from "next/image";

function Page() {
  return (
    <>
      <LpHeader />
      <Container maxWidth="xl">
        <HeaderCard title="Contact-us" />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row  items-start">
            {/* Text Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">DISCOVER US</h2>
              <p className="mb-4 text-lg">
                Flick is here to help you.
                <br />
                Our experts are available to answer any questions you might
                have. We've got the answers.
              </p>
              <p className="mb-4 text-lg">
                Feel free to get in touch with us through our channels:
              </p>
              <h3 className="text-xl font-semibold mb-2">EMAIL US</h3>
              <a
                href="mailto:flick@flick.com"
                className="text-blue-600 hover:underline"
              >
                flick@flick.com
              </a>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/images/contact-us/4.jpg"
                alt="Office space 1"
                width={500}
                height={350}
                className="rounded-lg w-full  object-cover shadow-lg"
              />
              <Image
                src="/images/contact-us/2.jpg"
                alt="Office space 2"
                width={500}
                height={350}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
              <Image
                src="/images/contact-us/2.jpg"
                alt="Office space 3"
                width={500}
                height={350}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
              <Image
                src="/images/contact-us/4.jpg"
                alt="Office space 4"
                width={500}
                height={350}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
