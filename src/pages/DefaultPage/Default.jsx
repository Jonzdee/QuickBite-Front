import AppMockup from "@/components/defaultpage/AppMockup";
import ContactUs from "@/components/defaultpage/ContactUs";
import FAQ from "@/components/defaultpage/FAQ";
import Hero from "@/components/defaultpage/Hero";
import Navbar from "@/components/defaultpage/Navbar";
import PartnerRiderCTA from "@/components/defaultpage/PartnerRiderCTA";
import Step from "@/components/defaultpage/Step";
import Team from "@/components/defaultpage/Team";
import Footer from "@/components/landingComponents/Footer";
import React from "react";

function Default() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Step />
      <AppMockup />
      <PartnerRiderCTA />
      <Team />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Default;
