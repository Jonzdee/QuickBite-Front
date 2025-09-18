import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?q=OAU%20Ile-Ife%20Osun%20State%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

      <div className="container px-5 py-24 mx-auto flex">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 relative z-10 shadow-lg ml-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-900 text-xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600 mb-6"
          >
            Have questions about your order, want to partner as a vendor or rider? Fill out the form below and we’ll respond quickly.
          </motion.p>

          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            type="email"
            placeholder="quickbite@gmail.com"
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            placeholder="Type your message..."
            className="w-full mb-4 px-3 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;
