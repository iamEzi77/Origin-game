import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitch,
} from "react-icons/fa";
import "./header.css";
const Headertop = () => {
  return (
    <>
      <div className="header-top  d-none d-lg-block">
        <div className="container-fluid  s-container-full-padding">
          <div className="row  box-container  align-items-center">
            <div className="col-lg-6  box d-none  d-lg-block ">
              <p>Exlucive Black Friday Offer</p>
            </div>
            <div className="col-lg-6  ">
              <div className="social-box">
                <ul>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaTwitch />
                  </li>
                  <li>
                    <FaPinterest />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                </ul>
                <div className="header-mail">
                  <p>
                    <span>|</span>
                    <i>
                      <FaEnvelopeOpen />
                    </i>
                    <a href="Talhayounas283@gmail.com">talhayounas283@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headertop;
