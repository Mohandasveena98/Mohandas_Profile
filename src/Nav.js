import "./navstyles.css";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";

export default function Nav() {
  const [nav, setNav] = useState("home");
  const [menu, setMenu] = useState(true);
  const show = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setNav("home");
    } else {
      setNav(window.location.pathname);
    }
    console.log(nav);
  }, []);

  return (
    <div>
      <ul>
        <nav class={menu ? "navMenu" : "navMenu navMenuvisible"}>
          <li>
            <a
              class={nav === "home" ? "selected" : ""}
              onClick={(e) => setNav("home")}
              href="/Mohandas_Profile"
            >
              <p>Home</p>
            </a>
          </li>

          <li>
            <a
              class={nav === "/work" ? "selected" : ""}
              onClick={(e) => setNav("/work")}
              href="/work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              class={nav === "/about" ? "selected" : ""}
              onClick={(e) => setNav("/about")}
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              class={nav === "/contact" ? "selected" : ""}
              href="/contact"
              onClick={(e) => setNav("/contact")}
            >
              Contact
            </a>
          </li>
          <li></li>
        </nav>
      </ul>
      {!menu && (
        <>
          <button onClick={show} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </>
      )}
      {menu && (
        <button onClick={show} className="nav-btn">
          <FaBars />
        </button>
      )}
    </div>
  );
}
