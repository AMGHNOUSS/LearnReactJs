import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Sign_up() {
  return (
    <div classNameName="Sign_up">
      <h2>Create your free account</h2>
      <div classNameName="container" id="container">
        <div classNameName="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div classNameName="social-container">
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
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
            </div>
        </div>
      </div>
    </div>

  );
}

export default Sign_up;
