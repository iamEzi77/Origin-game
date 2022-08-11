import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Nav.css";
import Headertop from "../header-top/Headertop";
import logo from "../images/logo.png"
const Navbarcomponent = () => {
  const [showicon, setshowicon] = useState(false);
  return (
    <>
      <Headertop />
      <div className="main-bg">
        <header className="main-header  ">
          <div className="box-container">
            <h2>
              <img src={logo} alt="" srcset="" />RIGIN
            </h2>
            <div className={
              showicon ?  "mobile-link mobile-menu-link" : "box"
            }>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Pakages</a>
                </li>
                <li>
                  <a href="">Review</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">About </a>
                </li>
              </ul>
            </div>
            <div className="icons">
              <i href="">
                <FaShoppingBasket />
              </i>
              <span>0</span>
              <i className="sea">
                <FaSearch />
              </i>
              <div className="hambarguer-menu">
                <i onClick={() => setshowicon(!showicon)}><GiHamburgerMenu /></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbarcomponent;
