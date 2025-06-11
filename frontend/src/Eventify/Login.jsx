import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3000/api/user/login', { email, password });

      // Save JWT token
      localStorage.setItem('token', res.data.token);

      // Save user data (without token)
      localStorage.setItem('user', JSON.stringify(res.data.user));

      navigate('/EventDetails');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[url('images/whitecandle.jpg')] inset-0 bg-white/60 bg-cover h-screen w-full bg-center object-cover mt-16">
      <div className="bg-white p-8 rounded-lg shadow-md h-[480px] w-full max-w-sm inset-10">
        <h2 className="text-2xl font-bold text-purple-500 text-center mt-5 mb-6">Login to Your Account</h2>
        <form className="space-y-4 pt-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-l from-purple-600 via-purple-400 to-purple-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
     
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account? <a href="/signup" className="text-purple-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
