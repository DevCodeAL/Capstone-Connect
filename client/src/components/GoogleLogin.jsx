import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../AutContext";


  function GoogleSignIn() {
  const {HandleGoogleLoginSuccess} = useAuth();

    return (
      <GoogleLogin
        onSuccess={HandleGoogleLoginSuccess}
        onError={() => {
          console.log("Login failed!");
        }}
      />
    );
  }

  export default GoogleSignIn;
