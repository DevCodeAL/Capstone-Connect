import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Login from './Log-in';
import { useAuth } from '../AutContext';
import SideBar from './SideBar';
import { FaHome } from "react-icons/fa";
import { IoBrowsers } from "react-icons/io5"
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";


const NavBar = () => {
  const location = useLocation();
  const [LoginModal, setLoginModal] = useState(false);
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
   }

   function CloseModalEvent(){
    setLoginModal(false);
    
  }

   function HandleCloseEvent(){
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

           {initialNavBar >= 575 ? <nav className='fixed top-0 p-6 left-0 w-full z-30 animate-fade-down bg-[#ffffff] shadow-xl'>
            <ul className="flex justify-around items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <li className="flex justify-start gap-2">
                <Link to="/home" className="text-slate-700">
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
                  <div className='flex flex-row gap-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
                      <div>
                            <FaHome className='text-3xl md:w-36'/>
                        </div>
                      <div>Home</div>
                  </div>
                 </Link>
               </li>
          
              <li className="text-sm sm:text-base md:text-lg">
                <Link to="/browse" className={isActive('/browse')}>
                <div className='flex flex-row gap-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <div>
                      <IoBrowsers className='text-3xl'/>
                  </div>
                  <div>Browse Project</div>
                </div>
                </Link>
              </li>

                  <li className="text-sm sm:text-base md:text-lg">
                    <Link to="/upload-project" className={isActive('/upload-project')}>
                    <div className='flex flex-row gap-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
                      <div>
                        <IoCloudUploadSharp className='text-3xl'/>
                      </div>
                      <div>Upload Project</div>
                    </div>
                    </Link>
                  </li>
{/*                   
                  <li className="text-sm sm:text-base md:text-lg">
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
                        <div>Notification</div>
                      </div>
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
             </>
            }
          <li>
          {user &&  <div className="relative inline-block">
                {/* Status Indicator */}
                <span className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-bounce">
                </span>
                <span className='absolute top-16 -left-4 text-xs text-nowrap'>{`${user?.userName.toUpperCase()}`}</span>
                {/* Clickable Picture Redirects to Profile */}
                {user?.userPicture && (
                  <Link to="/myprofile">
                    <img
                      className="w-14 h-14 rounded-full"
                      src={user.userPicture}
                      alt="User"
                    />
                  </Link>
                )}
              </div>
              }
          </li>
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
   </nav> 
  
 : <>
  <div className='flex justify-start absolute text-2xl text-green-400 font-bold p-5 z-30'>
    <div>
      <Link to="/home">LOGO</Link>
    </div>
  </div>
  <div className='flex justify-end'>
  <button onClick={openSideBar} data-collapse-toggle="navbar-dropdown" type="button" className="absolute p-2 m-4 w-10 h-10 text-sm rounded-lg focus:outline-none z-30" aria-controls="navbar-dropdown" aria-expanded="false">
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
