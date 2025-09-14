import React from 'react'
import { Utensils, ShoppingBag, Package, MapPin, Pill, MoreHorizontal } from 'lucide-react'

function Cards() {
    const cards = [
        {
            id: 1,
            title: "Restaurants",
            icon: Utensils,
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            id: 2,
            title: "Shops",
            icon: ShoppingBag,
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            id: 3,
            title: "Send Packages",
            icon: Package,
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            id: 4,
            title: "Local Markets",
            icon: MapPin,
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            id: 5,
            title: "Pharmacies",
            icon: Pill,
            bgColor: "bg-red-100",
            iconColor: "text-red-600"
        },
        {
            id: 6,
            title: "More",
            icon: MoreHorizontal,
            bgColor: "bg-gray-100",
            iconColor: "text-gray-600"
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-4 sm:gap-6 py-5 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
            {cards.map((card) => {
                const IconComponent = card.icon;
                return (
                    <div
                        key={card.id}
                        className={`flex flex-col items-center p-4 sm:p-6 ${card.bgColor} rounded-xl shadow-sm hover:shadow-md transition cursor-pointer`}
                    >
                        <div className={`p-3 sm:p-4 ${card.bgColor} rounded-full mb-2 sm:mb-3`}>
                            <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${card.iconColor}`} />
                        </div>
                        <h2 className="text-sm sm:text-base font-semibold text-center text-gray-800">{card.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards