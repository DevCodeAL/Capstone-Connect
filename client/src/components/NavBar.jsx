import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Login from './Log-in';
import SignUp from './Sign-up';
import { useAuth } from '../AutContext';



const NavBar = () => {
  const location = useLocation();
  const [LoginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const { user } = useAuth();
  
//Login Modal Event
 function LogModalEvent(){
     setLoginModal(true);
     setSignupModal(false);
   }

   function CloseModalEvent(){
    setLoginModal(false);
    
  }

  function DirectLoginEvent(){
    setLoginModal(true);
    setSignupModal(false);
  }

   function HandleCloseEvent(){
       setLoginModal(false);
       setSignupModal(false);
   }
    //Signup Modal Event
    function SignupModalEvent(){
        setSignupModal(true);
        setLoginModal(false);
    }
      

  // Helper function for active class
  const isActive = (path) => (location.pathname === path ? 'links active' : 'links');

  return (
   <>
       <nav className='absolute top-0 p-6 left-0 w-full z-30 animate-fade-down'>
      <ul className='flex justify-evenly font-bold'>
        <li className="text-xl">
           <Link to="/home" className=" text-green-400">LOGO</Link>
        </li>
        <li>
          <Link to="/home" className={isActive('/home')}>Home</Link>
        </li>
        <li>
          <Link to="/browse" className={isActive('/browse')}>Browse Project</Link>
        </li>
       {user && 
           <>
         <li>
           <Link to="/upload-project" className={isActive('/upload-project')}>Upload Project</Link>
         </li>
         <li>
           <Link to="/feedback" className={isActive('/feedback')}>Feedback</Link>
         </li>
         <li>
           <Link to="/myprofile" className={isActive('/myprofile')}>My Profile</Link>
         </li>
           </>
       }
        <li>
          <Link to="/about" className={isActive('/about')}>About</Link>
        </li>

        {/*Modal Login Button  */}
        {!user && 
          <>
        <li className='bg-blue-800 hover:bg-blue-900 p-1 rounded-full px-7 text-white'>
           <button onClick={LogModalEvent} >Login</button>
        </li>
        {/* Modal Signup Button  */}
        <li className='bg-lime-600 hover:bg-lime-700 p-1 rounded-full px-7 text-white'>
            <button onClick={SignupModalEvent}>Signup</button>
        </li>
          </>
         }
      </ul>

      {/*Login Modal  */}
      {LoginModal && <div className="flex items-center justify-center mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">

        <span onClick={HandleCloseEvent} className="flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
        </span>
          <Login HandleEventClose={CloseModalEvent}/>
        </div>
        </div>}

        {SignupModal && 
         <div className="flex items-center justify-center min-h-screen -mt-8">
          <div className="bg-white p-8 m-8 rounded-lg shadow-lg w-full max-w-screen-sm transition ease-in duration-300">
          <span onClick={HandleCloseEvent} className="flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
        </span>
            <SignUp SignUpModal={DirectLoginEvent}/>
            </div>
        </div>}
</nav>
   </>
  );
};

export default NavBar;
