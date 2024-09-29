import React from "react";
import HeaderCard from "../components/ui/HeaderCard";
import { Container } from "@mui/material";
import LpHeader from "../components/landingpage/header/Header";
import Footer from "../components/landingpage/footer/Footer";

function Page() {
  return (
    <>
      <LpHeader />
      <Container maxWidth="xl">
        <HeaderCard title="About" />

        {/* Main Content */}
        <div className="w-full lg:w-3/4 mx-auto space-y-8 mt-10 text-gray-800">
          {/* About Section */}
          <p className="text-xl font-medium">
            In an age where email communication is pivotal to business success,
            ensuring the accuracy, security, and reliability of email addresses
            is more important than ever. UnwrapEmail was founded with a single
            mission: to revolutionize email verification and empower businesses
            with the tools they need to optimize their email strategies.
          </p>

          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-xl font-medium mt-4">
              At UnwrapEmail, we strive to provide the most accurate and
              efficient email verification services available. We aim to help
              businesses prevent fraudulent sign-ups, enhance email
              deliverability, and build high-quality prospect databases, all
              while safeguarding their email communications from spam and
              phishing threats.
            </p>
          </section>

          {/* What We Offer Section */}
          <section>
            <h2 className="text-2xl font-bold">What We Offer</h2>
            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  1. Disposable Email Detection:
                </h3>
                <p className="text-gray-600">
                  Instantly identify and block disposable email addresses to
                  prevent fraudulent sign-ups and ensure the integrity of your
                  user base.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  2. MX Record Verification:
                </h3>
                <p className="text-gray-600">
                  Verify MX records in real-time to reduce bounce rates and
                  ensure your emails reach their intended recipients.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  3. Email Label Extraction:
                </h3>
                <p className="text-gray-600">
                  Automatically extract relevant labels to organize and segment
                  your email database, making targeted marketing campaigns more
                  effective.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  4. Safe Sender Identification:
                </h3>
                <p className="text-gray-600">
                  Identify and verify trustworthy senders to enhance your email
                  security and protect your inbox from spam and phishing
                  attempts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  5. Policy Abuse Prevention:
                </h3>
                <p className="text-gray-600">
                  Safeguard your SAAS platform from policy abusers, ensuring
                  fair usage and protecting your valuable resources.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  6. Targeted Prospect Building:
                </h3>
                <p className="text-gray-600">
                  Build a high-quality database of prospects with accurate email
                  verification, maximizing the effectiveness of your marketing
                  efforts.
                </p>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section>
            <h2 className="text-2xl font-bold">Our Commitment</h2>
            <p className="text-xl font-medium mt-4">
              We are dedicated to continuous innovation and excellence. Our team
              of experts works tirelessly to stay ahead of industry trends and
              technological advancements, ensuring that our clients receive the
              best possible service. We are committed to providing exceptional
              support, seamless integration solutions, and a user-friendly
              experience.
            </p>
          </section>

          {/* Join Us Section */}
          <section>
            <h2 className="text-2xl font-bold">Join Us on Our Journey</h2>
            <p className="text-xl font-medium mt-4">
              We invite you to join us on our mission to transform email
              verification. Whether you're a SAAS founder looking to protect
              your platform or a marketer aiming to enhance your email
              campaigns, UnwrapEmail is here to help you achieve your goals.
            </p>
            <p className="text-xl font-medium mt-4">
              Thank you for choosing UnwrapEmail. Together, let's unlock the
              full potential of your email strategy.
            </p>
            <p className="text-xl font-medium mt-4">Sincerely,</p>
            <p className="text-xl font-medium mb-20">The UnwrapEmail Team</p>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
