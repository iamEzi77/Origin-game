import React, { useEffect, useState } from 'react'
import "./Gamecomponent.css"
import Slider from 'react-slick'
import { Side_slider } from './Side_slider'
import { Gamesdata } from './Gamesdata'
const Gamecomponent = () => {

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1, slider2;


    useEffect(function () {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])


    return (
        <>
            <section className="released-games-area gray-bg pt-115 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title title-style-three text-center mb-20">
                                <h2>released <span>GAMES</span></h2>
                                <p>Compete with 100 players on a remote island for winner takes showdown
                                    known issue where certain skin strategic</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-12">
                            <Slider className="released-game-active"
                                asNavFor={nav2}
                                ref={slider => (slider1 = slider)}
                                arrows={false}
                            >
                                {Gamesdata.map((data) => {
                                    return (
                                        <>
                                            <div className="released-game-carousel">
                                                <div className="released-game-item">
                                                    <div className="released-game-item-bg" />
                                                    <div className="released-game-img">
                                                        <img src={data.img} key={data.id} alt="" />
                                                    </div>
                                                    <div className="released-game-content">
                                                        <div className="released-game-rating">
                                                            <h5>Rating :</h5>
                                                            <div className="released-rating">
                                                                <i>{data.star}</i>
                                                                <i>{data.star}</i>
                                                                <i>{data.star}</i>
                                                                <i>{data.star}</i>
                                                                <i>{data.star}</i>
                                                            </div>
                                                        </div>
                                                        <h4>{data.name1} <span>{data.name2}</span></h4>
                                                        <div className="released-game-list">
                                                            <ul>
                                                                <li><span>Category :</span>Offline</li>
                                                                <li><span>Game Type :</span>Compete 100 players</li>
                                                                <li><span>Controller :</span>Playstation 5 , Xbox , PS4</li>
                                                            </ul>
                                                        </div>
                                                        <p>{data.detail}</p>
                                                        <a href="" className="btn btn-style-two">buy now</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </Slider>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <Slider className="released-game-nav"
                                asNavFor={nav1}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                ref={slider => (slider2 = slider)} slidesToShow={4} vertical={true} arrows={false} >
                                {Side_slider.map((data) => {
                                    return (
                                        <div className="released-game-nav-item">
                                            <img src={data.img} key={data.id} alt="" />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gamecomponent
