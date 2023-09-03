"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";

import image1 from "../../../../assets/images/product/small-size/1.jpg";
import image2 from "../../../../assets/images/product/small-size/2.jpg";
import image3 from "../../../../assets/images/product/small-size/3.jpg";
import image4 from "../../../../assets/images/product/small-size/4.jpg";
import image5 from "../../../../assets/images/product/small-size/5.jpg";
import image6 from "../../../../assets/images/product/small-size/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const images = [image1, image2, image3, image4, image5, image6];
// removeEventListener



function ProductDetails() {



  const removeEventListener = ()=>{
    window.removeEventListener("resize", handleResize);
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(image1);
  return (
    <>
      <div class="breadcrumb-area">
        <div class="container">
          <div class="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">Single Product Tab Style Top</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-wraper">
        <div class="container">
          <div class="row single-product-area">
            <div class="col-lg-5 col-md-6">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
               
                loop={true}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="col-lg-7 col-md-6">
              <div class="product-details-view-content pt-60">
                <div class="product-info">
                  <h2>Today is a good day Framed poster</h2>
                  <span class="product-details-ref">Reference: demo_15</span>
                  <div class="rating-box pt-20">
                    <ul class="rating rating-with-review-item">
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li class="no-star">
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li class="no-star">
                        <i class="fa fa-star-o"></i>
                      </li>
                      <li class="review-item">
                        <a href="#">Read Review</a>
                      </li>
                      <li class="review-item">
                        <a href="#">Write Review</a>
                      </li>
                    </ul>
                  </div>
                  <div class="price-box pt-20">
                    <span class="new-price new-price-2">$57.98</span>
                  </div>
                  <div class="product-desc">
                    <p>
                      <span>
                        100% cotton double printed dress. Black and white
                        striped top and orange high waisted skater skirt bottom.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. quibusdam corporis, earum facilis et nostrum
                        dolorum accusamus similique eveniet quia pariatur.
                      </span>
                    </p>
                  </div>
                  <div class="product-variants">
                    <div class="produt-variants-size">
                      <label>Dimension</label>
                      <select class="nice-select">
                        <option value="1" title="S" selected="selected">
                          40x60cm
                        </option>
                        <option value="2" title="M">
                          60x90cm
                        </option>
                        <option value="3" title="L">
                          80x120cm
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="single-add-to-cart">
                    <form action="#" class="cart-quantity">
                      <div class="quantity">
                        <label>Quantity</label>
                        <div class="cart-plus-minus">
                          <input
                            class="cart-plus-minus-box"
                            value="1"
                            type="text"
                          />
                          <div class="dec qtybutton">
                            <i class="fa fa-angle-down"></i>
                          </div>
                          <div class="inc qtybutton">
                            <i class="fa fa-angle-up"></i>
                          </div>
                        </div>
                      </div>
                      <button class="add-to-cart" type="submit">
                        Add to cart
                      </button>
                    </form>
                  </div>
                  <div class="product-additional-info pt-25">
                    <a class="wishlist-btn" href="wishlist.html">
                      <i class="fa fa-heart-o"></i>Add to wishlist
                    </a>
                    <div class="product-social-sharing pt-25">
                      <ul>
                        <li class="facebook">
                          <a href="#">
                            <i class="fa fa-facebook"></i>Facebook
                          </a>
                        </li>
                        <li class="twitter">
                          <a href="#">
                            <i class="fa fa-twitter"></i>Twitter
                          </a>
                        </li>
                        <li class="google-plus">
                          <a href="#">
                            <i class="fa fa-google-plus"></i>Google +
                          </a>
                        </li>
                        <li class="instagram">
                          <a href="#">
                            <i class="fa fa-instagram"></i>Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="block-reassurance">
                    <ul>
                      <li>
                        <div class="reassurance-item">
                          <div class="reassurance-icon">
                            <i class="fa fa-check-square-o"></i>
                          </div>
                          <p>
                            Security policy (edit with Customer reassurance
                            module)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="reassurance-item">
                          <div class="reassurance-icon">
                            <i class="fa fa-truck"></i>
                          </div>
                          <p>
                            Delivery policy (edit with Customer reassurance
                            module)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="reassurance-item">
                          <div class="reassurance-icon">
                            <i class="fa fa-exchange"></i>
                          </div>
                          <p>
                            {" "}
                            Return policy (edit with Customer reassurance
                            module)
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
