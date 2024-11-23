import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/itemServices';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../modal/modal-error-alert/submitFormLoading';
import SignAlert from '../modal/modal-error-alert/sign-alert';

const SignUp = ({SignUpModal}) => {
const [newUser, setUser] = useState({role: '', username: '', email:'',  password: '', Confirmed_Password: ''});
const [setNewItem, isSetNewItem] = useState([]);
const [error, setError] = useState({role: '', username: '', email:'',  password: '', Confirmed_Password: ''});
const [alertMessage, setAlertMessage] = useState('');
const [setModal, setModalView] = useState(false);
const [loading, setLoading] = useState(false);
const [close, setOpen] = useState(false);
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

const onClose = ()=>{
    window.location.reload();
}

//Handle the form submit
async function HandleFormSubmit(e) {
  e.preventDefault();
  try{
        const response = await createUser(newUser);
        console.log('Registered Successfully!', response.data);
        isSetNewItem([...setNewItem, response.data]);
        setLoading(true);
        setTimeout(()=>{
          setUser({role: '', username: '', email: '', password: '', Confirmed_Password: ''});
          navigate('/login');
          SignUpModal(setOpen(true));
        }, 2000);
  } catch(err){
      setAlertMessage(err.response.data.message);
      setModalView(true);
  }
}

  return (
   <>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        <form className='flex flex-wrap items-center justify-center' onSubmit={HandleFormSubmit}>
        {/* Choose Specialize */}
         <div className='mx-6 my-2 w-60'>
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
          <div className="mx-6 my-2 w-60">
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
          <div className="mx-6  my-2 w-60">
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
          <div className="mx-6  my-2 w-60">
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
          <div className="mx-6 my-2 w-60">
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
          <div className="mt-8 mx-6 w-60">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            >{loading ? 'Submitting...' : 'Sign Up'}</button>
          </div>
        </form>

            {/* {Spinner Loading} */}
            {loading && <IsLoading/>}
            {setModal && <SignAlert onClose={onClose} children={alertMessage}/>}

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to={'/login'} className="text-indigo-500 hover:underline">Log In</Link>
        </p>
   </>
  );
};

export default SignUp;
