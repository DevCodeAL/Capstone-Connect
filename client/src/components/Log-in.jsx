import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ()=>{
  const [isUsername, setUsername] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isError, setError] = useState(null);

  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

        <form>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={isUsername}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={isPassword}
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
            <Link to={'/forgot-pass'} className="text-indigo-500 hover:underline">Forgot Password?</Link>
        </p>

        <p className="text-center text-gray-600 mt-4">
          Dont have an account? <Link to={'/'} className="text-indigo-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
   </>
  );
};


export default Login;