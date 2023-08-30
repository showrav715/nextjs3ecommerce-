"use client";
import React, { useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../assets/images/banner/1_1.jpg'
import banner2 from '../../assets/images/banner/1_2.jpg'
import banner3 from '../../assets/images/banner/1_3.jpg'
import Image from 'next/image'
function Hero() {
    const [showCategories, setShowCategories] = useState(true);

    const toggleCategories = () => {
        setShowCategories(prevState => !prevState);
    };


    return (
        <>
            <div className="slider-with-banner">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">

                            <div className="category-menu">
                                <div className="category-heading" onClick={toggleCategories}>
                                    <h2 className="categories-toggle"><span>categories</span></h2>
                                </div>
                                <div id="cate-toggle" className={`category-menu-list ${showCategories ? 'show-categories' : ''}`}>
                                    <ul>
                                        <li className="right-menu"><a href="shop-left-sidebar.html">Laptops</a>
                                            <ul className="cat-mega-menu">
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Prime Video</a>
                                                    <ul>
                                                        <li><a href="#">All Videos</a></li>
                                                        <li><a href="#">Blouses</a></li>
                                                        <li><a href="#">Evening Dresses</a></li>
                                                        <li><a href="#">Summer Dresses</a></li>
                                                        <li><a href="#">T-shirts</a></li>
                                                        <li><a href="#">Rent or Buy</a></li>
                                                        <li><a href="#">Your Watchlist</a></li>
                                                        <li><a href="#">Watch Anywhere</a></li>
                                                        <li><a href="#">Getting Started</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Computers</a>
                                                    <ul>
                                                        <li><a href="#">More to Explore</a></li>
                                                        <li><a href="#">TV & Video</a></li>
                                                        <li><a href="#">Audio & Theater</a></li>
                                                        <li><a href="#">Camera, Photo</a></li>
                                                        <li><a href="#">Cell Phones</a></li>
                                                        <li><a href="#">Headphones</a></li>
                                                        <li><a href="#">Video Games</a></li>
                                                        <li><a href="#">Wireless Speakers</a></li>
                                                    </ul>
                                                </li>
                                                <li className="right-menu cat-mega-title">
                                                    <a href="shop-left-sidebar.html">Electronics</a>
                                                    <ul>
                                                        <li><a href="#">Amazon Home</a></li>
                                                        <li><a href="#">Kitchen & Dining</a></li>
                                                        <li><a href="#">Furniture</a></li>
                                                        <li><a href="#">Bed & Bath</a></li>
                                                        <li><a href="#">Appliances</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Cameras</a></li>

                                        <li><a href="#">Chamcham</a></li>
                                        <li className="rx-child"><a href="#">Mobile & Tablets</a></li>
                                        <li className="rx-child"><a href="#">Accessories</a></li>
                                        <li className="rx-parent">
                                            <a className="rx-default">More Categories</a>
                                            <a className="rx-show">Less Categories</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-9">
                            <div className="slider-area pt-sm-30 pt-xs-30">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true,

                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide className="single-slide align-center-left animation-style-02 bg-4">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                            <h2>Chamcham Galaxy S9 | S9+</h2>
                                            <h3>Starting at <span>$589.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-slide align-center-left animation-style-01 bg-5">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$1599.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-slide align-center-left animation-style-02 bg-6">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$809.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="li-static-banner pt-20 pt-sm-30 pt-xs-30">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4">
                            <div className="single-banner pb-xs-30">
                                <a href="#">
                                    <Image src={banner1} width={363} height={222} alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-banner pb-xs-30">
                                <a href="#">
                                    <Image src={banner2} width={363} height={222} alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-banner">
                                <a href="#">
                                    <Image src={banner3} width={363} height={222} alt="Li's Static Banner" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero