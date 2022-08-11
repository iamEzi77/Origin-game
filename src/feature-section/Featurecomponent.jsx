import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./featurecomponent.css"
import { FaRegBell } from "react-icons/fa"
import featureImg01 from "../images/feature-img01.jpg"
import featureicon from "../images/featured_game_icon.png"
const Featurecomponent = () => {
    return (
        <>
            <section className="feature-games-area ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title title-style-three text-center mb-20">
                                <h2>Just feature <span>GAMES</span></h2>
                                <p>Compete with 100 players on a remote island for winner takes showdown
                                    known issue where certain skin strategic</p>
                            </div>
                        </div>
                    </div>
                    <div className="row feature-active">
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-game-item">
                                <div className="feature-game-image">
                                    <img src={featureImg01} alt="" srcset="" />
                                </div>
                                <div className="feature-game-content">
                                    <h4><a href="">Just For <span>Games</span></a></h4>
                                    <div className="feature-game-meta">
                                        <i><FaRegBell /></i>
                                        <span>Playstation 5 , Xbox 1</span>
                                    </div>
                                </div>

                            </div>
                            <div className="feature-game-content feature-game-overly-content">
                                <div className="feature-game-icon">
                                    <img src={featureicon} alt="" srcset="" />
                                </div>
                                <h4><a href="">Just For <span>Games</span></a></h4>
                                <div className="feature-game-meta">
                                    <i><FaRegBell /></i>
                                    <span>Playstation 5 , Xbox 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featurecomponent
