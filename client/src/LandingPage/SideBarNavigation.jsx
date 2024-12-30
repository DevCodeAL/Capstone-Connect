import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../components/GoogleLogin';

const MainSideBar = ({CloseSidebar}) => {
    const [sideBar, setSideBar] = useState(false);
    const [current, setCurrent] = useState('#index-sections');

      const closeSidebar = ()=>{
        CloseSidebar(setSideBar(false));
      }
  
    // Helper function for active class
    const handleNavigation = (id)=>{
        setCurrent(`#${id}`);
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({scroll: 'smooth'});
        }
    }

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
                    <Link to="/index">LOGO</Link>
                </li>

                <li>
                    <button onClick={(e)=> {
                        e.preventDefault();
                        handleNavigation('index-sections');
                    }}
                    className={current === '#index-sections' ? 'active' : 'setActive'}
                    >Home</button>
                </li>
                <li>
                   <button onClick={(e)=> {
                    e.preventDefault();
                    handleNavigation('project-section');
                   }}
                   className={current === '#project-section' ? 'active' : 'setActive'}
                   >Explore Project</button>
                </li>
                <li>
                    <button onClick={(e)=> {
                        e.preventDefault();
                        handleNavigation('contact');
                    }}
                    className={current === '#contact' ? 'active' : 'setActive'}
                    >Contact Us</button>
                </li>
                <li>
                    <button onClick={(e)=> {
                        e.preventDefault();
                        handleNavigation('about-section');
                    }}
                    className={current === '#about-section' ? 'active' : 'setActive'}
                    >About</button>
                </li>
                <li>
                    <GoogleSignIn/>
                </li>
            </ul>
       </nav>
   </>
  );
};

export default MainSideBar;
