import React, { useState } from "react";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const EventDetails = () => {
  // Booking form ke liye state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    eventCategory: "",
    additionalNotes: ""
  });

  const [message, setMessage] = useState("");

  // Token (example: from localStorage)
  const token = localStorage.getItem("token");  // or any method to get token

  // Form inputs ki value update karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // pehle message clear karo

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`  // Added token header
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Booking successful!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          eventCategory: "",
          additionalNotes: ""
        });
      } else {
        setMessage(data.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting booking. Please try later.");
    }
  };

  return (
    <div>
      {/* Your existing header and other content */}
      <div className=" bg-[url('images/lfolwer.jpg')]  h-80  bg-cover z-0  w-full bg-center object-cover flex flex-col justify-center items-center text-white   ">
        <h1 className='text-sm uppercase tracking-widest mt-7'>ALL YOU NEED TO KNOW</h1>
        <h1 className="text-4xl text-purple-500 font-bold">
          About <span className="text-white font-bold text-4xl">Eventify</span>
        </h1>
        <div className='flex justify-center items-center gap-2 pt-4'>
          <Link to="/">
            <h1 className='text-white text-center hover:text-purple-500 font-semibold text-lg'>Home </h1>
          </Link>
          <h1 className='text-white text-center text-md' aria-current="page" >| Event Details</h1>
        </div>
      </div>

      <div className="bg-gray-50 p-6 ">
        {/* Page Title */}
        <h1 className="text-4xl text-black font-semibold text-center">
          Event <span className="text-purple-600 font-bold">Details</span>
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left: Event Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/images/whitejar.jpg"
              alt="Event"
              className="w-full h-64 object-cover rounded-lg mt-5 mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-700 mb-2 mt-10">
              Grand Wedding Celebration
            </h2>
            <p className="text-gray-600 mb-4">
              At Eventify, we transform dreams into unforgettable memories with our Grand Wedding Ceremony services.
              Whether you envision a lavish celebration or an intimate affair, our expert planners meticulously handle every detail—from 
              venue styling and floral decor to catering, lighting, and entertainment. We blend tradition with modern elegance
               to create a seamless experience that reflects your unique love story. Let us bring your vision to life and craft
                a wedding that’s as extraordinary as your journey together.
              Join us for an enchanting wedding night filled with love, elegance,
              and tradition. Enjoy curated decor, gourmet food, and a memorable
              experience.
            </p>

            <div className="space-y-2 text-gray-700 mt-10">
              <p className="flex items-center gap-2">
                <MapPin className="text-purple-600" /> Pearl Continental Hotel,
                Lahore
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="text-purple-600" /> 20th December 2025
              </p>
              <p className="flex items-center gap-2">
                <Clock className="text-purple-600" /> 6:00 PM - 12:00 AM
              </p>
            </div>
          </div>

          {/* Right: Contact + Map + FAQ */}
          <div className="space-y-6">
            {/* Contact Button */}
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Contact Us
              </h3>
              <Link to='/Contact'>
                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                  Call for Booking
                </button>
              </Link>
            </div>

            {/* Embedded Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Pearl Continental Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.003507186302!2d74.33238959999999!3d31.558007050000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd7c8131b5%3A0x8dca2fbcf70f23c3!2sPearl%20Continental%20Hotel%20Lahore!5e0!3m2!1sen!2s!4v1625664412345!5m2!1sen!2s"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* FAQ */}
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">FAQs</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <p className="font-semibold">1: Is parking available?</p>
                  <p> Yes, free valet parking is provided for all guests.</p>
                </div>
                <div>
                  <p className="font-semibold">2: Is this an indoor or outdoor event?</p>
                  <p> This is an indoor event with air-conditioned halls.</p>
                </div>
                <div>
                  <p className="font-semibold">3: Are children allowed?</p>
                  <p> Yes, kids above 5 years require a ticket.</p>
                </div>
                <div>
                  <p className="font-semibold">4: What is the dress code?</p>
                  <p> Traditional/Formal attire is recommended.</p>
                </div>
                <div>
                  <p className="font-semibold">5: Can I bring an extra guest?</p>
                  <p> Only registered guests will be allowed entry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {[
              {
                title: "Silver",
                price: "PKR 150,000",
                features: [
                  "Standard Decor",
                  "Basic Lighting",
                  "Catering for 100",
                ],
              },
              {
                title: "Gold",
                price: "PKR 300,000",
                features: [
                  "Premium Decor",
                  "Live Music",
                  "Catering for 200",
                ],
              },
              {
                title: "Platinum",
                price: "PKR 500,000",
                features: [
                  "Luxury Decor",
                  "Stage & Media",
                  "Catering for 300",
                ],
              },
            ].map((pkg, i) => (
              <div key={i} className="bg-purple-200 p-6 rounded-lg shadow-md  hover:shadow-[0_0_25px_#8245ec]">
                <h3 className="text-2xl font-bold text-purple-700 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{pkg.price}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {pkg.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-purple-200 p-7 mt-20 ">
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Book Your Event
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-purple-300 rounded"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-purple-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-purple-300 rounded"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <select
              name="eventCategory"
              className="w-full px-4 py-2 border border-purple-300 rounded"
              value={formData.eventCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Event Category</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Concert">Concert</option>
              <option value="Fashion Show">Fashion Show</option>
            </select>
            <textarea
              name="additionalNotes"
              rows="4"
              placeholder="Additional Notes"
              className="w-full px-4 py-2 border border-purple-300 rounded"
              value={formData.additionalNotes}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500  text-white px-6 py-2 rounded "
            >
              Submit Booking
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-purple-700 font-semibold">
              {message}
            </p>
          )}
        </div>
         </div>

      </div>
      
    </div>
   
  );
};

export default EventDetails;
