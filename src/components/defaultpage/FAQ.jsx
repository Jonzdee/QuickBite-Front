import { useState } from 'react';
import { ChevronDown, Clock, MapPin, CreditCard, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <Clock className="w-5 h-5" />,
      q: "How long does delivery take?",
      a: "On average, 20–40 minutes depending on restaurant prep and distance. We'll keep you updated with real-time tracking so you know exactly when your food will arrive."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      q: "Do you deliver to my area?",
      a: "Currently we serve Ile-Ife and surrounding neighborhoods. Enter your address at checkout to confirm delivery availability. We're rapidly expanding to new cities!"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      q: "What payment methods do you accept?",
      a: "We accept all major payment methods including Paystack, bank transfers, debit/credit cards, mobile money, and cash on delivery. Your payment information is always secure."
    },
    {
      icon: <Truck className="w-5 h-5" />,
      q: "Is there a delivery fee?",
      a: "Delivery fees vary by distance and restaurant, typically ₦200-500. The exact fee is calculated and displayed at checkout before you complete your order. No hidden charges!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold bg-orange-500 bg-clip-text text-transparent mb-4">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ordering and delivery
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl transition-colors duration-200 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {faq.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900">{faq.q}</h4>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="ml-16 pt-2">
                    <div className="h-px bg-gradient-to-r from-orange-200 to-red-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-600">
            <span>Still have questions?</span>
            <Link to="/contact">
            <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
              Contact Support →
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}