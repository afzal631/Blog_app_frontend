import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/nav_icon.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(window.innerWidth > 800 ? true : false);

  const closeHandler = () => {
    if (window.innerWidth < 800) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <nav>
      <div className="containers nav__container">
        <Link onClick={closeHandler} to="/" className="nav__logo">
          <img src={Logo} alt="navbar_logo" />
        </Link>
        {toggle && (
          <ul className="nav__menu">
            <li>
              <Link onClick={closeHandler} to="/profile">
                Md Afzal
              </Link>
            </li>
            <li>
              <Link onClick={closeHandler} to="/create">
                Create Post
              </Link>
            </li>
            <li>
              <Link onClick={closeHandler} to="/authors">
                Authors
              </Link>
            </li>
            <li>
              <Link onClick={closeHandler} to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
