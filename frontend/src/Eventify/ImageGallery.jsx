import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure this is imported correctly
import { div } from "framer-motion/client";

const tabs = ["All", "Video", "Photo"];

const galleryItems = [
  {
    type: "photo",
    title: "John Doe Wedding Day",
    subtitle: "Wedding Party, 24 June 2016",
    image: "/images/night.jpg",
  },
  {
    type: "video",
    title: "Acoustic Performance",
    subtitle: "Live Event, 24 June 2016",
    image: "/images/public.jpg",
    video: "/videos/food.mp4",
  },
  {
    type: "photo",
    title: "Envato Author Fun Hiking",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/graduate.jpg",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/skylight.jpg",
  },
   {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/whitejar.jpg",
  },
  {
    type: "video",
    title: "Acoustic Performance",
    subtitle: "Live Event, 24 June 2016",
    image: "/images/brideGroom.jpg",
    video: "/videos/wedding.mp4",
  },
   {
    type: "video",
    title: "Acoustic Performance",
    subtitle: "Live Event, 24 June 2016",
    image: "/images/brideGroom.jpg",
    video: "/videos/food.mp4",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/night.jpg",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/partynight.jpg",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/club.jpg",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/whitejar.jpg",
  },
  {
    type: "photo",
    title: "New Year Celebration",
    subtitle: "Food Festival, 24 June 2016",
    image: "/images/drums.jpg",
  },
];


const ImageGallery = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredItems =
    selectedTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === selectedTab.toLowerCase());

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/images/lfolwer.jpg')] h-80 bg-cover w-full bg-center flex flex-col justify-center items-center text-white">
        <h1 className="text-sm uppercase tracking-widest mt-7">ALL YOU NEED TO KNOW</h1>
        <h1 className="text-4xl text-purple-500 font-bold">
          About <span className="text-white">Eventify</span>
        </h1>
        <div className="flex justify-center items-center gap-2 pt-4">
          <Link to="/">
            <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg'>Home </h1>
          </Link>
          <Link to="/AboutUs">
           <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg' >| About Us</h1>
          </Link>
            <h1 className='text-white text-center text-md' aria-current="page" >| ImageGallery</h1>
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-4xl text-black font-semibold">
          Image <span className="text-purple-600 font-bold">Gallery</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-5 text-gray-700">
          Discover our gallery filled with unforgettable moments from past events. Each image reflects our passion for crafting beautifully organized experiences.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 text-gray-600 font-semibold mt-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full transition ${
              selectedTab === tab
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow"
                : "hover:text-purple-600"
            }`}
          >
            {tab} Gallery
          </button>
        ))}
      </div>

      {/* Full-width Gallery Grid Background */}
      <div className="w-full bg-purple-200 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-orange-500/50 flex items-center justify-center">
                    <a
                      href={item.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <PlayCircle className="w-14 h-14" />
                    </a>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;









//  <div>
//       <div>
//          <div className=" bg-[url('images/lfolwer.jpg')]  h-80  bg-cover z-0  w-full bg-center object-cover flex flex-col justify-center items-center text-white  ">
//                     <h1 className='text-sm uppercase tracking-widest mt-7'>ALL YOU NEED TO KNOW</h1>
//                      <h1 className="text-4xl text-purple-500 font-bold">
//                   About <span className="text-white font-bold text-4xl">Eventify</span>
//                 </h1>
//                      <div className='flex justify-center items-center gap-2 pt-4'>
//                        <Link to="/">
//                     <h1 className='text-white text-center hover:text-purple-500 font-semibold text-lg'>Home </h1>
//                          </Link>
                  
//                     <h1 className='text-white text-center text-md' aria-current="page" >| About Us</h1>
//                     </div>
//               </div>
        
//         <h1 className='font-bold text-4xl text-purple-600 text-center mt-16 '>Image Gallery</h1>
//         <p className=' w-[700px] text-center ml-64 mt-5'>Discover our gallery filled with unforgettable moments from past events.
// Each image reflects our passion for crafting beautifully organized experiences.</p>

      
//       </div>

      
//     </div>