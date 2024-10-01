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
        <HeaderCard title="Terms and Condition" />

        {/* Main Content */}
        <div className="w-full lg:w-3/4 px-4 text-justify mx-auto space-y-8 mt-10 text-gray-800">
          {/* About Section */}
          <p className="text-xl font-medium">
            Please read these Terms and Conditions ("Terms", "Terms &
            Conditions") carefully before using the UnwrapEmail API service (the
            "Service") operated by StoicByte, Inc. ("us", "we", or "our").{" "}
          </p>

          <p className="text-xl font-medium">
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.{" "}
          </p>
          <p className="text-xl font-medium">
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </p>

          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold mt-14">1. Definitions</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <p className="text-gray-600">
                  "Service" refers to the UnwrapEmail API service provided by
                  StoicByte, Inc.
                </p>

                <p className="text-gray-600 mt-2">
                  "User" refers to any individual or entity that uses the
                  Service.
                </p>

                <p className="text-gray-600 mt-3">
                  "API Key" or "API Token" refers to the unique identifier
                  provided to the User by StoicByte, Inc. for accessing the
                  Service.
                </p>

                <p className="text-gray-600 mt-3">
                  "Disposable Email" refers to an email address that is
                  temporary and typically used to register for online services
                  without revealing one's primary email address.
                </p>

                <p className="text-gray-600 mt-3">
                  "Associated Domains" refers to the domains associated with
                  email addresses detected by the Service.
                </p>
                <p className="text-gray-600 mt-3">
                  "MX Records" refers to Mail Exchange Records, which are DNS
                  records that specify the mail server responsible for receiving
                  email on behalf of a domain.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">2. Use of Service</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  2.1. API Access:
                </h3>
                <p className="text-gray-600">
                  Upon registration, we will provide you with an API key that
                  grants you access to the Service. You agree not to share your
                  API key with any third party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  2.2. Prohibited Use:
                </h3>
                <p className="text-gray-600">
                  You agree not to use the Service for any unlawful or
                  unauthorized purpose, including but not limited to violating
                  any applicable laws or regulations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">3. Fees and Payment</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  3.1. Fees:
                </h3>
                <p className="text-gray-600">
                  The use of the Service may be subject to payment of fees as
                  determined by StoicByte, Inc. Any such fees will be
                  communicated to you prior to your use of the Service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  3.2. Payment:
                </h3>
                <p className="text-gray-600">
                  You agree to pay all fees associated with your use of the
                  Service in a timely manner. Failure to pay may result in
                  suspension or termination of your access to the Service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">4. Privacy</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  4.1. Data Collection:
                </h3>
                <p className="text-gray-600">
                  By using the Service, you agree to the collection and use of
                  information in accordance with our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  4.2. Confidentiality:
                </h3>
                <p className="text-gray-600">
                  You agree to keep your API key confidential and to not
                  disclose it to any third party.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">
              5. Limitation of Liability
            </h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  5.1. Disclaimer:
                </h3>
                <p className="text-gray-600">
                  The Service is provided on an "as is" and "as available" basis
                  without any warranty of any kind, either express or implied.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  5.2. Limitation of Liability:
                </h3>
                <p className="text-gray-600">
                  In no event shall StoicByte, Inc. be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including but not limited to lost profits, data loss, or
                  business interruption.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">6. Termination</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  6.1. Termination:
                </h3>
                <p className="text-gray-600">
                  We may terminate or suspend access to our Service immediately,
                  without prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">7. Governing Law</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  7.1. Jurisdiction:
                </h3>
                <p className="text-gray-600">
                  These Terms shall be governed and construed in accordance with
                  the laws of the United States of America, without regard to
                  its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">8. Changes</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  8.1. Modification:
                </h3>
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material we
                  will try to provide at least 30 days' notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at our sole discretion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-14">9. Contact Us</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <p className="text-gray-600">
                  9.1. If you have any questions about these Terms, please
                  contact us at support@unwrap.email
                </p>
              </div>
            </div>
            <div className="space-y-6 mt-4 text-xl">
              <div>
                <p className="text-gray-600 mb-20">
                  By accessing or using the Service, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms.
                  If you do not agree to these Terms, please do not use the
                  Service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
