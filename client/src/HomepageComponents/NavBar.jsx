import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../AutContext';
import SideBar from './SideBar';
import { FaHome } from "react-icons/fa";
import { IoBrowsers } from "react-icons/io5"
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";


const NavBar = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);
  const [initialNavBar, setSideNavBar] = useState(window.innerWidth);
  const { user } = useAuth();

  useEffect(()=>{
    const handleWidthEvent = ()=> setSideNavBar(window.innerWidth);
          window.addEventListener('resize', handleWidthEvent);

        return ()=> window.removeEventListener('resize', handleWidthEvent);
  },[]);
  

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

           {initialNavBar >= 575 ? <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 p-2 w-[calc(100%-2rem)] max-w-full z-30 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-full">

            <ul className="flex justify-around items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <li className="flex justify-start gap-2">
                <Link to="/home" className="text-white">
                  Logo
                  {/* <img src="/logo/capstone-connect.jpg" alt="" /> */}
                </Link>

                <div className="flex items-center justify-center relative">
                  <svg
                    className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  {/* Input Field */}
                  <input
                    type="search"
                    id="default-search"
                    className="pl-10 pr-4 py-2 w-full max-w-xs text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </li>

              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/home" className={isActive('/home')}>
                  <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 transition-transform ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div>
                      <FaHome className="text-2xl sm:text-3xl md:text-4xl" />
                    </div>
                    {initialNavBar >= 1041 && (<div>Home</div>)}
                  </div>
                </Link>
              </li>

              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/browse" className={isActive('/browse')}>
                  <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 transition-transform ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div>
                      <IoBrowsers className="text-2xl sm:text-3xl md:text-4xl" />
                    </div>
                    {initialNavBar >= 1041 && (<div>Browse Project</div>)}
                  </div>
                </Link>
              </li>

              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/upload-project" className={isActive('/upload-project')}>
                  <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 transition-transform ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div>
                      <IoCloudUploadSharp className="text-2xl sm:text-3xl md:text-4xl" />
                    </div>
                       {initialNavBar >= 1041 && (<div>Upload Project</div>)}
                  </div>
                </Link>
              </li>

                {/*<li className="text-sm sm:text-base md:text-lg">
                    <Link to="/feedback" className={isActive('/feedback')}>
                    <div className='flex flex-row gap-2'>
                      <div>
                       <MdFeedback className='text-3xl'/>
                      </div>
                      <div>Feedback</div>
                    </div>
                    </Link>
                  </li> */}

                  <li className='text-sm sm:text-base md:text-lg'>
                      <Link to='/notification' className={isActive('/notification')}>
                      <div className='flex flex-row gap-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
                        <div>
                          <IoMdNotifications className='text-3xl'/>
                        </div>
                       {initialNavBar >= 1041 && (<div>Notification</div>)}
                      </div>
                      </Link>
                  </li>
                  <li>
                  {user &&  <div className="relative inline-block">
                        {/* Status Indicator */}
                        <span className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-bounce">
                        </span>

                        {/* Clickable Picture Redirects to Profile */}
                        {user?.userPicture && (
                          <Link to="/myprofile">
                          <img
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-full object-cover"
                            src={user.userPicture}
                            alt="User"
                          />
                          </Link>
                        )}
                      </div>
                      }
                  </li>
              </ul>
           </nav> : <>
      <div className='flex justify-start absolute text-2xl text-green-400 font-bold p-5 z-30'>
      <div>
        <Link to="/home">LOGO</Link>
      </div>
   </div>
    <div className='flex justify-end'>
    <button onClick={openSideBar} data-collapse-toggle="navbar-dropdown" type="button" className="absolute p-2 m-4 w-10 h-10 text-sm rounded-lg focus:outline-none z-30" aria-controls="navbar-dropdown" aria-expanded="false"><svg className="w-5 h-5  hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
    </button>
    </div>
 </>}
   </>
  );
};

export default NavBar;
