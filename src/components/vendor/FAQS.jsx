import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I join?",
    answer:
      "Simply click on 'Start Selling on QuickBite', complete the signup form, and upload your business documents. Once reviewed, you’ll be onboarded as a vendor.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Approval typically takes 24–48 hours after you submit the required documents.",
  },
  {
    question: "What percentage does QuickBite charge?",
    answer:
      "QuickBite charges a low commission fee on each order. Rates are transparent and with no hidden charges.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Vendors receive payouts weekly, directly into their bank accounts. You can also track payments in your vendor dashboard.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 cursor-pointer border border-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-3 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
