import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Team1 from "@/assets/Images/Team1.jpg"
import Team2 from "@/assets/Images/Team2.jpg"
import Team3 from "@/assets/Images/Team3.jpg"
function Team() {
  const members = [
    {
      name: "Narhiz",
      role: "UI Developer",
      img:Team1,
      socials: { facebook: "/", twitter: "/", instagram: "/" },
    },
    {
      name: "Oluwakemi",
      role: "Backend Developer",
      img:Team2,
      socials: { facebook: "/", twitter: "/", instagram: "/" },
    },
    {
      name: "Narhzih",
      role: "Product Designer",
      img:Team3,
      socials: { facebook: "/", twitter: "/", instagram: "/" },
    },
    {
      name: "Narhzih",
      role: "Project Manager",
      img:Team1,
      socials: { facebook: "/", twitter: "/", instagram: "/" },
    },
  ];

  return (
    <section className="text-gray-700 body-font bg-gray-50">
      <div className="container px-5 py-20 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 transform hover:scale-105 transition"
              />
              <h3 className="font-semibold text-lg">{m.name}</h3>
              
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                {m.role}
              </span>
            
              <div className="flex justify-center space-x-4 mt-4 text-gray-500">
                <Link to={m.socials.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF className="cursor-pointer hover:text-orange-600" />
                </Link>
                <Link to={m.socials.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter className="cursor-pointer hover:text-orange-600" />
                </Link>
                <Link to={m.socials.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram className="cursor-pointer hover:text-orange-600" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
