import OrderFood from "../../assets/Images/Orderfood2.svg";
import Chef from "../../assets/Images/Chef-bro.svg"
import Deliverd from "../../assets/Images/Take Away-cuate.svg"

export  const introPages = [
  {
    id: 1,
    title: "All your favorites",
    description:
      "Get all your loved foods in one place, you just place the order we do the rest",
    image: OrderFood,
    next: "/intro2", 
    skip: "/login",       
  },
  {
    id: 2,
    title: "Order from choosen chef",
    description:
      "Select your favorite chef from our curated list and enjoy their specialties delivered straight to you.",
    image: Chef,
    next: "/intro3",       
    skip: "/login",       
  },
   {
    id: 3,
    title: "Right to Your Door",
    description:
      "Order in just a few taps and we’ll deliver straight to your door.",
    image: Deliverd,
    getStarted: "/login",       
        
  },
];
