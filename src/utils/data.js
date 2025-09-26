
import Tantalizer from "@/assets/vendorslogo/Tantalizers.png";
import JustFood from "@/assets/vendorslogo/Just Food.png";
import Alade from "@/assets/vendorslogo/alade.png";
import Kitchentago from "@/assets/vendorslogo/kitchentago.png";

// 🍽 Main restaurants with menus
export const restaurants = [
  {
    id: 1,
    name: "IvoryBites Restaurant and Bakery",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEyQ9ErnFtFkIt9VI6loWFYiT6Fq7s5b14K9bX57Q_ng-WOxRQWNuWbZGoJIWkw37iEYV9XsLsVTSBvsjM5Q_OuWovdDMqeGM3G0n0kV79PT277jka-fsxnPUItGMRYNzSk8P2lw=s680-w680-h510-rw",
    promo: "Up to 40% & Free Delivery!!",
    deliveryFee: "Free",
    eta: "44 - 54 min",
    rating: 4.2,
    reviews: 6635,
    menu: [
      {
        category: "Breakfast",
        items: [
          {
            id: 101,
            name: "Pancakes",
            description: "Fluffy pancakes served with syrup and butter.",
            price: "₦2500",
            img: "https://www.inspiredtaste.net/wp-content/uploads/2025/07/Pancake-Recipe-1.jpg",
          },
          {
            id: 102,
            name: "Omelette",
            description: "Cheese and veggie omelette with toast.",
            price: "₦2000",
            img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/theperfectomelette_86680_16x9.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jopa Foodie (Mayfair Ife)",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npGbNBysF7yu_sp4H61ZYQIC2GqNjkvKatIBVz3xTDt-nYbr5jsSGcqZXEcFJQA4437SOxQ92WBv9w1t_J77wqnEb5UeoTf1LQQ6L_STPGQT4lFnAsHnvKZLMU93li7OPTS0J5I=s680-w680-h510-rw",
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
    menu: [
      {
        category: "Local Dishes",
        items: [
          {
            id: 201,
            name: "Jollof Rice",
            description: "Classic Nigerian Jollof with chicken.",
            price: "₦3000",
            img: "https://bing.com/th?id=OSK.c52be19fa27f4ac7b587aa019b5402c7",
          },
          {
            id: 202,
            name: "Pounded Yam & Egusi",
            description: "Pounded yam with rich egusi soup.",
            price: "₦3500",
            img: "https://bing.com/th?id=OSK.e72e11b0295c9e77b3f77cda91b28c8f",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Mama Put Express",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no2FQknU8hmCPRXbhRajCNhAP5V972Tft6jUSLZNeA9NtjPfoWjDe44jvx88xD_bPXZc8CxGmHeSHDQ0Pyd3t2m3rbn1mPc82FNQpVeVPwpoAid0s5kHFkMUt7n2bsgdbrVKo4=s680-w680-h510-rw",
    promo: "10% off all swallow dishes",
    deliveryFee: "₦700",
    eta: "25 - 35 min",
    rating: 4.0,
    reviews: 1520,
    menu: [
      {
        category: "Swallow",
        items: [
          {
            id: 301,
            name: "Amala & Ewedu",
            description: "Soft amala served with ewedu and assorted meat.",
            price: "₦2800",
            img: "https://tse4.mm.bing.net/th/id/OIP.qkweNHdBAxxUOx4Z8jwnrQHaHc?rs=1&pid=ImgDetMain&o=7&rm=3",
          },
          {
            id: 302,
            name: "Eba & Ogbono",
            description: "Eba with delicious ogbono soup.",
            price: "₦2500",
            img: "https://i.pinimg.com/736x/d8/da/c9/d8dac954cd8125c328acf8a51de0012c.jpg",
          },
        ],
      },
    ],
  },
 {
  id: 4,
  name: "Just Food",
  img: JustFood,
  promo: "20% off all orders today!",
  deliveryFee: "₦1000",
  eta: "25 - 40 min",
  rating: 4.4,
  reviews: 2890,
  menu: [
    {
      category: "Meals",
      items: [
        {
          id: 401,
          name: "Fried Rice & Chicken",
          description: "Fried rice served with grilled chicken and salad.",
          price: "₦3500",
          img: "https://bing.com/th?id=OSK.2e7bda12d3fd44df82c0c2e59c715f20",
        },
        {
          id: 402,
          name: "Shawarma",
          description: "Chicken shawarma wrapped with veggies and mayo.",
          price: "₦2000",
          img: "https://bing.com/th?id=OSK.4b73b258f1a927dfd6c58a07a0bdbd31",
        },
      ],
    },
  ],
},
{
  id: 5,
  name: "Tantalizer",
  img: Tantalizer,
  promo: "Buy 1 meat pie, get 1 free!",
  deliveryFee: "₦800",
  eta: "20 - 35 min",
  rating: 4.6,
  reviews: 3100,
  menu: [
    {
      category: "Snacks",
      items: [
        {
          id: 501,
          name: "Meat Pie",
          description: "Golden crust meat pie with minced beef filling.",
          price: "₦1000",
          img: "https://bing.com/th?id=OSK.62f36532eb9e5a2ab3d4799e8651a7f3",
        },
        {
          id: 502,
          name: "Scotch Egg",
          description: "Crispy coated scotch egg with sausage.",
          price: "₦800",
          img: "https://bing.com/th?id=OSK.72c3a9d21a0a3e6a8dd3b6f12d78b15a",
        },
      ],
    },
  ],
},
{
  id: 6,
  name: "Mr Biggs",
  img: "https://nairametrics.com/wp-content/uploads/2019/07/Mr.jpg",
  promo: "₦500 off family packs",
  deliveryFee: "₦1200",
  eta: "30 - 45 min",
  rating: 4.3,
  reviews: 2750,
  menu: [
    {
      category: "Family Packs",
      items: [
        {
          id: 601,
          name: "Rice & Chicken Pack",
          description: "Rice, beans, chicken, and dodo in a family pack.",
          price: "₦5000",
          img: "https://dodptt9f4zk9h.cloudfront.net/stores/139851/products/5190c507d7660dcc6a6db675eade7063e257f946.jpeg",
        },
        {
          id: 602,
          name: "Burger Combo",
          description: "Burger, fries, and drink combo.",
          price: "₦3500",
          img: "https://yellowplate.ng/wp-content/uploads/2019/09/Burger-loves-fries.jpg",
        },
      ],
    },
  ],
},

];

// Discounts
export const discounts = [
  {
    id: 101,
    name: "Chicken Republic – Ikorodu",
    img: JustFood,
    promo: "Up to 40% & Free Delivery!!",
    deliveryFee: "Free",
    eta: "44 - 54 min",
    rating: 4.2,
    reviews: 6635,
  },
  {
    id: 102,
    name: "Papa's Grill",
    img: Kitchentago,
    promo: "₦500 off orders above ₦3,000",
    deliveryFee: "From ₦1,000",
    eta: "30 - 45 min",
    rating: 4.5,
    reviews: 2140,
  },
  {
    id: 103,
    name: "Urban Grills & Pizza",
    img: "https://bing.com/th?id=OSK.92218434f8a2f3d1a20f48244e056a6e",
    promo: "Buy 1 Get 1 Free on Pizza",
    deliveryFee: "₦1200",
    eta: "35 - 50 min",
    rating: 4.7,
    reviews: 3240,
  },
];

// Featured
export const featured = [
  {
    id: 201,
    name: "Tantalizers",
    img: Tantalizer,
    promo: "Special deal today!",
    deliveryFee: "₦800",
    eta: "20 - 35 min",
    rating: 4.6,
    reviews: 1200,
  },
  {
    id: 202,
    name: "Alade Foods",
    img: Alade,
    promo: "₦500 off orders above ₦3,500",
    deliveryFee: "₦1,000",
    eta: "30 - 40 min",
    rating: 4.3,
    reviews: 980,
  },
  {
    id: 203,
    name: "Mama Put Express",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMamahut1q0sjjGRc7QssjGRsTu-s1a8A=s680-w680-h510-rw",
    promo: "10% off swallows",
    deliveryFee: "₦700",
    eta: "25 - 35 min",
    rating: 4.0,
    reviews: 1520,
  },
];


export const exploreLogos = [
  { id: 301, src: Tantalizer, name: "Tantalizers" },
  { id: 302, src: JustFood, name: "Just Food" },
  { id: 303, src: Alade, name: "Kitchen Tago" },
  { id: 304, src: Kitchentago, name: "Alad Scents" },
  { id: 305, src: Kitchentago, name: "Guineafo" },
  { id: 306, src: "https://bing.com/th?id=OSK.92218434f8a2f3d1a20f48244e056a6e", name: "Urban Grills" },
];
