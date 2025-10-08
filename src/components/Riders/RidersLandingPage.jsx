
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Rider({ imageSrc, alt, description }) {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-lg bg-white w-full max-w-sm mx-auto">
      <div className="w-20 h-20 overflow-hidden rounded-full">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-600 text-center text-sm mt-3 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function RidersLandingPage() {
  return (
    <div className="bg-gradient-to-l from-orange-200 to-orange-100">
      {/* Hero Section Part */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-orange-200 to-orange-100">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Riders Network
          </h1>
          <p className="text-lg mb-6">
            Deliver happiness, earn rewards, and be part of a fast-growing food
            vendor company.
          </p>
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-orange-100 transition">
            Become a Rider
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 ">
          <img
            className="w-3/4 md:w-full max-w-md rounded-2xl shadow-lg"
            src="https://i.pinimg.com/736x/28/c2/d7/28c2d7d38c208e18a8610d95d7bdee14.jpg"
            alt="Rider"
          />
        </div>
      </section>

      {/* What Riders Say Section */}
      <section className=" flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          What Riders Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <Rider
            imageSrc="https://i.pinimg.com/736x/28/c2/d7/28c2d7d38c208e18a8610d95d7bdee14.jpg"
            alt="rider 1"
            description="The company changed my life, I control my time and earn well"
          />
          <Rider
            imageSrc="https://i.pinimg.com/736x/28/c2/d7/28c2d7d38c208e18a8610d95d7bdee14.jpg"
            alt="rider 2"
            description="The app is easy to use, and I love the bonuses during weekends"
          />
          <Rider
            imageSrc="https://i.pinimg.com/736x/28/c2/d7/28c2d7d38c208e18a8610d95d7bdee14.jpg"
            alt="rider 3"
            description="I get delivery requests every day — no dull moment!"
          />
        </div>
      </section>

      {/* The question and answer section */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold mt-10">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="" defaultValue="">
        <AccordionItem
          value="item-1"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>
            Why should I become a rider with your food delivery company?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Joining us means joining a fast-growing delivery network that
              values you. We offer flexible working hours, great earning
              potential, instant order access, and rider support every step of
              the way.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>How much can I earn as a rider?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Your earnings depend on the number of deliveries you complete.
              Riders earn a base delivery fee plus bonuses during peak hours or
              high-demand days. Top riders take home ₦100,000+ per month
              depending on effort and consistency.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>Do I need my own bike to start?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, having your own bike is an advantage, but if you don’t, we
              can connect you with partner agencies that offer affordable lease
              or rent-to-own options.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>
            How flexible are the working hours
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              You’re your own boss. Work anytime you want — morning, afternoon,
              or night. You can choose full-time or part-time hours that fit
              your lifestyle.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>How do I get paid?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Payments are made weekly or daily, depending on your preference.
              You’ll receive your earnings directly to your registered bank
              account.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6"
        >
          <AccordionTrigger>
            What requirements do I need to become a rider?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              You need a valid ID card, a smartphone, and a bike (with license
              and insurance). Once verified, you can start delivering and
              earning immediately.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-7"
          className="bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto sm:p-3 lg:p-4 mt-6 mb-16"
        >
          <AccordionTrigger>How do I sign up?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Simply click “Become a Rider” on our website or mobile app, fill
              in your details, and our team will contact you for verification
              and onboarding.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default RidersLandingPage;

