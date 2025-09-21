import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "@/assets/Images/bannertwo.png";

export default function AppMockup() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={Banner}
            alt="QuickBite App"
            className="max-h-[700px] w-full object-contain drop-shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Order food anytime, anywhere 🍔
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8"
          >
            Explore restaurants, place orders in seconds, and track your
            delivery live with <span className="font-semibold">QuickBite</span>.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="https://play.google.com"
              target="_blank"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <FaGooglePlay className="text-3xl mr-3" />
              <span>
                <small className="block text-xs">Get it on</small>
                <span className="text-base font-semibold">Google Play</span>
              </span>
            </Link>

            <Link
              to="https://apps.apple.com"
              target="_blank"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <FaApple className="text-3xl mr-3" />
              <span>
                <small className="block text-xs">Download on</small>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
