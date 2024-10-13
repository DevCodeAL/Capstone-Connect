import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserId } from '../services/itemServices';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
  const [isUser, setUser] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState({username: '', password: ''});
  const navigate = useNavigate();

async function handleValidationForm(e) {
e.preventDefault();
  setLoading(true);
  //This logic is for creating a login form verification
  try{
        const response = await getUserId(isUser);
        setTimeout(()=>{
          console.log('Get user', response.data);
         //Clear input fields after login
        setUser({username: '', password: ''});
        navigate('/home');
        setLoading(false);
        },2000);
  }catch(err){
        console.error('Failed to get userId:', err.message);
  }
}
  
  //Handle input change
  const handleInputChange = (e)=>{
      const {name, value} = e.target;
      setUser((prev)=>({
        ...prev,
          [name]: value
      }));

      validateInput(e);
  }

  const validateInput = (e)=>{
      const {name, value} = e.target;
      setError((prev)=>{
       let stateObj = {...prev, [name]: ''}
        switch(name){
          case 'username':
            if(!value){
              stateObj[name] = 'Please enter a username.';
            }
            break;

            case 'password':
              if(!value){
                stateObj[name] = 'Please enter a password.';
              }
              break;

              default:
                break;
        }

        return stateObj;
      })
  }

  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

        <form onSubmit={handleValidationForm}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              type="text"
              value={isUser.username}
              onChange={handleInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your username"
              required
            />
            {isError.username && <span className='text-red-500'>{isError.username}</span>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={isUser.password}
              onChange={handleInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
            {isError.password && <span className='text-red-500'>{isError.password}</span>}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            >{loading ? 'Logging...' : 'Login'}</button>
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