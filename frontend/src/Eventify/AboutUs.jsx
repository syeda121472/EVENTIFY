import {Link} from 'react-router-dom';
import React from 'react';
import { div } from 'framer-motion/client';
import { FaHandshake } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { TbCalendarClock } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";

const AboutUs=() =>{
    return(
        <div>
        
      <div className=" bg-[url('images/lfolwer.jpg')]  h-80  bg-cover z-0  w-full bg-center object-cover flex flex-col justify-center items-center text-white  ">
            <h1 className='text-sm uppercase tracking-widest mt-7'>ALL YOU NEED TO KNOW</h1>
             <h1 className="text-4xl text-purple-500 font-bold">
          About <span className="text-white font-bold text-4xl">Eventify</span>
        </h1>
             <div className='flex justify-center items-center gap-2 pt-4'>
               <Link to="/">
            <h1 className='text-white text-center hover:text-purple-500 font-semibold text-lg'>Home </h1>
                 </Link>
          
            <h1 className='text-white text-center text-md' aria-current="page" >| About Us</h1>
            </div>
      </div>

      
<div className='bg-purple-200'>
          <div className='grid grid-cols-1 md:grid-cols-2 pt-9 md:ml-36 px-4 gap-8'>
        {/* our mission */}
    <div>
        <div className='flex gap-2'>
        <h1 className='text-2xl font-bold mt-1'>Our Mission</h1> <hr className='border-t-4 border-purple-500 w-10 mt-6' />
        </div>
      <p className='w-96 text-justify mt-5'>Our mission is to empower users and event organizers through a smart, reliable, and easy-to-use platform that streamlines event planning, booking, and promotion. We are committed to delivering a seamless experience by combining innovation, customization, and efficiency to meet the diverse needs of every user and create memorable events. <br /><span className='font-bold italic'> "Empowering Memorable Moments with Seamless Event Solutions"</span></p>
    </div>
          {/* our vision */}
    <div>
        <div className='flex gap-2'>
        <h1 className='text-2xl font-bold'>Our Vision</h1> <hr className='border-t-4 border-purple-500 w-10 mt-5' />
        </div>
      <p className='w-96 text-justify mt-5'>Our vision is to build a modern, user-centric event management platform that simplifies the process of discovering, customizing, and booking events. By integrating advanced features like real-time ticketing, and seamless collaboration with event organizers, we aim to offer an all-in-one solution that stands out with its flexibility, accessibility, and engaging user experience. <br /><span className='font-bold italic'> "Your Vision, Our Platform — Simplifying Every Step of Your Event"</span></p>
    </div>
    </div>

     <div>
     <hr className='border-t-4 border-purple-500 w-14 mt-9 ml-14' />
     <h1 className='tracking-widest mt-6 ml-20 text-gray-500 '>WHY CHOOSE US</h1>
     <h1 className='text-4xl font-semibold mt-3 ml-20 mb-7'>Eventify <span className='text-4xl font-bold text-purple-600'>Advantages</span></h1>
     </div>
     
       {/* div for flexing first 4 boxes */}
<div className='flex flex-wrap justify-center items-center px-5 gap-1 cursor-pointer'>

  <div className='group w-64 h-56 border-2 border-purple-100 pt-5 mt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <FaHandshake className='w-12 h-12 text-purple-600 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Friendly Team</h1>
    <p className='text-center text-sm group-hover:text-white'>More than 100 members</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 pt-5 mt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <FaGlassCheers className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Unique Scenario</h1>
    <p className='text-center text-sm group-hover:text-white'>We Thinking Out Of The Box</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 pt-5 mt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <GiBalloons className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Perfect Venues</h1>
    <p className='text-center text-sm group-hover:text-white'>Perfect Venues</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 pt-5 mt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <FiPhoneCall className='w-10 h-10 text-purple-500 mx-auto mt-6 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>24/7 Hours Support</h1>
    <p className='text-center text-sm group-hover:text-white'>Any Time Anywhere</p>
  </div>
</div>

{/* Second Row */}
<div className='flex flex-wrap justify-center items-center mt-2 px-5 gap-1 cursor-pointer '>

  <div className='group w-64 h-56 border-2 border-purple-100 mb-11 pt-5  hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <GiPartyPopper className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Unforgetable Time</h1>
    <p className='text-center text-sm group-hover:text-white'>More than 100 members</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 mb-11 pt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <HiLightBulb className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Brilliant Ideas</h1>
    <p className='text-center text-sm group-hover:text-white'>We Thinking Out Of The Box</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 mb-11 pt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <TbCalendarClock className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Unique Scenario</h1>
    <p className='text-center text-sm group-hover:text-white'>Perfect Venues</p>
  </div>

  <div className='group w-64 h-56 border-2 border-purple-100 mb-11 pt-5 hover:bg-gradient-to-l from-purple-400 via-purple-400 to-purple-500 hover:text-white transition-all duration-300'>
    <FaUsersGear className='w-12 h-12 text-purple-500 mx-auto mt-5 group-hover:text-white transition-colors' />
    <h1 className='font-bold text-lg pt-6 text-center group-hover:text-white'>Best Management</h1>
    <p className='text-center text-sm group-hover:text-white'>Anytime Anywhere</p>
  </div>
</div>



          </div>

          {/* -------Review Section-------- */}
              
             
              {/* ---div 1---- */}
              <h1 className='text-center font-semibold text-4xl mt-12'>What People Think <span className='font-bold text-purple-600'>About Us</span> </h1>
              {/* ---flex divs-- */}
         <div className='flex flex-wrap gap-6 justify-center px-7  transition-all duration-700 ease-in-out'> 
          <div className='w-[370px] h-[355px] p-8 border cursor-pointer hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105  duration-700 ease-in-out tracking-wider text-justify mt-10  rounded-lg bg-gradient-to-t  from-purple-200  to-purple-300'>

            <p className='w-72 mt-5'>⭐️⭐️⭐️⭐️⭐️ <br /><br />
"As an event organizer, partnering with Eventify boosted our event attendance by 40%. Their promotion tools are simply the best."</p>
          <div className='flex gap-x-5 mt-8'>
          <img className='rounded-full w-11 h-11 object-cover' src="../images/Managing Director.jpg" alt=" " />
          <div>
          <h1 className='font-semibold'>Fatima Ali</h1>
          <p >Managing Director</p>
          </div>
          </div>
          </div>

           {/* ---div 2--- */}


          <div className='w-[370px] h-[355px] p-8 border cursor-pointer tracking-wider  hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105 duration-700 ease-in-out text-justify mt-10  rounded-lg bg-gradient-to-t  from-purple-200  to-purple-300'>

            <p className='w-72 mt-5'>⭐️⭐️⭐️⭐️ <br /><br />
          
            "Our wedding day was a dream come true thanks to Eventify! The team was responsive, creative, and truly cared about making our day perfect."</p>
          <div className='flex gap-x-5 mt-5'>
          <img className='rounded-full w-11 h-11 object-cover' src="../images/Managing Director.jpg" alt=" " />
          <div>
          <h1 className='font-semibold'>Khadija Ali</h1>
          <p>Wedding Client</p>
          </div>
          </div>
          </div>
           {/* ----3rd div--- */}
          <div className='w-[370px] h-[355px] p-8 border cursor-pointer  tracking-wider hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105 duration-700 ease-in-out text-justify mt-10  rounded-lg bg-gradient-to-t  from-purple-200  to-purple-300'>

            <p className='w-72 mt-5'>⭐️⭐️⭐️⭐️⭐️ <br /><br />
            "Simple, elegant, and efficient — Eventify helped me find and book tickets for concerts I would have missed otherwise. Love the smooth experience!"</p>
          <div className='flex gap-x-5 mt-5'>
          <img className='rounded-full w-11 h-11 object-cover' src="../images/Managing Director.jpg" alt=" " />
          <div>
          <h1 className='font-semibold'>Fatima Ali</h1>
          <p>Regular User</p>
          </div>
          </div>
          </div>
      </div>

      {/* -----our team--- */}

       <div className='bg-purple-200 py-12 mt-10'>
  <h1 className='text-center font-semibold text-4xl mb-10'>
    Our <span className='text-purple-600 font-bold'>Team</span>
  </h1>

  <div className='flex flex-wrap justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 mt-12'>
    <img
      className='w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover hover:shadow-[0_0_26px_#8245ec] hover:scale-105 transition-transform duration-300 cursor-pointer'
      src="../images/Managing Director.jpg"
      alt=""
    />
    <img
      className='w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover hover:shadow-[0_0_26px_#8245ec] hover:scale-105 transition-transform duration-300 cursor-pointer'
      src="../images/Elon Musk Twitter CEO.jpg"
      alt=""
    />
    <img
      className='w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover hover:shadow-[0_0_26px_#8245ec] hover:scale-105 transition-transform duration-300 cursor-pointer'
      src="../images/VCEO.jpg"
      alt=""
    />
    <img
      className='w-24 sm:w-28 h-24 sm:h-28 rounded-full object-cover hover:shadow-[0_0_26px_#8245ec] hover:scale-105 transition-transform duration-300 cursor-pointer'
      src="../images/Managing Director.jpg"
      alt=""
    />
  </div>

  <div className='flex flex-wrap justify-center gap-y-4 gap-x-10 sm:gap-x-20 md:gap-x-28 font-semibold mt-5 pb-10 text-center'>
    <h1 className='w-36'>Event Organizer</h1>
    <h1 className='w-36'>Event Planner</h1>
    <h1 className='w-36'>Managing Director</h1>
    <h1 className='w-36'>Marketing Manager</h1>
  </div>
</div>

            


            {/* -------FAQ Section-------- */}
<div className='bg-purple-200 py-12 mt-10 '>
  <h1 className='text-center font-semibold text-4xl mb-10'>Frequently Asked <span className='text-purple-600 font-bold'>Questions</span></h1>
  <div className='max-w-4xl mx-auto space-y-6 cursor-pointer '>

    <details className='bg-white shadow-md p-6 rounded-lg hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105'>
      <summary className='font-semibold cursor-pointer text-lg text-purple-700'>What services does Eventify offer?</summary>
      <p className='mt-2 text-gray-700'>Eventify provides a comprehensive event management platform including event planning, booking, ticketing, promotion, and collaboration tools for organizers and attendees.</p>
    </details>

    <details className='bg-white shadow-md p-6 rounded-lg hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105'>
      <summary className='font-semibold cursor-pointer text-lg text-purple-700'>Is Eventify suitable for private and corporate events?</summary>
      <p className='mt-2 text-gray-700'>Yes, our platform is designed to handle both private events like weddings and birthdays, as well as corporate functions, conferences, and more.</p>
    </details>

    <details className='bg-white shadow-md p-6 rounded-lg hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105'>
      <summary className='font-semibold cursor-pointer text-lg text-purple-700'>How do I contact support if I have issues?</summary>
      <p className='mt-2 text-gray-700'>You can reach our 24/7 support team via phone, email, or our in-app live chat feature.</p>
    </details>

    <details className='bg-white shadow-md p-6 rounded-lg hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105'>
      <summary className='font-semibold cursor-pointer text-lg text-purple-700'>Can I customize my event page on Eventify?</summary>
      <p className='mt-2 text-gray-700'>Absolutely! Eventify allows you to personalize your event listings with images, branding, custom descriptions, and ticketing options.</p>
    </details>

    <details className='bg-white shadow-md p-6 rounded-lg hover:shadow-[0_0_25px_#8245ec] transition-transform hover:scale-105'>
      <summary className='font-semibold cursor-pointer text-lg text-purple-700'>How do I know if my ticket booking was successful?</summary>
      <p className='mt-2 text-gray-700'>You will receive a confirmation email and a ticket PDF once the booking is successful.</p>
    </details>

  </div>
</div>

    </div>
    )
}
export default AboutUs;