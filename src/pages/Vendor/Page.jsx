import React from 'react'
import Navbar from '@/components/defaultpage/Navbar'
import Hero from '@/components/vendor/Hero'
import Steps from '@/components/vendor/Steps'
import VendorBenefits from '@/components/vendor/VendorBenefits'
import EarningsHighlights from '@/components/vendor/EarningsHighlights'
import FAQs from '@/components/vendor/FAQS'
import Footer from '@/components/landingComponents/Footer'
function Page() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Steps />
        <VendorBenefits />
        <EarningsHighlights />
        <FAQs />
        <Footer />
    </div>
  )
}

export default Page