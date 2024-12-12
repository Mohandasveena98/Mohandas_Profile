import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMail
} from "react-icons/fa";
//import { FaHeart } from "react-icons/fa";
//import {FontAwesomeIcon} from "font-awesome";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer(params) {
  return (
    <div className={params.place}>
      <footer>
        <p class="para1">Designed and Developed by M_Mohandas</p>

        <p class="para2">Copyright © 2023</p>

        <p class="para3">
          <i>
            <Link to="https://www.facebook.com/mohan.das.50552338">
              <FaFacebook style={{ color: "#a020f0" }} />
            </Link>
          </i>
          <i>
            <Link to="https://github.com/Mohandasveena98">
              <FaGithub style={{ color: "#a020f0" }} />
            </Link>
          </i>
          <i>
            <Link to="https://www.linkedin.com/in/mohan-das-01bb8472/">
              <FaLinkedin style={{ color: "#a020f0" }} />
            </Link>
          </i>
          <i>
            <Link to="mailto: mohandasveena98@gmail.com">
              <FaEnvelope style={{ color: "#a020f0" }} />
            </Link>
          </i>
        </p>
      </footer>
    </div>
  );
}
