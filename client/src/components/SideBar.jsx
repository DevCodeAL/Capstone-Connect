import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Login from './Log-in';
import { useAuth } from '../AutContext';
import { GoogleLogin } from '@react-oauth/google';

const SideBar = ({CloseSidebar}) => {
    const location = useLocation();
    const [LoginModal, setLoginModal] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const { user } = useAuth();
    
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

      const closeSidebar = ()=>{
        CloseSidebar(setSideBar(false));
      }
  
    // Helper function for active class
    const isActive = (path) => (location.pathname === path ? 'sidelinks active' : 'sidelinks');
  

  return (
         <>  
            <nav className="bg-gradient-to-r from-blue-500 to-purple-600  text-white w-64 p-6 top-0 left-0 h-full ">
            <span onClick={closeSidebar} className="flex justify-end cursor-pointer">
                 <svg
                     className="w-6 h-6 text-white hover:animate-jump hover:text-orange-400"
                     xmlns="http://www.w3.org/2000/svg"
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
                <ul className="flex flex-col gap-4 font-bold">
                <li className="text-2xl text-green-400">
                    <Link to="/home">LOGO</Link>
                </li>
                <li>
                    <Link to="/home" className={isActive('/home')}>Home</Link>
                </li>
                <li>
                    <Link to="/browse" className={isActive('/browse')}>Browse Project</Link>
                </li>
                {user && (
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
                )}
                <li>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                </li>

                {!user && (
                    <>
                    <li className="bg-blue-800 hover:bg-blue-900 p-2 rounded-md text-white">
                        <button onClick={LogModalEvent}>Login</button>
                    </li>
                    <li>
                       <GoogleLogin/> 
                    </li>
                    </>
                )}
                </ul>
            </nav>

            {/* Modals */}
            {LoginModal && (
                <div className="flex items-center justify-center mt-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <span onClick={HandleCloseEvent} className="flex justify-end cursor-pointer">
                    <svg
                        className="w-6 h-6 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
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
                    <Login HandleEventClose={CloseModalEvent} />
                </div>
                </div>
            )}
   </>
  );
};

export default SideBar;
