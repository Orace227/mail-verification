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
        <HeaderCard title="Privacy Policy" />

        {/* Main Content */}
        <div className="w-full lg:w-3/4 px-4 text-justify mx-auto space-y-8 mt-10 text-gray-800">
          {/* About Section */}
          <p className="text-xl font-medium">Last Updated: 05-10-2024</p>
          <p className="text-xl font-medium">
            Thank you for using UnwrapEmail ("Service"), provided by StoicByte,
            Inc. ("Company"). We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and protect the
            information we collect from users of our Service.
          </p>

          <p className="text-xl font-medium">
            By using the Service, you consent to the collection and use of your
            information in accordance with this Privacy Policy. If you do not
            agree with the terms of this policy, please do not access or use the
            Service.
          </p>

          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  a. Personal Information:
                </h3>
                <p className="text-gray-600">
                  We may collect personal information such as your name, email
                  address, and contact details when you register for an account
                  or interact with the Service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  b. Usage Information:
                </h3>
                <p className="text-gray-600">
                  We may collect information about how you use the Service,
                  including your interactions with the Service, IP address,
                  browser type, and device information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. How We Use Your Information
            </h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  a. Providing and Improving the Service:
                </h3>
                <p className="text-gray-600">
                  We use your information to operate, maintain, and improve the
                  Service, and to develop new features and functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  b. Communications:
                </h3>
                <p className="text-gray-600">
                  We may use your email address to send you Service-related
                  notifications, updates, and promotional materials. You can
                  opt-out of receiving promotional emails at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  c. Analytics:
                </h3>
                <p className="text-gray-600">
                  We may use aggregated and anonymized information for
                  analytical purposes to understand how users interact with the
                  Service and to optimize the user experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. Information Sharing and Disclosure
            </h2>

            <div className="space-y-6 mt-4 text-xl">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  a. Third-Party Service Providers:
                </h3>
                <p className="text-gray-600">
                  We may share your information with third-party service
                  providers who assist us in providing and improving the
                  Service. These service providers are contractually obligated
                  to use your information only for the purposes of providing the
                  services to us and are prohibited from disclosing or using
                  your information for any other purpose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  b. Legal Compliance:
                </h3>
                <p className="text-gray-600">
                  We may disclose your information if required to do so by law
                  or in response to a valid legal request, such as a court order
                  or subpoena.
                </p>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section>
            <h2 className="text-2xl font-bold">4. Data Retention</h2>
            <p className="text-xl font-medium mt-4">
              We will retain your information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Security</h2>
            <p className="text-xl font-medium mt-4">
              We take the security of your information seriously and take
              reasonable measures to protect it from loss, misuse, and
              unauthorized access or disclosure. However, please be aware that
              no method of transmission over the internet or method of
              electronic storage is 100% secure, and we cannot guarantee the
              absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Children's Privacy</h2>
            <p className="text-xl font-medium mt-4">
              The Service is not directed to children under the age of 13, and
              we do not knowingly collect personal information from children
              under the age of 13. If you are a parent or guardian and become
              aware that your child has provided us with personal information,
              please contact us, and we will take steps to delete such
              information from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              7. Changes to this Privacy Policy
            </h2>
            <p className="text-xl font-medium mt-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes to this Privacy Policy by posting the updated
              policy on our website or by other means of communication. Your
              continued use of the Service after the effective date of the
              updated Privacy Policy constitutes your acceptance of the changes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">8. Contact Us</h2>
            <p className="text-xl font-medium mt-4">
              If you have any questions or concerns about this Privacy Policy or
              our practices regarding your information, please contact us at
              support.unwrap.email.
            </p>

            <p className="text-xl font-medium mt-4 mb-20">
              Thank you for trusting UnwrapEmail with your information. We are
              committed to protecting your privacy and providing you with a
              secure and reliable Service.
            </p>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
