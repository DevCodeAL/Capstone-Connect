import { createContext, useContext, useState, useEffect } from "react";
import { getAuth_user, getUserId } from "./services/itemServices";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [token, setToken] = useState(null); // Store JWT token
  const [loading, setLoading] = useState(true);

  const AuthExpToken = (token) => {
    if (!token) return true;
    try {
      const decodeToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodeToken.exp < currentTime; 
    } catch (error) {
      console.error("Error decoding token!", error);
      return true; // If token is invalid, consider it expired
    }
  };

  // Fetch user from token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Check if the token is expired
      if (AuthExpToken(storedToken)) {
        localStorage.removeItem("token");
        localStorage.removeItem("user"); // Clear user data as well
        setUser(null); // Clear user state
        setToken(null); // Clear token state
        setLoading(false); // End loading
      } else {
        // If token is valid, set the token and user from localStorage
        setToken(storedToken);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Set user state
        }
        setLoading(false); // End loading
      }
    } else {
      setLoading(false); // No token, stop loading
    }
  }, []);

  // Fetch user data
  const fetchUser = async (authToken) => {
    try {
      const response = await getAuth_user({
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
      logout(); // Clear data if token is invalid
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (username, password) => {
    try {
      const response = await getUserId({ username, password });
      const { token, user } = response.data;

      // Store token and user details in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user)); // Persist user data as well
      setToken(token);
      setUser(user);

      return response; // Return response for further processing in Login component
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      throw error; // Throw error to handle in UI
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    localStorage.removeItem("user"); // Remove user data from storage
    setToken(null);
    setUser(null);
  };


  // Provide context to children
  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
