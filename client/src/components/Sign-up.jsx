import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/itemServices';
import IsLoading from '../modal/modal-error-alert/submitFormLoading';
import SignAlert from '../modal/modal-error-alert/sign-alert';
import { useAuth } from '../AutContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { user } = useAuth(); // Fetch Google user info after sign-in
  const navigate = useNavigate();
  const [newUser, setUser] = useState({
    role: '',
    name: '',
    username: '',
    email: '',
    password: '',
    Confirmed_Password: '',
    picture: '',
  });

  const [error, setError] = useState({
    role: '',
    name: '',
    username: '',
    email: '',
    password: '',
    Confirmed_Password: '',
  });
  
  const [alertMessage, setAlertMessage] = useState('');
  const [setModal, setModalView] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto-fill email if user signs in with Google
  useEffect(() => {
    if (user?.userEmail || user?.userName || user?.userPicture) {
      setUser((prev) => ({ ...prev, name: user.userName,  email: user.userEmail , picture: user.userPicture}));
    }
  }, [user]);

  // Handle input change
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  // Validate input fields
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };
      switch (name) {
        case 'role':
          if (!value) {
            stateObj[name] = 'Please choose a role.';
          }
          break;
        case 'username':
          if (!value) {
            stateObj[name] = 'Please enter a username.';
          }
          break;
        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter a password.';
          } else if (newUser.Confirmed_Password && value !== newUser.Confirmed_Password) {
            stateObj['Confirmed_Password'] = 'Passwords do not match.';
          } else {
            stateObj['Confirmed_Password'] = newUser.Confirmed_Password ? '' : error.Confirmed_Password;
          }
          break;
        case 'Confirmed_Password':
          if (!value) {
            stateObj[name] = 'Please confirm your password.';
          } else if (newUser.password && value !== newUser.password) {
            stateObj[name] = 'Passwords do not match.';
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Ensure user ID is available
    if (!user?.userId) {
      setAlertMessage('Invalid user session. Please sign in again.');
      setModalView(true);
      return;
    }

    try {
      setLoading(true);
      const response = await createUser(newUser, user.userId); // Call API with Google user ID
      console.log('Registered Successfully!', response.data);

      setUser({
        role: '',
        username: '',
        email: user.userEmail, // Keep email populated
        password: '',
        Confirmed_Password: '',
      });
      setAlertMessage('Registration completed successfully!');
      setModalView(true);
      setTimeout(()=>{
        navigate('/browse');
      }, 2000)
    } catch (err) {
      console.error('Error registering user:', err.message);
      setAlertMessage(err.response?.data?.message || 'Something went wrong!');
      setModalView(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {user && 
        <div className="min-h-screen relative z-30 flex items-center justify-center bg-blue-500 p-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"> {/* Increased max width */}
            <div className="flex items-center gap-5 flex-wrap text-2xl font-bold mb-6 text-gray-800 text-center">
              <div>
                 <img src={newUser.picture} className='rounded-full' alt="userPicture" />
              </div>
             <div>
             <h2>Connect with your Google Account</h2>
             </div>
            </div>

          <form onSubmit={handleFormSubmit}>
            {/* Input Fields Grid */}
            <div className="grid grid-cols-6 gap-6"> {/* Increased columns and gaps */}
              {/* Role Selection */}
              <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="role">
                  Choose Role
                </label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={onInputChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Choose...</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
                {error.role && <span className="text-red-500">{error.role}</span>}
              </div>
      
              {/* Username */}
              <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  value={newUser.username}
                  onChange={onInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your username"
                  required
                />
                {error.username && <span className="text-red-500">{error.username}</span>}
              </div>
      
               {/* Full name */}
               <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                 Name
                </label>
                <input
                  name="username"
                  type="text"
                  value={newUser.name}
                  readOnly
                  onChange={onInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  placeholder="Enter your username"
                  required
                />
              </div>
      
      
              {/* Email */}
              <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={newUser.email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  required
                />
              </div>
      
              {/* Password */}
              <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={newUser.password}
                  onChange={onInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                {error.password && <span className="text-red-500">{error.password}</span>}
              </div>
      
              {/* Confirm Password */}
              <div className="col-span-6 sm:col-span-3"> {/* Spans 3 columns */}
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Confirmed_Password">
                  Confirm Password
                </label>
                <input
                  name="Confirmed_Password"
                  type="password"
                  value={newUser.Confirmed_Password}
                  onChange={onInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {error.Confirmed_Password && <span className="text-red-500">{error.Confirmed_Password}</span>}
              </div>
            </div>
      
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                {loading ? 'Submitting...' : 'Sign Up'}
              </button>
            </div>
          </form>
      
          {loading && <IsLoading />}
          {setModal && <SignAlert onClose={() => setModalView(false)}>{alertMessage}</SignAlert>}
      
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to={'/login'} className="text-indigo-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      }
    </>
  );
};

export default SignUp;
