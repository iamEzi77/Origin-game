import React from 'react'
import "./Product.css"
import "./slick.css"
import { ProductData } from './ProductData'
import Slider from 'react-slick'
// import {BiLeftArrow , BiRightArrow} from "react-icons/bi"

const Product = () => {
    const settings = {

        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        arrows: false,
        // prevArrow: <button type="button" class="slick-prev"><i><BiLeftArrow/></i></button>,
        // nextArrow: <button type="button" class="slick-next"><i><BiRightArrow/></i></button>,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                slidesToShow: 1
            }
        ]
    }
    return (
        <>
            <section className="shop-area home-four-shop-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title home-four-title text-center ">
                                <h2>gaming product <span>corner</span></h2>
                                <p>latest gaming product of all companies with exclusive discount</p>
                            </div>
                        </div>
                    </div>
                    <Slider className="row product-active"{...settings}>

                        {ProductData.map((Data) =>{
                            return(
                                <div className="col-xl">
                                <div className="shop-item">
                                    <div className="product-thumb">
                                        <a href="/#"><img src={Data.img} alt="" /></a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-tag"><a href="/#">{Data.productName}</a></div>
                                        <h4><a href="/#">{Data.detail}</a></h4>
                                        <div className="product-meta">
                                            <div className="product-price">
                                                <h5>{Data.price}</h5>
                                            </div>
                                            <div className="product-cart-action">
                                                <a href="/#"><i>{Data.icon}</i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Product
