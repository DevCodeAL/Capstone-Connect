import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './components/Sign-up';
import Login from './components/Log-in';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import About from './components/About';
import ForgotPass from './components/Forgot-Password';
import CreateNewPass from './components/Create-new-password';
import Dashboard from './components/Dashboard';
import BrowseProject from './components/BrowseProject';
import UploadProject from './components/UploadProject';
import FeedBack from './components/Feedback';
import MyProfile from './components/MyProfile';
import { useAuth } from './AutContext';
import SideBar from './components/SideBar';

function App() {
  const { user, loading } = useAuth();

  const future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  };

  const ProtectedRoute = ({ children }) => {
    if (loading) return <p>Loading...</p>; // Show loading state while fetching user
    if (!user) return <Navigate to="/index" />; // Redirect to login if no user
    return children; // Render children if authenticated
  };

  return (
    <Router future={future}>
      <div>
        <main>
          <Routes>
            {/* Public Route */}
            <Route path="/index" element={<LandingPage/>}/>
            <Route path="/about" element={<About /> }/>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/create-new-pass" element={<CreateNewPass />} />
            <Route path='/sidebar' element={<SideBar/>}/>

             {/* For Authenticated user Route */}
             <Route path="/main-home" element={
              <ProtectedRoute>
                  <Dashboard />
              </ProtectedRoute>
             } />

            <Route path='/home' element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }/>

            <Route path="/browse" element={
              <ProtectedRoute>
                  <BrowseProject />
              </ProtectedRoute>
            } />

            <Route path="/upload-project" element={
              <ProtectedRoute>
                <UploadProject />
            </ProtectedRoute>} />

            <Route path="/feedback" element={
              <ProtectedRoute>
                  <FeedBack />
              </ProtectedRoute>
              } />

            <Route path="/myprofile" element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>} />

              {/* Condition for user if Authenticated or not */}
              <Route path="/" element={<Navigate to={user ? "/main-home" : '/index'} />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
