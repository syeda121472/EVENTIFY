import {Link} from 'react-router-dom';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du6bvi8",  // Replace with your EmailJS Service ID
        "template_fhdbrkt",  // Replace with your EmailJS Template ID
        form.current,
        "oAsVSCq7t5e8AGDUP"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };
  return (
    <div className="bg-purple-200 min-h-screen">
      {/* Header Section */}
      <div className="bg-[url('images/lfolwer.jpg')] h-80  bg-cover z-0  w-full bg-center object-cover  flex flex-col justify-center items-center text-white">
        <p className="text-sm uppercase tracking-widest mt-5">Contact Us Now</p>
        <h1 className="text-4xl font-bold">
          Keep <span className="text-purple-500">In Touch</span>
        </h1>
        <div className='flex justify-center items-center gap-2 pt-4'>
            <Link to="/">
              <h1 className='text-white text-center hover:text-purple-500 font-semibold text-lg'>Home </h1>
             </Link>
                 
              <h1 className='text-white text-center text-md' aria-current="page" >| Contact Us</h1>
          </div>

      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="mb-10 text-center">
          <p className="uppercase text-sm tracking-widest text-gray-600">Contact Us</p> <br />
          <h2 className="text-3xl font-bold text-gray-800">
            Keep In Touch <span className="text-purple-600">With Eventify</span>
          </h2>
        </div>

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Your City"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Your Message"
            className="md:col-span-2 border border-gray-300 rounded px-4 py-3 h-40  focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-purple-500   text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

