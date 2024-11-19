import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginAlert from '../modal/modal-error-alert/login-alert';
import LoginLoading from '../modal/modal-error-alert/loginLoading';
import { useAuth } from '../AutContext';

const Login = ()=>{
  const { login } = useAuth();
  const [isUser, setUser] = useState({username: '', password: ''});
  const [isError, setError] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);
  const [isModalView, setModalView] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  //This function pass in modal to refresh a login page and clear all errors
  const onCloseModal = ()=>{
    window.location.reload();
  }

async function handleValidationForm(e) {
e.preventDefault();
  //This logic for login form verification 
  const {username, password} = isUser;
  try{
        const response = await login(username, password);
        console.log('Get user', response.data);
        setLoading(true);
        setTimeout(()=>{
         //Clear input fields after login
        setUser({username: '', password: ''});
        navigate('/');
        },2000);

  } catch(err){
        setAlertMessage(err.response.data.message);
        setModalView(true);
        //Clear input fields after login
        setUser({username: '', password: ''});
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
     <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
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
            {/* This modal is for alert if correct username or password */}
            {isModalView && <LoginAlert onClose={onCloseModal} children={alertMessage}/>}
            {loading && <LoginLoading/>}

        <p className="text-center text-gray-600 mt-4">
            <Link to={'/forgot-pass'} className="text-indigo-500 hover:underline">Forgot Password?</Link>
        </p>

        <p className="text-center text-gray-600 mt-4">
          Dont have an account? <Link to={'/sign-up'} className="text-indigo-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
   </>
  );
};


export default Login;