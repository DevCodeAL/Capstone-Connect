import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Login from './Log-in';
import SignUp from './Sign-up';
import { useAuth } from '../AutContext';
import SideBar from './SideBar';



const NavBar = () => {
  const location = useLocation();
  const [LoginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [initialNavBar, setSideNavBar] = useState(window.innerWidth);
  const { user } = useAuth();

  useEffect(()=>{
    const handleWidthEvent = ()=> setSideNavBar(window.innerWidth);
          window.addEventListener('resize', handleWidthEvent);

        return ()=> window.removeEventListener('resize', handleWidthEvent);
  },[]);
  
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


    const openSideBar = ()=>{
      setSideBar(true);
    }

    const closeSidebar = ()=>{
      setSideBar(false);
    }
    

  // Helper function for active class
  const isActive = (path) => (location.pathname === path ? 'links active' : 'links');

  return (
   <>
        {/* Close/Open function SideBar for Mobile Screen */}
        {initialNavBar <= 575 && (
          <div
            className={`flex flex-col absolute right-0 h-screen z-40 duration-700 ease-in-out transform ${
              sideBar ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <SideBar CloseSidebar={closeSidebar} />
          </div>)}

           {initialNavBar >= 575 ? <nav className='absolute top-0 p-6 left-0 w-full z-30 animate-fade-down'>
            <ul className="flex justify-evenly items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <li className="flex justify-start">
                <Link to="/home" className="text-green-400">
                  Logo
                  {/* <img src="/logo/capstone-connect.jpg" alt="" /> */}
                </Link>
              </li>
              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/home" className={isActive('/home')}>
                  Home
                </Link>
              </li>
              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/browse" className={isActive('/browse')}>
                  Browse Project
                </Link>
              </li>
              {user && (
                <>
                  <li className="text-sm sm:text-base md:text-lg">
                    <Link to="/upload-project" className={isActive('/upload-project')}>
                      Upload Project
                    </Link>
                  </li>
                  <li className="text-sm sm:text-base md:text-lg">
                    <Link to="/feedback" className={isActive('/feedback')}>
                      Feedback
                    </Link>
                  </li>
                  <li className="text-sm sm:text-base md:text-lg">
                    <Link to="/myprofile" className={isActive('/myprofile')}>
                      My Profile
                    </Link>
                  </li>
                </>
              )}
              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/about" className={isActive('/about')}>
                  About
                </Link>
              </li>

   
           {/*Modal Login Button  */}
           {!user && 
             <>
          <li className="bg-blue-800 hover:bg-blue-900 rounded-full text-white px-4 sm:px-6 md:px-8 lg:px-10">
              <button 
                className="text-sm sm:text-base md:text-lg"
                onClick={LogModalEvent}
              >
                Login
              </button>
            </li>
            {/* Modal Signup Button */}
            <li className="bg-lime-600 hover:bg-lime-700  rounded-full text-white px-4 sm:px-6 md:px-8 lg:px-10">
              <button 
                className="text-sm sm:text-base md:text-lg"
                onClick={SignupModalEvent}
              >
                Signup
              </button>
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
                       trstrokelinejoin="round"
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
                       trstrokelinejoin="round"
                       strokeWidth="2"
                       d="M6 18 17.94 6M18 18 6.06 6"
                     />
                   </svg>
           </span>
               <SignUp SignUpModal={DirectLoginEvent}/>
               </div>
           </div>}
   </nav> 
  
 : <>
  <div className='flex justify-start absolute text-2xl text-green-400 font-bold p-5 z-30'>
    <div>
      <Link to="/home">LOGO</Link>
    </div>
  </div>
  <div className='flex justify-end'>
  <button onClick={openSideBar} data-collapse-toggle="navbar-dropdown" type="button" className="absolute p-2 m-4 w-10 h-10 text-sm text-white rounded-lg focus:outline-none z-30" aria-controls="navbar-dropdown" aria-expanded="false">
        <svg className="w-5 h-5  hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
  </button>
  </div>
 </>}
   </>
  );
};

export default NavBar;
