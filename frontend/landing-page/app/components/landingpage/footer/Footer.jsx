import React from "react";
import Container from "@mui/material/Container";

import Logo from "../../logo/Logo";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#DBEAFE]">
      <Container maxWidth="lg" className="">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center mb-8">
            <Logo />
          </div>
          <nav className="flex justify-center font-bold space-x-6 mb-8">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms And Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Document
            </Link>
          </nav>
          <hr className="border-gray-200 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm mb-4 md:mb-0">
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
      </Container>
    </footer>
  );
};

export default Footer;
