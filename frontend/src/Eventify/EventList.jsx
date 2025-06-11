import React from 'react';
import { Link } from 'react-router-dom';
import { FaBirthdayCake, FaBuilding, FaGraduationCap, FaMusic } from 'react-icons/fa';
import { GiBigDiamondRing, GiPartyPopper } from 'react-icons/gi';

const categories = [
  {
    title: 'Weddings',
    description: 'Magical moments crafted with elegance and love.',
    icon: <GiBigDiamondRing className="text-purple-500 text-5xl" />,
    link: '/Weddings',
  },
  {
    title: 'Birthday Parties',
    description: 'Celebrate every year with joy, fun, and surprises.',
    icon: <FaBirthdayCake className="text-purple-500 text-5xl" />,
    link: '/Birthday',
  },
  {
    title: 'Corporate Events',
    description: 'Professional, innovative, and well-executed gatherings.',
    icon: <FaBuilding className="text-purple-500 text-5xl" />,
    link: '/corporate-events',
  },
  {
    title: 'Festivals',
    description: 'Bringing communities together with color and culture.',
    icon: <FaMusic className="text-purple-500 text-5xl" />,
    link: '/festivals',
  },
  {
    title: 'Graduation Ceremonies',
    description: 'Honoring achievements with pride and elegance.',
    icon: <FaGraduationCap className="text-purple-500 text-5xl" />,
    link: '/graduation',
  },
  {
    title: 'Private Events',
    description: 'Exclusive events tailored to your vision.',
    icon: <GiPartyPopper className="text-purple-500 text-5xl" />,
    link: '/private-events',
  },
];

const EventList = () => {
  return (
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
                
                  <h1 className='text-white text-center text-md' aria-current="page" >| Event List</h1>
                  </div>
            </div>
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Explore Our Event Categories</h2>
        <p className="text-gray-600 mb-12">Find the perfect event service tailored to your occasion.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="bg-purple-200 shadow-md rounded-2xl p-6 hover:shadow-[0_0_25px_#8245ec]  transition hover:bg-purple-50"
            >
              <div className="flex flex-col items-center hover:scale-105 text-center">
                {category.icon}
                <h3 className="text-2xl font-semibold mt-4 text-purple-700">{category.title}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default EventList;
