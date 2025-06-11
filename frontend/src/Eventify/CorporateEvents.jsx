import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const corporateData = [
  {
    id: 1,
    title: 'Royal Wedding Night',
    description: 'A royal wedding event held with elegant decorations, floral setups, and traditional Pakistani music. The bride and groom entered under a tunnel of roses, followed by fireworks. The food featured Mughlai and Punjabi cuisine. The event was managed by top-tier planners and drew in high society guests. Every table had gold-rimmed plates and elegant lanterns. It was a memorable evening.',
    location: 'Serena Hotel, Islamabad',
    time: '7:00 PM - 12:00 AM',
    price: 'PKR 500,000',
    seating: 250,
    venue: 'Royal Banquet, Islamabad',
    image: '/images/whitejar.jpg',
  },
  {
    id: 2,
    title: 'Beach Side Mehndi',
    description: 'This mehndi ceremony was hosted at the Clifton Beach with tropical theme décor. Palm leaves, colorful drapes, and traditional music added vibrancy. Guests danced barefoot in the sand under fairy lights. The menu had seafood and local fusion dishes. Henna stalls and a photo booth made it fun for all.',
    location: 'Clifton Beach, Karachi',
    time: '5:00 PM - 11:00 PM',
    price: 'PKR 300,000',
    seating: 180,
    venue: 'Coastal Club, Karachi',
    image: '/images/night.jpg',
  },
  {
    id: 3,
    title: 'Garden Nikkah Ceremony',
    description: 'Held in a beautiful garden surrounded by blooming roses. The Nikkah ceremony was quiet and spiritual. The setup included a floral arch and pastel-colored cushions. Guests were served hi-tea with light snacks and desserts. A classical Qawwali night followed. The bride wore a subtle ivory dress. Photography was a key highlight.',
    location: 'Jilani Park, Lahore',
    time: '4:00 PM - 9:00 PM',
    price: 'PKR 200,000',
    seating: 150,
    venue: 'Flora Garden, Lahore',
    image: '/images/skylight.jpg',
  },
  {
    id: 4,
    title: 'Luxury Valima Reception',
    description: 'Hosted at a high-end banquet hall with contemporary décor and chandeliers. The menu included Chinese, Continental, and Desi items. The groom’s entry was accompanied by violin music. The bride’s dress sparkled under LED lighting. Centerpieces had fresh lilies. The event ended with a live band.',
    location: 'PC Hotel, Lahore',
    time: '8:00 PM - 12:00 AM',
    price: 'PKR 600,000',
    seating: 300,
    venue: 'Crystal Hall, Lahore',
    image: '/images/brideGroom.jpg',
  },
  {
    id: 5,
    title: 'Traditional Baraat Function',
    description: 'A colorful baraat event filled with drumbeats, bhangra dancers, and traditional rituals. The stage was decorated in red and gold. Dhol players led the groom’s entrance. Guests enjoyed karahi and BBQ. A video documentary of the couple was played. Return gifts were given to all.',
    location: 'Pearl Continental, Peshawar',
    time: '6:00 PM - 11:00 PM',
    price: 'PKR 400,000',
    seating: 220,
    venue: 'Royal Lawn, Peshawar',
    image: '/images/club.jpg',
  },
  {
    id: 6,
    title: 'Minimalist Indoor Ceremony',
    description: 'A small indoor event for close friends and family. White and blush tones defined the event style. Floral runners and scented candles were placed on every table. The food was served in buffet style. The ceremony was short and emotional. Children played freely while adults enjoyed a slideshow of memories.',
    location: 'Marriott Hotel, Islamabad',
    time: '3:00 PM - 8:00 PM',
    price: 'PKR 250,000',
    seating: 100,
    venue: 'Lotus Hall, Islamabad',
    image: '/images/partynight.jpg',
  },
];

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "khadija ali",
      rating: 5,
      message: "Amazing wedding event planning, everything was so smooth and elegant!",
    },
    {
      name: "Fatima Noor",
      rating: 4,
      message: "Decoration and catering were top-notch. Would recommend to others!",
    },
  ]);

  const [reviewForm, setReviewForm] = useState({ name: "", rating: "", message: "" });
  const [eventForm, setEventForm] = useState({ title: "", photo: null, description: "" });

  const handleReviewChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const handleEventChange = (e) => {
    const { name, value, files } = e.target;
    setEventForm({ ...eventForm, [name]: name === "photo" ? files[0] : value });
  };

  const submitReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, reviewForm]);
    setReviewForm({ name: "", rating: "", message: "" });
  };

  const submitEvent = async (e) => {
  e.preventDefault();
  const base64Image = await toBase64(eventForm.photo);
  const newEvent = {
    title: eventForm.title,
    description: eventForm.description,
    photo: base64Image,
  };

  const existing = JSON.parse(localStorage.getItem("userEvents")) || [];
  localStorage.setItem("userEvents", JSON.stringify([...existing, newEvent]));

  alert("Your event has been submitted successfully!");
  setEventForm({ title: "", photo: null, description: "" });
};


  return (
    <div className="bg-purple-100 py-10 px-4 md:px-10 ">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8 ">Client Reviews & Share Your Event</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-semibold text-purple-600">What People Say</h3>
          {reviews.map((review, idx) => (
            <div key={idx} className="border-b pb-4">
              <p className="text-md font-semibold text-gray-800">{review.name}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-600 text-sm mt-1">{review.message}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          <form onSubmit={submitReview} className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Rate Our Services</h3>
            <input type="text" name="name" placeholder="Your Name" value={reviewForm.name} onChange={handleReviewChange} required className="w-full border px-4 py-2 rounded" />
            <select name="rating" value={reviewForm.rating} onChange={handleReviewChange} required className="w-full border px-4 py-2 rounded">
              <option value="">Select Rating</option>
              <option value="5">⭐ 5 - Excellent</option>
              <option value="4">⭐ 4 - Good</option>
              <option value="3">⭐ 3 - Average</option>
              <option value="2">⭐ 2 - Poor</option>
              <option value="1">⭐ 1 - Bad</option>
            </select>
            <textarea name="message" value={reviewForm.message} onChange={handleReviewChange} placeholder="Your feedback..." required className="w-full border px-4 py-2 rounded" />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Submit Review</button>
          </form>

          <form onSubmit={submitEvent} className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Post Your Successful Event</h3>
            <input type="text" name="title" placeholder="Event Title" value={eventForm.title} onChange={handleEventChange} required className="w-full border px-4 py-2 rounded" />
            <input type="file" name="photo" accept="image/*" onChange={handleEventChange} className="w-full border px-4 py-2 rounded" />
            <textarea name="description" placeholder="Event Description" value={eventForm.description} onChange={handleEventChange} required className="w-full border px-4 py-2 rounded" rows="4" />
            <button type="submit" className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded hover:bg-green-700">Post Event</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

const CorporateEvents = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[url('/images/lfolwer.jpg')] h-80 bg-cover bg-center flex flex-col justify-center items-center text-white">
        <h1 className='text-sm uppercase tracking-widest mt-7'>ALL YOU NEED TO KNOW</h1>
        <h1 className="text-4xl text-purple-500 font-bold">
          About <span className="text-white font-bold text-4xl">Eventify</span>
        </h1>
        <div className='flex justify-center items-center gap-2 pt-4'>
            <Link to="/">
             <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg'>Home </h1>
            </Link>
            <Link to="/EventList">
              <h1 className='text-white text-center hover:text-purple-600 font-semibold text-lg' >| EventList</h1>
             </Link>
              <h1 className='text-white text-center text-md' aria-current="page" >| Wedding</h1>
        </div>
      </div>

      {/* Wedding Cards Grid */}
     <h1 className="text-4xl text-purple-500 font-bold text-center mt-16 mb-10">
          Wedding <span className="text-black font-semibold text-4xl">Gallery</span>
        </h1>
      <div className="bg-gray-50 py-14 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {corporateData.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 relative">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description.slice(0, 80)}...</p>
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>📍 {item.location}</p>
                  <p>🕒 {item.time}</p>
                  <p>💸 {item.price}</p>
                </div>
              </div>
              <button onClick={() => toggleCard(item.id)} className="text-purple-600 text-sm font-medium px-4 pb-3 hover:underline">See Details</button>
              {openCardId === item.id && (
                <div className="transition-all duration-700 bg-purple-50 p-4 border-t border-purple-200">
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-3 text-sm text-purple-800 font-medium space-y-1">
                    <p>🪑 Total Seating: {item.seating} guests</p>
                    <p>📍 Organized At: {item.venue}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Review Section */}
      <ReviewSection />
    </div>
  );
};

export default CorporateEvents;
