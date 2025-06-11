import { useState } from 'react';

const Blog = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      date: '2023-05-15',
      content: 'The team at EventPro made our wedding absolutely magical! Every detail was perfect and they handled everything seamlessly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      date: '2023-04-22',
      content: 'Our corporate gala was a huge success thanks to EventPro. Their attention to detail and creative ideas were impressive.',
      rating: 4
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    rating: 5
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.content.trim()) newErrors.content = 'Story is required';
    if (formData.rating < 1 || formData.rating > 5) newErrors.rating = 'Rating must be between 1-5';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newStory = {
        id: Date.now(),
        name: formData.name,
        date: new Date().toISOString().split('T')[0],
        content: formData.content,
        rating: parseInt(formData.rating)
      };
      
      setStories(prev => [newStory, ...prev]);
      setFormData({
        name: '',
        email: '',
        content: '',
        rating: 5
      });
      alert('Thank you for sharing your story!');
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12 ">
          <h1 className='text-4xl font-semibold mt-12 ml-20 mb-7'>Customer     <span className='text-4xl font-bold text-purple-600'>Stories</span></h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Read what our clients say about their experiences with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Story Submission Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-purple-600 mb-4">Share Your Story</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email (won't be published)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Your Rating (1-5)
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.rating ? 'border-red-500' : ''}`}
                >
                  {[5, 4, 3, 2, 1].map(num => (
                    <option key={num} value={num}>{num} ★</option>
                  ))}
                </select>
                {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Your Story
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.content ? 'border-red-500' : ''}`}
                />
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-pink-600 to-purple-500  focus:outline-none "
                >
                  Submit Your Story
                </button>
              </div>
            </form>
          </div>

          {/* Stories List */}
          <div className="space-y-6">
            {stories.length === 0 ? (
              <p className="text-gray-500">No stories yet. Be the first to share!</p>
            ) : (
              stories.map(story => (
                <div key={story.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 rounded-full p-3">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h4 className="text-lg font-medium text-gray-900">{story.name}</h4>
                        <span className="ml-2 text-yellow-500">
                          {'★'.repeat(story.rating)}{'☆'.repeat(5 - story.rating)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="mt-2 text-gray-600">{story.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;


// import React, { useEffect, useState } from "react";

// const defaultPosts = [
//   {
//     id: 1,
//     title: "Top 10 Event Planning Tips for 2025",
//     date: "June 5, 2025",
//     excerpt:
//       "Discover the essential tips and tricks to make your events unforgettable in 2025.",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "How to Choose the Perfect Venue",
//     date: "May 22, 2025",
//     excerpt:
//       "A complete guide to selecting the ideal venue that suits your event needs.",
//     image:
//       "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Innovative Event Technologies",
//     date: "April 15, 2025",
//     excerpt:
//       "Learn about the latest technologies transforming event management and guest experience.",
//     image:
//       "https://images.unsplash.com/photo-1515165562835-cb7c96bb8f1e?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function Blog() {
//   const [posts, setPosts] = useState(defaultPosts);

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("userEvents")) || [];
//     const formatted = storedEvents.map((e, i) => ({
//       id: 100 + i,
//       title: e.title,
//       date: new Date().toLocaleDateString(),
//       excerpt: e.description,
//       image: e.photo,
//     }));
//     setPosts([...defaultPosts, ...formatted]);
//   }, []);

//   return (
//     <section className="bg-gray-50 py-12 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 mt-20">
//           From Our Blog
//         </h2>

//         <div className="grid gap-8 md:grid-cols-3">
//           {posts.map(({ id, title, date, excerpt, image }) => (
//             <article
//               key={id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <time
//                   dateTime={date}
//                   className="text-sm text-gray-500 block mb-2"
//                 >
//                   {date}
//                 </time>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 cursor-pointer">
//                   {title}
//                 </h3>
//                 <p className="text-gray-700">{excerpt}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
