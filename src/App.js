import "./styles.css";
import Tilt from "react-parallax-tilt";
import myImg from "./myAvatar.svg";
import Nav from "./Nav";
//import Typewriter from "typewriter-effect";
import Home from "./Home";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [nav, setNav] = useState("home");

  return (
    <div className="App">
      <Nav nav={nav} setNav={setNav} />
      <Home />
      <Avatar />
      <Footer place="footer" />
    </div>
  );
}

function Avatar() {
  return (
    <>
      <div className="avatar">
        <Tilt>
          <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
        <p>Download my Resume from:</p>
        <div className="res">
          <button className="resume">
            <a href="https://drive.google.com/file/d/1McLli2eijmVPriKuQG_KcHZMkNYDI722/view?usp=drive_link"
              target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
