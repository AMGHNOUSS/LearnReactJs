import './Footer.css';
import { FaHeart } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <p>
        Created with <FaHeart className="icon-heart"/> by 
        <a 
          href="https://github.com/AMGHNOUSS" 
          target="_blank" 
          rel="noopener noreferrer">
          <span> AMGHNOUSS </span>
        </a>
        - Read how I created this and how you can join the challenge 
        <a 
          href="hhttps://github.com/AMGHNOUSS/LearnReactJs/tree/main/login" 
          target="_blank" 
          rel="noopener noreferrer">
          <span> Here</span> 
        </a>.
        </p>
    </div>
  );
}

export default Footer;
