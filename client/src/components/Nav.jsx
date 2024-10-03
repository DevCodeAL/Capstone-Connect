import { useNavigate, useLocation, Link  } from 'react-router-dom';

const Nav = ()=> {
const location = useLocation();

    return(
        <>
         <div>
            <nav>
                <ul>
                <li>
                    <Link to={'/home'} className={location.pathname === '/home' ? 'links active' : 'active'} >Home</Link>
                </li>
                <li>
                    <Link to={'/about'} className={location.pathname === '/about' ? 'links active' : 'active'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'} className={location.pathname === '/contact' ? 'links active' : 'active'}>Contact</Link>
                </li>
                </ul>
            </nav>
         </div>
           
        </>
    )
}

export default Nav;