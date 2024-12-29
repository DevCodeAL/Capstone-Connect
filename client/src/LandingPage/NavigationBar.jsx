import { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import Login from '../components/Log-in';
import MainSideBar from './SideBarNavigation';

const NavigationBar = ()=>{
  const [LoginModal, setLoginModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [initialNavBar, setSideNavBar] = useState(window.innerWidth);
  const [inColor, setColor] = useState(false);
  const [current, setCurrent] = useState('#index-sections');

  useEffect(()=>{
    const handleWidthEvent = ()=> setSideNavBar(window.innerWidth);
          window.addEventListener('resize', handleWidthEvent);

        return ()=> window.removeEventListener('resize', handleWidthEvent);
  },[]);

  useEffect(()=>{
    const handleScrollEvent = ()=> {
        if(window.scrollY > 0){
          setColor(true);
        } else{
          setColor(false);
        }
    }
    window.addEventListener('scroll', handleScrollEvent);

   return ()=> window.removeEventListener('scroll', handleScrollEvent);
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
  const handleNavigation = (id) => {
    setCurrent(`#${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  
    return(
        <>
        {initialNavBar <= 575 && (
          <div
            className={`flex flex-col fixed right-0 h-screen z-40 duration-700 ease-in-out transform ${
              sideBar ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <MainSideBar CloseSidebar={closeSidebar}/>
          </div>)}

           {initialNavBar >= 575 ? <nav className={`fixed top-0 p-4 left-0 w-full z-30 animate-fade-down ${inColor ? 'bg-gradient-to-r from-blue-500 to-purple-600' : ''}`}>
            <ul className="flex justify-evenly items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <li className="flex justify-start">
                <Link to="/index" className="text-green-400">
                  Logo
                  {/* <img src="/logo/capstone-connect.jpg" alt="" /> */}
                </Link>
              </li>
           
                <li className="text-sm sm:text-base md:text-lg">
                    <button onClick={(e)=> {
                        e.preventDefault();
                        handleNavigation('index-sections');
                    }} className={current === '#index-sections' ? 'active' : 'notActive'}>Home</button>
               </li>
         
                <li className="text-sm sm:text-base md:text-lg">
                <button onClick={(e)=> {
                    e.preventDefault();
                    handleNavigation('project-section');
                }} 
                className={current === '#project-section' ? 'active' : 'notActive'}>Explore Projects</button>
                </li>

                <li className="text-sm sm:text-base md:text-lg">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        handleNavigation('contact');
                    }}
                    className={current === '#contact' ? 'active' : 'notActive'}
                    >Contact Us</button>
                </li>
              
              <li className="text-sm sm:text-base md:text-lg">
                <button onClick={(e)=> {
                    e.preventDefault();
                    handleNavigation('about-section');
                }} 
                className={current === '#about-section' ? 'active' : 'notActive'}>About</button>
              </li>
   
           {/*Modal Login Button  */}
          <li className="bg-blue-800 hover:bg-blue-900 rounded-full text-white px-4 sm:px-6 md:px-8 lg:px-10">
              <button 
                className="text-sm sm:text-base md:text-lg"
                onClick={LogModalEvent}
              >
                Login / Sign In
              </button>
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
   </nav> : <>
  <div className='flex justify-start absolute text-2xl text-green-400 font-bold p-5 z-30'>
    <div>
      <Link to="/index">LOGO</Link>
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
    )
}

export default NavigationBar;