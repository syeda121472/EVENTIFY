import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const birthdayPartiesData = [
  {
    id: 1,
    title: 'Kids’ Jungle Safari Party',
    description: 'A fun-filled jungle safari themed birthday with animal costumes, face painting, and a treasure hunt. The decorations featured jungle vines and balloons. The kids enjoyed a magic show and a delicious cake shaped like a lion. Party favors included safari hats and binoculars.',
    location: 'FunZone Kids Park, Islamabad',
    time: '3:00 PM - 6:00 PM',
    price: 'PKR 100,000',
    seating: 50,
    venue: 'Safari Room, Islamabad',
    image: '/images/goody.jpg',
  },
  {
    id: 2,
    title: 'Teen Glow-in-the-Dark Bash',
    description: 'A trendy neon party with glow sticks, black lights, and upbeat music. Guests danced and played games under glowing decorations. The menu included finger foods and mocktails. A DJ kept the energy high, and the photo booth captured colorful moments.',
    location: 'Club Neon, Karachi',
    time: '7:00 PM - 11:00 PM',
    price: 'PKR 150,000',
    seating: 100,
    venue: 'Main Hall, Karachi',
    image: '/images/partynight.jpg',
  },
  {
    id: 3,
    title: 'Elegant Sweet 16 Celebration',
    description: 'An elegant indoor event with pastel decor and floral centerpieces. The birthday girl wore a stunning gown and was celebrated with speeches and a choreographed dance. Guests enjoyed a formal dinner followed by a custom cake cutting ceremony.',
    location: 'Grand Ballroom, Lahore',
    time: '6:00 PM - 10:00 PM',
    price: 'PKR 250,000',
    seating: 120,
    venue: 'Ballroom, Lahore',
    image: '/images/cakes.jpg',
  },
  {
    id: 4,
    title: 'Surprise Birthday Pool Party',
    description: 'A lively pool party with floating decorations, water games, and BBQ buffet. Guests wore colorful swimwear and enjoyed live music. The birthday surprise was revealed with confetti cannons and a custom cake float.',
    location: 'Marriott Hotel Pool, Islamabad',
    time: '4:00 PM - 9:00 PM',
    price: 'PKR 200,000',
    seating: 80,
    venue: 'Poolside, Islamabad',
    image: '/images/whitecandle.jpg',
  },
  {
    id: 5,
    title: 'Retro 80s Dance Party',
    description: 'A nostalgic 80s themed party with vintage decor, disco balls, and classic hits. Attendees dressed in retro costumes and danced the night away. The event included a DJ, cocktail bar, and a photo booth with 80s props.',
    location: 'Retro Club, Peshawar',
    time: '8:00 PM - 1:00 AM',
    price: 'PKR 180,000',
    seating: 150,
    venue: 'Main Lounge, Peshawar',
    image: '/images/club.jpg',
  },
  {
    id: 6,
    title: 'Cozy Family Birthday Dinner',
    description: 'A warm and intimate dinner with close family and friends. The setting was cozy with candle lights and personalized decorations. The menu featured comfort food and a homemade birthday cake. The evening ended with a slideshow of memories.',
    location: 'Pearl Continental, Lahore',
    time: '7:00 PM - 10:00 PM',
    price: 'PKR 120,000',
    seating: 40,
    venue: 'Private Dining Room, Lahore',
    image: '/images/dining.jpg',
  },
];

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Sara Khan",
      rating: 5,
      message: "The birthday party was amazing! Kids had so much fun and everything was perfectly organized.",
    },
    {
      name: "hadia zafar",
      rating: 4,
      message: "Great decorations and food. The theme was exactly what we wanted for our daughter’s birthday.",
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

  const submitEvent = (e) => {
    e.preventDefault();
    alert("Your birthday party event has been submitted successfully!");
    setEventForm({ title: "", photo: null, description: "" });
  };

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 mt-16">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Client Reviews & Share Your Birthday Party</h2>
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
            <h3 className="text-lg font-semibold text-purple-600">Rate Our Birthday Party Services</h3>
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
            <h3 className="text-lg font-semibold text-purple-600">Post Your Successful Birthday Party</h3>
            <input type="text" name="title" placeholder="Event Title" value={eventForm.title} onChange={handleEventChange} required className="w-full border px-4 py-2 rounded" />
            <input type="file" name="photo" accept="image/*" onChange={handleEventChange} className="w-full border px-4 py-2 rounded" />
            <textarea name="description" placeholder="Event Description" value={eventForm.description} onChange={handleEventChange} required className="w-full border px-4 py-2 rounded" rows="4" />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Post Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const BirthdayParties = () => {
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
          <Link to="/"><h1 className='text-white hover:text-purple-500 font-semibold text-lg'>Home</h1></Link>
          <h1 className='text-white text-md'>| Birthday Parties</h1>
        </div>
      </div>

      {/* Birthday Party Cards Grid */}
       <h1 className="text-4xl text-purple-500 font-bold text-center mt-16 mb-10">
          Birthday <span className="text-black font-semibold text-4xl">Gallery</span>
        </h1>
      <div className="bg-purple-100 py-14 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {birthdayPartiesData.map((item) => (
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

export default BirthdayParties;
