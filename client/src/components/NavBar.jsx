import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Helper function for active class
  const isActive = (path) => (location.pathname === path ? 'links active' : 'links');

  return (
    <nav>
      <ul className='flex justify-evenly'>
        <li className="text-lg font-bold">
           <Link to="/" className="logo">Capstone Connect</Link>
        </li>
        <li>
          <Link to="/home" className={isActive('/home')}>Home</Link>
        </li>
        <li>
          <Link to="/browse" className={isActive('/browse')}>Browse Project</Link>
        </li>
        <li>
          <Link to="/upload-project" className={isActive('/upload-project')}>Upload Project</Link>
        </li>
        <li>
          <Link to="/feedback" className={isActive('/feedback')}>Feedback</Link>
        </li>
        <li>
          <Link to="/myprofile" className={isActive('/myprofile')}>My Profile</Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')}>About</Link>
        </li>
        <li>
          <Link to="/login" className={isActive('/login')}>Login</Link>
        </li>
        <li>
          <Link to="/sign-up" className={isActive('/sign-up')}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
