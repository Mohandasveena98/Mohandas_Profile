import Nav from "../Nav";
import Footer from "../Footer";
import "./css/contacts.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contct() {
  return (
    <div className="App">
      <Nav />
      <div className="contactspage">
        <div style={{ marginBottom: "50px" }}>
          <p>
            Feel free to <strong>contact</strong> with me
          </p>
        </div>
        <div>
          <i>
            <FaPhoneAlt className="icon" />
          </i>
          <p className="top">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel: 8277297188"
            >
              +91 8277297188
            </a>
          </p>
        </div>
        <div>
          <i>
            <FaMapMarkerAlt className="icon" />
          </i>
          <p className="top">Mangalore ,Karnataka, India</p>
        </div>
        <div>
          <i>
            <FaEnvelope className="icon" />
          </i>
          <p className="top">
            <a
              href="mailto: mohandasveena98@gmail.com"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              mohandasveena98@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p>
            FIND <strong>ME</strong> ON
          </p>
        </div>
        <div className="femi">
          <i>
            <Link to="https://www.facebook.com/mohan.das.50552338">
              <FaFacebook className="icon" />
            </Link>
          </i>
          <i>
            <Link to="https://github.com/Mohandasveena98">
              <FaGithub className="icon" />
            </Link>
          </i>
          <i>
            <Link to="https://www.linkedin.com/in/mohan-das-01bb8472/">
              <FaLinkedin className="icon" />
            </Link>
          </i>
          <i>
            <Link to="mailto: mohandasveena98@gmail.com">
              <FaEnvelope className="icon" />
            </Link>
          </i>
        </div>
      </div>
      <Footer place="contactplace" />
    </div>
  );
}
