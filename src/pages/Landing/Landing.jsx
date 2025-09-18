import Banner from '@/components/landingComponents/Banner'
import Navbar from '@/components/landingComponents/Navbar'
import Card from '@/components/landingComponents/Cards'
import Explore from "@/components/landingComponents/Explore"
import Feactured from '@/components/landingComponents/Feactured'
import HandPick from "@/components/landingComponents/HandPick"
import Discounts from "@/components/landingComponents/Discounts"
import Product from "@/components/landingComponents/Product"
import BannerAuto from '@/components/landingComponents/BannerAuto'
import Footer from "@/components/landingComponents/Footer"

function Landing() {
  return (
    <div className="w-full">
    
      <Navbar />
      
      <div className="w-full max-w-6xl mx-auto px-4 space-y-16">
        <Banner />
        <Card />
        <Explore />
        <Feactured />
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
