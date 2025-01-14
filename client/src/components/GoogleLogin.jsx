import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../AutContext";
import { useNavigate } from "react-router-dom";

function GoogleSignIn() {
  const { HandleGoogleLoginSuccess } = useAuth();
  const navigate = useNavigate();

  const HandleGoogleSignIn = async (credentialResponse) => {
    console.log("Credential Response:", credentialResponse);
    try {
      const response = await HandleGoogleLoginSuccess(credentialResponse);
      console.log("Authenticated user", response);
      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.error("No authenticated user", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={HandleGoogleSignIn}
      onError={(error) => {
        console.error("Login failed", error);
      }}
    />
  );
}

export default GoogleSignIn;
