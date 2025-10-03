import React from "react";
import Navbar from "./Navbar";
import Footer from "../landingComponents/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: October 3, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use QuickBite, we collect information necessary to
              provide you with the best food delivery experience. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Personal details such as your name, email address, and phone
                number
              </li>
              <li>
                Delivery addresses and location data to ensure accurate
                deliveries
              </li>
              <li>
                Payment information processed securely through our payment
                partners
              </li>
              <li>
                Order history and preferences to personalize your experience
              </li>
              <li>
                Device information and usage data to improve our app performance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Process and deliver your food orders accurately and on time
              </li>
              <li>
                Communicate with you about your orders, including updates and
                notifications
              </li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>
                Send you promotional offers and updates about QuickBite (you can
                opt out anytime)
              </li>
              <li>Improve our services, app features, and user experience</li>
              <li>Prevent fraud and ensure the security of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              QuickBite respects your privacy. We only share your information in
              the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With restaurant partners to fulfill your orders</li>
              <li>With delivery riders to complete your deliveries</li>
              <li>With payment processors to handle transactions securely</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We never sell your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Protection and Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse. This includes encryption, secure servers, and regular
              security audits. While we strive to protect your data, no method
              of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate or incomplete data</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of promotional communications</li>
              <li>Withdraw consent for data processing where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your experience
              on QuickBite. These help us remember your preferences, analyze
              site traffic, and provide personalized content. You can control
              cookie settings through your browser, but disabling them may
              affect certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              QuickBite is not intended for users under the age of 13. We do not
              knowingly collect personal information from children. If you
              believe we have inadvertently collected such information, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of significant changes through the app or via email. Continued use
              of QuickBite after updates constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or how we handle your data, please reach out to us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-gray-800 font-medium mb-2">
                QuickBite Support Team
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:support@quickbite.com"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  support@quickbite.com
                </a>
              </p>
              <p className="text-gray-700">Phone: +234 800 123 4567</p>
              <p className="text-gray-700">
                Address: 123 Food Street, Lagos, Nigeria
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            By using QuickBite, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
