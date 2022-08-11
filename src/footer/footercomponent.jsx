import React from 'react'
import "./footercomponent.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaHeadphonesAlt, FaFacebookSquare, FaSteamSquare, FaEnvelopeOpen, FaLinkedin, FaRocket } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"
import paymentImage from "../images/card_img.png"
import logo from "../images/logo.png"
import footerImg from "../images/footer_fire.png"
const Footercomponent = () => {
    return (
        <>
            <footer id='footer-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="newsletter-wrap">
                                <div className="newsletter-title">
                                    <h2>Our <span>Newsletter</span></h2>
                                </div>
                                <div className="newsletter-form">
                                    <form>
                                        <div className="newsletter-form-gap">
                                            <i className='email-icon'><FaEnvelope /></i>
                                            <input type="email" placeholder='Enter Your Email...' />
                                        </div>
                                        <button>SUBSCRIBE  <i className='plan-icon'><FaPaperPlane /></i>  </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget ">
                                <div className="footer-logo ">
                                    <a href="/"><img src={logo} alt="" />rigin</a>
                                </div>
                                <div className="footer-text">
                                    <p>Games marketplace that gives you everything at low price.</p>
                                    <div className="footer-contact">
                                        <ul>
                                            <li><i><FaMapMarkerAlt /></i>  <span>Address : </span>PO Box W75 Street
                                                lan West new queens</li>
                                            <li><i><FaHeadphonesAlt /></i>  <span>Phone : </span>+24 1245 654 235</li>
                                            <li><i><FaEnvelopeOpen /></i>   <span>Email : </span>info@exemple.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-6">
                            <div className="footer-widget ">
                                <div className="fw-title ">
                                    <h5>Products</h5>
                                </div>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="/#">Graphics (26)</a></li>
                                        <li><a href="/#">Backgrounds (11)</a></li>
                                        <li><a href="/#">Fonts (9)</a></li>
                                        <li><a href="/#">Music (3)</a></li>
                                        <li><a href="/#">Photography (3)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-6">
                            <div className="footer-widget ">
                                <div className="fw-title ">
                                    <h5>Need Help?</h5>
                                </div>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="/#">Terms &amp; Conditions</a></li>
                                        <li><a href="/#">Privacy Policy</a></li>
                                        <li><a href="/#">Refund Policy</a></li>
                                        <li><a href="/#">Affiliate</a></li>
                                        <li><a href="/#">FAQUse Cases</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="fw-title ">
                                    <h5>Follow us</h5>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="/#"><i><FaFacebookSquare /></i></a></li>
                                        <li><a href="/#"><i><SiEpicgames /></i></a></li>
                                        <li><a href="/#"><i><FaSteamSquare /></i></a></li>
                                        <li><a href="/#"><i ><FaLinkedin /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h5>Newsletter Sign Up</h5>
                                </div>
                                <div className="footer-newsletter">
                                    <form >
                                        <input type="text" placeholder="Enter your email" />
                                        <button><i><FaRocket /></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-fire"><img src={footerImg} alt="" /></div>
                <div className="footer-fire footer-fire-right"><img src={footerImg} alt="" /></div>



            </footer>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 text-start">
                            <div className="copyright-text">
                                <p>Copyright © 2022 <a href="/#"><img src={logo} alt="" srcset="" />rigin</a>  All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-none d-md-block">
                            <div className="payment-method-img text-end">
                                <img src={paymentImage} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footercomponent
