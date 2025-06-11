import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHandshake, FaGlassCheers } from "react-icons/fa";
import { GiBalloons, GiPartyPopper } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { TbCalendarClock } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { useState } from 'react';

export default function Home() {
  // Sample event data
  const allEvents = [
    {
      img: '/images/bloon.jpeg',
      title: 'Elegant Wedding Ceremony',
      date: '15 Aug, 2025',
      location: 'Pearl Continental Hotel, Lahore',
      time: '6:00 PM – 11:00 PM'
    }, 
    {
      img: '/images/dining.jpg',
      title: 'Romantic Candlelight Dinner',
      date: '10 Sep, 2025',
      location: 'LUXE Banquet Hall, Karachi',
      time: '7:00 PM – 10:00 PM'
    }, 
    {
      img: '/images/lightt.jpg',
      title: 'Spring Festival Gala',
      date: '20 Mar, 2026',
      location: 'Islamabad Club Garden',
      time: '4:00 PM – 9:00 PM'
    }, 
    {
      img: '/images/ltabels.jpg',
      title: 'Corporate Networking Night',
      date: '05 Jan, 2026',
      location: 'Serena Hotel, Islamabad',
      time: '5:30 PM – 9:30 PM'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = allEvents.filter(event => 
      event.title.toLowerCase().includes(term) ||
      event.location.toLowerCase().includes(term) ||
      event.date.toLowerCase().includes(term)
    );
    
    setFilteredEvents(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-screen w-full"
        >
          {[
            { img: '/images/flower.jpg', title: 'Plan Amazing', subtitle: 'Making your every event a success story.' },
            { img: '/images/whitejar.jpg', title: 'Celebrate with', subtitle: 'Experience unforgettable moments with us.' },
            { img: '/images/candles.jpg', title: 'Your Dream', subtitle: 'We bring your ideas to life beautifully.' }
          ].map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url('${slide.img}')` }}>
                <div className="h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
                  <h1 className="text-5xl font-bold mb-4">{slide.title} <span className="text-purple-500">Events</span></h1>
                  <p className="mb-8 text-lg">{slide.subtitle}</p>
                  <div className="space-x-4">
                    <Link to="/Login">
                      <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-black font-bold rounded-full">Login</button>
                    </Link>
                    <Link to="/Signup">
                      <button className="px-8 py-3 bg-purple-400 text-black font-bold rounded-full hover:bg-gradient-to-r from-purple-600 to-pink-500">Signup</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className='bg-purple-200'>
         
         <h1 className='tracking-widest pt-14 ml-20 text-gray-500 '>WHY CHOOSE US</h1>
         <h1 className='text-4xl font-semibold mt-3 ml-20 mb-7'>Eventify <span className='text-4xl font-bold text-purple-600'>Advantages</span></h1>
         
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
      <div>
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
</div>
      {/* === Event Highlight Section (Grid 2x2) === */}
      <div className="max-w-6xl mx-auto my-16 px-4">
        <h1 className="text-4xl text-purple-600 font-bold text-center">
          Event <span className="text-black font-semibold">Listing
          </span>
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events by title, location or date..."
              className="w-full p-4 pl-12 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              value={searchTerm}
              onChange={handleSearch}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        {/* Event Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="bg-white  rounded-lg flex flex-col md:flex-row overflow-hidden  border shadow-[0_0_25px_#8245ec] hover:shadow-none transition-all hover:scale-105">
                {/* Image with Date */}
                <div className="relative w-full md:w-1/3">
                  <img src={event.img} alt="Event" className="h-full w-full object-cover" />
                  <div className="absolute top-1 left-1 bg-purple-600 text-white px-2 py-3 rounded text-xs font-semibold">
                    {event.date}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
                  <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-2">{event.title}</h2>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Join us for an unforgettable event full of joy, networking, and celebration. Seats are limited—book early!
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to='/signup'>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow transition">
                        Book Now
                      </button>
                    </Link>
                    <Link to='/EventDetails'>
                      <button className="border border-purple-600 text-purple-600 hover:bg-purple-100 px-4 py-2 rounded transition">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <h3 className="text-xl text-purple-600 font-semibold">No events found</h3>
              <p className="text-gray-600 mt-2">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </div>
      {/* Image Gallery Section */}
      <h1 className="text-4xl text-black font-semibold text-center">
          Image <span className="text-purple-600 font-bold">Gallery</span>
        </h1>
      <div className='bg-purple-200'>
<div className="max-w-6xl mx-auto my-16 px-4 ">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-9 pb-9">
    {[
      {
        type: "image",
        src: "/images/dining.jpg",
        title: "John Doe Wedding Day",
        category: "Wedding Party, 24 June 2016",
      },
      {
        type: "video",
        src: "/videos/food.mp4",
        title: "Business Conference In Dubai",
        category: "Conference, 12 July 2022",
      },
      {
        type: "image",
        src: "/images/meet.jpg",
        title: "Envato Author Fun Hiking",
        category: "Outdoor Event, 14 March 2021",
      },
     
      {
        type: "video",
        src: "/videos/wedding.mp4",
        title: "New Year Celebration",
        category: "Celebration, 1 Jan 2023",
      },
       {
        type: "image",
        src: "/images/party.jpg",
        title: "Envato Author Fun Hiking",
        category: "Outdoor Event, 14 March 2021",
      },
      {
        type: "image",
        src: "/images/whitecandle.jpg",
        title: "Envato Author Fun Hiking",
        category: "Outdoor Event, 14 March 2021",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <video
            src={item.src}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-200 text-sm">{item.category}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
{/* === FAQ Section === */}
<div className="bg-purple-200 py-16 px-4">
  <h1 className="text-4xl text-black font-semibold text-center">
          Frequently Asked <span className="text-purple-600 font-bold">Questions</span>
        </h1>
  <div className="max-w-4xl mx-auto space-y-4 mt-12">
    {[
      {
        q: "What services do you offer?",
        a: "We offer planning, decor, photography, and coordination for all types of events.",
      },
      {
        q: "Can I customize my package?",
        a: "Yes, we provide fully customizable event packages tailored to your needs.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Full refunds are available if canceled 30 days in advance. Partial refunds otherwise.",
      },
      {
        q: "Do you support out-of-city events?",
        a: "Absolutely! We travel across Pakistan to organize your perfect event.",
      },
    ].map((faq, index) => (
      <details
        key={index}
        className="border border-purple-300 rounded-lg overflow-hidden transition-all duration-300"
      >
        <summary className="cursor-pointer px-5 py-4 font-medium text-purple-800 bg-white hover:bg-purple-100 flex justify-between items-center">
          {faq.q}
          <span className="text-purple-600 transform transition-transform duration-300">
            ▼
          </span>
        </summary>
        <div className="px-5 pb-4 text-gray-700">{faq.a}</div>
      </details>
    ))}
  </div>
</div>

    </div>
  );
}