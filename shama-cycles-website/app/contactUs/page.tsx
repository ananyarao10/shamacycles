"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mailingEmail, setMailingEmail] = useState("");

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify Forms will handle the submission automatically
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };  const handleMailingSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mailing list signup:", mailingEmail);
  };

  return (
    <div className="relative overflow-hidden px-6 py-12 bg-white dark:bg-black">
      <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">CONTACT US</h1>
        <div className="h-1.25 w-3/5 mx-auto mt-6 bg-linear-to-r from-transparent via-red-600 to-transparent animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>

      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="grid lg:grid-cols-[400px_1fr] gap-20 mb-20">

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Get in touch with us!</h2>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email:</h3>
              <a href="mailto:philip@shamacycles.com" className="text-lg text-gray-900 dark:text-white underline hover:text-red-600 transition">
                philip@shamacycles.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone:</h3>
              <a href="tel:713-812-7633" className="text-lg text-gray-900 dark:text-white underline hover:text-red-600 transition">
                713-812-7633
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address:</h3>
              <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
                2000 Edwards St. #B150
                <br />
                Houston, TX 77007
              </p>
              <p className="mt-3 p-3 bg-red-100 dark:bg-red-900/20 border-l-4 border-red-600 rounded text-red-900 dark:text-red-300 text-sm font-medium">
                <strong>⚠️ Parking Notice:</strong> Please park on Edwards St. Do not use the back lot.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hours:</h3>
              <div className="flex flex-col gap-2 text-gray-900 dark:text-white">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>1:00 PM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Join our mailing list:</h3>
              <form onSubmit={handleMailingSignup} className="flex gap-2">
                <input
                  type="email"
                  value={mailingEmail}
                  onChange={(e) => setMailingEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 border-2 border-gray-300 dark:border-gray-500 rounded-full focus:border-red-600 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                  />
                <button type="submit" className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full font-semibold hover:bg-black dark:hover:bg-gray-600 transform hover:scale-105 transition">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-7 rounded-lg border border-gray-200 dark:border-gray-600">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-900 dark:text-white">First Name<span className="text-red-600 ml-1">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                    className="px-4 py-3 rounded-md bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-500 transition text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-900 dark:text-white">Last Name<span className="text-red-600 ml-1">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                    className="px-4 py-3 rounded-md bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-500 transition text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-900 dark:text-white">Email Address<span className="text-red-600 ml-1">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="px-4 py-3 rounded-md bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-500 transition text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-900 dark:text-white">Subject<span className="text-red-600 ml-1">*</span></label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  className="px-4 py-3 rounded-md bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-500 transition text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-900 dark:text-white">Message<span className="text-red-600 ml-1">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={6}
                  required
                  className="px-4 py-3 rounded-md bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-500 transition resize-vertical text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-md font-semibold hover:bg-black dark:hover:bg-gray-600 transform hover:scale-105 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2359019103146!2d-95.38166162414944!3d29.77081957506253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c6c0b5b27d1f%3A0x984c9e7d965e1658!2sShama%20Cycles!5e0!3m2!1sen!2sus!4v1762096828613!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Shama Cycles Location"
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/front_of_store.webp"
              alt="Shama Cycles Storefront on Edwards St"
              width={400}
              height={384}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <p className="text-center text-gray-600 dark:text-gray-400 font-medium">
              Our shop on Edwards St - Park on the street out front!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
