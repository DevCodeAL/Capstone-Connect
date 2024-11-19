import React, { useEffect } from "react";
import { useAuth } from "../AutContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to '/' if no user is logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/'); // Redirect when not authenticated
    }
  }, [user, loading, navigate]);

  // Show a loading spinner or message while determining auth state
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user ? (
        <div className="flex flex-col justify-center items-center text-2xl font-bold">
          <h1>Welcome, {user?.userName}</h1>
          <p>Email: {user?.userEmail}</p>
          <button
            onClick={logout}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
