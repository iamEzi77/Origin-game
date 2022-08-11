import React from 'react'
import bg1 from "../images/four_slider_img01.png";
import Navbarcomponent from '../Navbar/Navbarcomponent'
import "./HomeComponent.css"
import "bootstrap/dist/css/bootstrap.min.css"
const HomeComponent = () => {
  return (
    <>
      <Navbarcomponent />
      <div className="bgimage">
        <div className="slider-top">
          <div className="containter header">
            <div className="row box-container gx-0">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 box">
                <div className="slider-content">
                  <h6>World Gaming</h6>
                  <h3>Welcome <span>To</span> <span>New</span> Arena </h3>
                  <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                  <button className='slider-btn'>Read Me</button>
                </div>
              </div>
              <div className="col-lg-6 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block home-image "> 
                <img src={bg1} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeComponent;
