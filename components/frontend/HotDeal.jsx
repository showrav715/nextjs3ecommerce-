"use client";
import React from "react";
import HotDealSlider from "./HotDealSlider";
// Import Swiper styles
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

import image1 from "../../assets/images/product/large-size/1.jpg";
import image2 from "../../assets/images/product/large-size/2.jpg";
import image3 from "../../assets/images/product/large-size/3.jpg";
import image4 from "../../assets/images/product/large-size/4.jpg";
import image5 from "../../assets/images/product/large-size/5.jpg";
import image6 from "../../assets/images/product/large-size/6.jpg";

import Image from "next/image";

const images = [image1, image2, image3, image4, image5, image6];

function HotDeal() {
  return (
    <section className="product-area li-laptop-product Special-product pt-60 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="li-section-title">
              <h2>
                <span>Hot Deals Products</span>
              </h2>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                220: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="special-product-active mt-40"
            >
              {/* hot deal slider product */}
              {images.map((img) => {
                return (
                  <SwiperSlide key={img} >
                    <HotDealSlider image={img} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotDeal;
