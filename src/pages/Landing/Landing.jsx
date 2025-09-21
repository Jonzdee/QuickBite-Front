import React from 'react'
import Navbar from "../../components/landingComponents/Navbar"
import Banner from '@/components/landingComponents/Banner'
import Cards from '@/components/landingComponents/Cards'
import Explore from "@/components/landingComponents/Explore"
import Featured from '@/components/landingComponents/Feactured'
import HandPick from '@/components/landingComponents/HandPick'
import Discounts from '@/components/landingComponents/Discounts'
import BannerAuto from '@/components/landingComponents/BannerAuto'
import Product from "@/components/landingComponents/Product"
import Footer from '@/components/landingComponents/Footer'
function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 space-y-12">
        <Banner />
        <Cards />
        <Explore />
        <Featured />
        <HandPick />
        <Discounts />
        <BannerAuto />
        <Product />
      </div>

      <Footer />
    </div>
  )
}


export default Landing