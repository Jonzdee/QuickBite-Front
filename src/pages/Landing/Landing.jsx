import Banner from '@/components/landingComponents/Banner'
import Navbar from '@/components/landingComponents/Navbar'
import Card from '@/components/landingComponents/Cards'
import Explore from "@/components/landingComponents/Explore"

function Landing() {
  return (
    <div>
<Navbar />
<Banner />
<Card />
<Explore />
    </div>
  )
}

export default Landing