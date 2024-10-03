import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/itemServices';

const SignUp = () => {
const [newUser, setUser] = useState({role: '', username: '', email:'',  password: '', confirmedPassword: ''});
const [setNewItem, isSetNewItem] = useState([]);
const [error, setError] = useState(null);

async function HandleFormSubmit(e) {
  e.preventDefault();
  try{
        const create_NewUser = await createUser(newUser);
        console.log('Registered Successfully!', create_NewUser.data);
        isSetNewItem([...setNewItem, create_NewUser.data]);
        setUser({role: '', username: '', email: '', password: '', confirmedPassword: ''});
  }catch(err){
      console.error('Failed to register', err.message);
  }
}


  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>

        <form onSubmit={HandleFormSubmit}>
        {/* Choose Specialize     */}
         <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="choose-expertise">
                Choose Specialize
            </label>
            <select value={newUser.role} onChange={(e)=> setUser({...newUser, role: e.target.value})} className='w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'>
                <option value=''>Choose...</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Developer">Sofware Developer</option>
                <option value="Web Design">Web Design</option>
                <option value="UI/UX">UI/UX</option>
            </select>
        </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={newUser.username}
              onChange={(e)=> setUser({...newUser, username: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={newUser.email}
              onChange={(e)=> setUser({...newUser, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              required
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
              value={newUser.password}
              onChange={(e)=> setUser({...newUser, password: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={newUser.confirmedPassword}
              onChange={(e)=> setUser({...newUser, confirmedPassword: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to={'/login'} className="text-indigo-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
   </>
  );
};

export default SignUp;
