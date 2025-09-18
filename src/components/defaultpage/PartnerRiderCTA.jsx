import { FaUtensils, FaMotorcycle } from "react-icons/fa";
import Rider from "@/assets/Images/rider.png";
import IvoryBites from "@/assets/Images/IvoryBites.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PartnerRiderCTA() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={IvoryBites}
              alt="Restaurant Partner"
              className="rounded-2xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaUtensils className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-3xl font-bold mb-4">Own a restaurant? 🍴</h3>
            <p className="text-gray-600 mb-6">
              Boost your sales by reaching thousands of hungry customers on
              QuickBite. Let us handle delivery while you focus on great food.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/partner"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 shadow"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <motion.img
              src={Rider}
              alt="QuickBite Rider"
              className="rounded-2xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:order-1"
          >
            <FaMotorcycle className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-3xl font-bold mb-4">Want flexible work? 🚴‍♂️</h3>
            <p className="text-gray-600 mb-6">
              Join our rider community, deliver food around town, and earn money
              with flexible hours that fit your schedule.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/rider"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 shadow"
              >
                Join as a Rider
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
