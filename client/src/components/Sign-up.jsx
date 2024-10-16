import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/itemServices';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../modal/modal-error-alert/submitFormLoading';

const SignUp = () => {
const [newUser, setUser] = useState({role: '', username: '', email:'',  password: '', Confirmed_Password: ''});
const [setNewItem, isSetNewItem] = useState([]);
const [error, setError] = useState({role: '', username: '', email:'',  password: '', Confirmed_Password: ''});
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

//Handle the input onchange
const onInputChange = (e)=>{
  const {name, value} = e.target;
    setUser((prev)=> ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
}

//Reminder input and password validation
const validateInput = (e)=>{
    let {name, value} = e.target;
    setError((prev)=>{
      const stateObj = {...prev, [name]: ''}
        switch(name){
          case 'role':
            if(!value){
              stateObj[name] = 'Please choose specialize.';
            }
          break;

          case 'username':
            if(!value){
              stateObj[name] = 'Please enter username.';
            }
            break;

            case 'email':
              if(!value){
                stateObj[name] = 'Please enter email.';
              }
              break;
              
            case 'password':
              if(!value){
                stateObj[name] = 'Please enter password';
              }else if(newUser.Confirmed_Password && value !== newUser.Confirmed_Password){
                  stateObj['Confirmed_Password'] = 'Password and confirm does not match.';
              } else{
                stateObj['Confirmed_Password'] = newUser.Confirmed_Password ? '' : error.Confirmed_Password;
              }
            break;

            case 'Confirmed_Password':
              if(!value){
                stateObj[name] = 'Please enter confirm password.';
              } else if(newUser.password && value !== newUser.password){
                stateObj[name] = 'Password and confirmed password does not match.';
              }
            break;

            default:
              break;
        }

        return stateObj;
    });
}

//Handle the form submit
async function HandleFormSubmit(e) {
  e.preventDefault();
  setLoading(true);
  try{
        const create_NewUser = await createUser(newUser);
        setTimeout(()=>{
          console.log('Registered Successfully!', create_NewUser.data);
          isSetNewItem([...setNewItem, create_NewUser.data]);
          setUser({role: '', username: '', email: '', password: '', Confirmed_Password: ''});
          navigate('/login');
          setLoading(false);
        }, 2000);
  } catch(err){
      console.error('Failed to register', err.message);
  }
}

  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        <form onSubmit={HandleFormSubmit}>
        {/* Choose Specialize */}
         <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="choose-expertise">
                Choose Specialize
            </label>
            <select name='role' value={newUser.role} onChange={onInputChange} onBlur={validateInput} className='w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'>
                <option value=''>Choose...</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Developer">Sofware Developer</option>
                <option value="Web Designer">Web Designer</option>
                <option value="UI/UX">UI/UX</option>
            </select>
          {error.role && <span className='text-red-500'>{error.role}</span>}
        </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              type="text"
              value={newUser.username}
              onChange={onInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your username"
              required
            />
            {error.username && <span className='text-red-500'>{error.username}</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={newUser.email}
              onChange={onInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              required
            />
            {error.email && <span className='text-red-500'>{error.email}</span>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={newUser.password}
              onChange={onInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
            {error.password && <span className='text-red-500'>{error.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="Confirmed_Password">
              Confirm Password
            </label>
            <input
              name="Confirmed_Password"
              type="password"
              value={newUser.Confirmed_Password}
              onChange={onInputChange}
              onBlur={validateInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Confirm your password"
            />
            {error.Confirmed_Password && (<span className='text-red-500'>{error.Confirmed_Password}</span>)}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            >{loading ? 'Submitting...' : 'Sign Up'}</button>
          </div>
        </form>

            {/* {Spinner Loading} */}
            {loading && <IsLoading/>}

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to={'/login'} className="text-indigo-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
   </>
  );
};

export default SignUp;
