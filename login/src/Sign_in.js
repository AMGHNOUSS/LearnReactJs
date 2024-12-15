import './Sign_in.css';
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Sign_in() {
  return (
    <div className="Sign_in">
      <h2>Welcome Back!</h2>
      <div className="container">
        <div className="sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a
                href="hhttps://facebook.com"
                className="social"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a
                href="https://www.google.com/"
                className="social"
                target="_blank"
                rel="noopener noreferrer">
                <FaGooglePlus />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="social"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a
                href="https://"
                className="forgot"
                target="_blank"
                rel="noopener noreferrer">
                Forgot your password?
              </a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">        
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>

  );
}

export default Sign_in;
