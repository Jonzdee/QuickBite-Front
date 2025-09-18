import React from "react";

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
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 relative z-10 shadow-lg ml-auto">
          <h2 className="text-gray-900 text-xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about your order, want to partner as a vendor or rider? Fill out the form below and we’ll respond quickly.
          </p>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Type your message..."
            className="w-full mb-4 px-3 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
