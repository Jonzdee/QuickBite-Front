import React from "react";
import Navbar from "./Navbar";
import Footer from "../landingComponents/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative h-60 md:h-80 flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.fliprogram.com/u/2023/09/29153245/Street-Food-4.webp?strip=all&lossy=1&ssl=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            Terms of Service
          </h2>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <p className="text-gray-600 mb-8">Last updated: October 3, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-3">
              Welcome to QuickBite! By accessing or using our platform, mobile
              app, or website, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, please do not
              use our services.
            </p>
            <p className="text-gray-600">
              These terms apply to all users, including customers, restaurant
              partners, and delivery riders. By creating an account or placing
              an order, you confirm that you are at least 18 years old and have
              the legal capacity to enter into this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              2. User Account and Responsibilities
            </h2>
            <p className="text-gray-600 mb-3">
              To use QuickBite, you must create an account with accurate and
              complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>
                Providing accurate delivery addresses and contact information
              </li>
              <li>
                Complying with all applicable laws when using our services
              </li>
            </ul>
            <p className="text-gray-600">
              QuickBite reserves the right to suspend or terminate accounts that
              violate these terms or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              3. Orders, Payments, and Pricing
            </h2>
            <p className="text-gray-600 mb-3">
              When you place an order through QuickBite:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
              <li>Payment must be completed at the time of order placement</li>
              <li>
                All prices are displayed in Nigerian Naira (₦) and include
                applicable taxes
              </li>
              <li>Delivery fees are calculated based on distance and demand</li>
              <li>
                Menu items, prices, and availability may change without prior
                notice
              </li>
              <li>
                Restaurant partners set their own prices and menu offerings
              </li>
              <li>
                Orders cannot be modified or cancelled once confirmed by the
                restaurant
              </li>
            </ul>
            <p className="text-gray-600 mb-3">
              We accept payment via credit/debit cards, mobile money, and other
              approved payment methods. All transactions are processed securely
              through our payment partners.
            </p>
            <p className="text-gray-600">
              Promotional codes and discounts are subject to specific terms and
              may expire or be modified at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              4. Delivery Services
            </h2>
            <p className="text-gray-600 mb-3">
              QuickBite facilitates food delivery through our network of
              independent delivery riders. Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
              <li>
                Estimated delivery times are approximate and may vary due to
                traffic, weather, or restaurant preparation time
              </li>
              <li>
                You must be available at the delivery address to receive your
                order
              </li>
              <li>
                If you are unavailable, the rider may leave your order at the
                specified location at their discretion
              </li>
              <li>
                Delivery to certain areas may be restricted or subject to
                additional fees
              </li>
              <li>Tips for delivery riders are optional but appreciated</li>
            </ul>
            <p className="text-gray-600">
              Please ensure your delivery address and contact information are
              accurate to avoid delays or failed deliveries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              5. Cancellations and Refunds
            </h2>
            <p className="text-gray-600 mb-3">
              Order cancellation and refund policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
              <li>
                Orders can only be cancelled before restaurant confirmation
              </li>
              <li>
                Refunds are processed for cancelled orders within 5-7 business
                days
              </li>
              <li>
                If your order arrives damaged, incomplete, or incorrect, contact
                support immediately
              </li>
              <li>Refund requests must be made within 24 hours of delivery</li>
              <li>
                QuickBite reserves the right to refuse refunds for unreasonable
                claims
              </li>
            </ul>
            <p className="text-gray-600">
              For refund inquiries, please contact our support team with your
              order details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              6. Food Quality and Safety
            </h2>
            <p className="text-gray-600 mb-3">
              Restaurant partners are responsible for food preparation, quality,
              and safety. QuickBite acts as an intermediary platform and does
              not prepare food items.
            </p>
            <p className="text-gray-600 mb-3">
              If you have food allergies or dietary restrictions, please
              communicate directly with the restaurant through special
              instructions. We cannot guarantee that restaurants will
              accommodate all requests.
            </p>
            <p className="text-gray-600">
              If you experience any food safety concerns, please report them to
              us and contact local health authorities if necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              7. Prohibited Activities
            </h2>
            <p className="text-gray-600 mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use QuickBite for any illegal or unauthorized purpose</li>
              <li>
                Attempt to gain unauthorized access to our systems or other user
                accounts
              </li>
              <li>
                Harass, abuse, or threaten restaurant staff or delivery riders
              </li>
              <li>Submit false or fraudulent orders</li>
              <li>
                Reverse engineer, copy, or exploit our platform in any way
              </li>
              <li>Use automated systems or bots to place orders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-3">
              QuickBite provides the platform "as is" without warranties of any
              kind. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
              <li>
                Delays caused by traffic, weather, or circumstances beyond our
                control
              </li>
              <li>
                Food quality, taste, or preparation issues (these are the
                restaurant's responsibility)
              </li>
              <li>
                Losses or damages resulting from incorrect delivery information
                provided by you
              </li>
              <li>Third-party service interruptions or technical issues</li>
              <li>
                Actions of restaurant partners or delivery riders beyond our
                reasonable control
              </li>
            </ul>
            <p className="text-gray-600">
              Our total liability for any claim related to our services shall
              not exceed the amount you paid for the specific order in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              9. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-3">
              All content on QuickBite, including logos, text, graphics, and
              software, is the property of QuickBite or its licensors and is
              protected by copyright and trademark laws.
            </p>
            <p className="text-gray-600">
              You may not copy, reproduce, distribute, or create derivative
              works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              10. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms of Service from time to time.
              Significant changes will be communicated through the app or via
              email. Continued use of QuickBite after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              11. Governing Law
            </h2>
            <p className="text-gray-600">
              These terms are governed by the laws of the Federal Republic of
              Nigeria. Any disputes shall be resolved in the courts of Lagos,
              Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              12. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about these Terms of Service,
              please contact us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-gray-800 font-medium mb-2">
                QuickBite Support Team
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <span className="text-orange-600 font-medium">
                  support@quickbite.com
                </span>
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
            By using QuickBite, you acknowledge that you have read, understood,
            and agree to these Terms of Service.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
