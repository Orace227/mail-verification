import React from "react";
import Container from "@mui/material/Container";

import Logo from "../../logo/Logo";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="lg">
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center mb-8">
            <Logo />
          </div>
          <nav className="flex justify-center font-bold space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms And Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Document
            </a>
          </nav>
          <hr className="border-gray-200 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Logo Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-500 p-2 text-white rounded-full hover:text-black"
              >
                <IconBrandTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 text-white rounded-full hover:text-black"
              >
                <IconBrandInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 text-white rounded-full hover:text-black"
              >
                <IconBrandLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 text-white rounded-full hover:text-black"
              >
                <IconBrandYoutube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
