import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './components/Sign-up';
import Login from './components/Log-in';
import LandingPage from './LandingPage/LandingPage';
import Home from './HomepageComponents/Home';
import ForgotPass from './components/Forgot-Password';
import CreateNewPass from './components/Create-new-password';
import BrowseProject from './HomepageComponents/BrowseProject';
import UploadProject from './HomepageComponents/UploadProject';
import Message from './HomepageComponents/Message';
import MyProfile from './HomepageComponents/MyProfile';
import { useAuth } from './AutContext';
import SideBar from './HomepageComponents/SideBar';
import Header from './components/Header';
import Notification from './HomepageComponents/Notification';

function App() {
  const { user, loading } = useAuth();

  const future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  };

  const ProtectedRoute = ({ children }) => {
    if (loading) return <p></p>; // Show loading state while fetching user
    if (!user) return <Navigate to="/index" />; // Redirect to login if no user
    return children; // Render children if authenticated
  };

  return (
    <Router future={future}>
      <div>
        <ProtectedRoute>
            <Header/>
        </ProtectedRoute>
        <main>
          <Routes>
            {/* Public Route */}
            <Route path="/index" element={<LandingPage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/create-new-pass" element={<CreateNewPass />} />
            <Route path='/sidebar' element={<SideBar/>}/>

             {/* For Authenticated user Route */}
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

              <Route path='notification' element={
                <ProtectedRoute>
                    <Notification/>
                </ProtectedRoute>
              }/>

              <Route path='message' element={
                <ProtectedRoute>
                  <Message/>
                </ProtectedRoute>
              }/>

            <Route path="/myprofile" element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>} />

              {/* Condition for user if Authenticated or not */}
              <Route path="/" element={<Navigate to={user ? "/home" : '/index'} />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
