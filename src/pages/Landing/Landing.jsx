import Banner from '@/components/landingComponents/Banner'
import Navbar from '@/components/landingComponents/Navbar'
import Card from '@/components/landingComponents/Cards'
import Explore from "@/components/landingComponents/Explore"
import Feactured from '@/components/landingComponents/Feactured'
import HandPick from "@/components/landingComponents/HandPick"
import Discounts from "@/components/landingComponents/Discounts"
import Product from "@/components/landingComponents/Product"

function Landing() {
  return (
    <div>
<Navbar />
<Banner />
<Card />
<Explore />
<Feactured />
<HandPick />
<Discounts />
<Product />
    </div>
  )
}

export default Landing