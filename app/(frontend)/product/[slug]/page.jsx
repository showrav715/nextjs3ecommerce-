"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../assets/images/product/small-size/1.jpg";
import image2 from "../../../../assets/images/product/small-size/2.jpg";
import image3 from "../../../../assets/images/product/small-size/3.jpg";
import image4 from "../../../../assets/images/product/small-size/4.jpg";
import image5 from "../../../../assets/images/product/small-size/5.jpg";
import image6 from "../../../../assets/images/product/small-size/6.jpg";

const images = [image1, image2, image3, image4, image5, image6];
// removeEventListener



function ProductDetails() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);


  const [selectedOption, setSelectedOption] = useState('1'); // Default selected option
  const [qty, setQty] = useState(1);

  const handleQtyUp = () => setQty(qty + 1);
  const handleQtyDown = () => {

    if (qty <= 1) {
      setQty(1)
    }
    else {
      setQty(qty - 1);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    alert(isModalOpen)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Single Product Tab Style Top</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-wraper">
        <div className="container">
          <div className="row single-product-area">
            <div className="col-lg-5 col-md-6">
              <div className="product-details-left pt-60">
                <div className="product-details-thumbs slider-thumbs-1">
                  <Slider
                    asNavFor={nav2}
                    ref={slider1Ref}
                    arrows={false}
                  >
                    {images.map((image, index) => (
                      <Image src={image} key={index} width={300} height={300} alt="product image thumb" />
                    ))}
                  </Slider>
                </div>
                <div className="product-details-images slider-navigation-1">
                  <Slider
                    asNavFor={nav1}
                    ref={slider2Ref}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}

                  >
                    {images.map((image, index) => (
                      <Image key={index} src={image} width={91} height={91} alt="product image thumb" />
                    ))}
                  </Slider>

                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <div className="product-details-view-content pt-60">
                <div className="product-info">
                  <h2>Today is a good day Framed poster</h2>
                  <span className="product-details-ref">Reference: demo_15</span>
                  <div className="rating-box pt-20">
                    <ul className="rating rating-with-review-item">
                      <li>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li className="no-star">
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li className="no-star">
                        <i className="fa fa-star-o"></i>
                      </li>
                      <li className="review-item">
                        <a href="#">Read Review</a>
                      </li>
                      <li className="review-item">
                        <a href="#">Write Review</a>
                      </li>
                    </ul>
                  </div>
                  <div className="price-box pt-20">
                    <span className="new-price new-price-2">$57.98</span>
                  </div>
                  <div className="product-desc">
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
                  <div className="product-variants">
                    <div className="produt-variants-size">
                      <label>Dimension</label>
                      <select className="nice-select" value={selectedOption} onChange={handleSelectChange}>
                        <option value="1" title="S">
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
                  <div className="single-add-to-cart">
                    <form action="#" className="cart-quantity">
                      <div className="quantity">
                        <label>Quantity</label>
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={qty}
                            type="text"

                          />
                          <div className="inc qtybutton" onClick={handleQtyDown}>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <div className="dec qtybutton">
                            <i className="fa fa-angle-up" onClick={handleQtyUp}></i>
                          </div>
                        </div>
                      </div>
                      <button className="add-to-cart" type="submit">
                        Add to cart
                      </button>
                    </form>
                  </div>
                  <div className="product-additional-info pt-25">
                    <a className="wishlist-btn" href="wishlist.html">
                      <i className="fa fa-heart-o"></i>Add to wishlist
                    </a>
                    <div className="product-social-sharing pt-25">
                      <ul>
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook"></i>Facebook
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter"></i>Twitter
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus"></i>Google +
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="#">
                            <i className="fa fa-instagram"></i>Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block-reassurance">
                    <ul>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                            <i className="fa fa-check-square-o"></i>
                          </div>
                          <p>
                            Security policy (edit with Customer reassurance
                            module)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                            <i className="fa fa-truck"></i>
                          </div>
                          <p>
                            Delivery policy (edit with Customer reassurance
                            module)
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                            <i className="fa fa-exchange"></i>
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

      <div className="product-area pt-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab">
                <ul className="nav li-product-menu">
                  <li>
                    <a
                      className={activeTab === 'description' ? 'active' : ''}
                      onClick={() => handleTabClick('description')}
                    >
                      <span>Description</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 'product-details' ? 'active' : ''}
                      onClick={() => handleTabClick('product-details')}
                    >
                      <span>Product Details</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 'reviews' ? 'active' : ''}
                      onClick={() => handleTabClick('reviews')}
                    >
                      <span>Reviews</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active show' : ''}`} role="tabpanel">
              <div className="product-description">
                <span>The best is yet to come! Give your walls a voice with a framed poster...</span>
              </div>
            </div>
            <div id="product-details" className={`tab-pane ${activeTab === 'product-details' ? 'active show' : ''}`} role="tabpanel">
              <div className="product-details-manufacturer">
                <a href="#">
                  <img src="images/product-details/1.jpg" alt="Product Manufacturer Image" />
                </a>
                <p><span>Reference</span> demo_7</p>
                <p><span>Reference</span> demo_7</p>
              </div>
            </div>
            <div id="reviews" className={`tab-pane ${activeTab === 'reviews' ? 'active show' : ''}`} role="tabpanel">
              <div class="product-reviews">
                <div class="product-details-comment-block">
                  <div class="comment-review">
                    <span>Grade</span>
                    <ul class="rating">
                      <li><i class="fa fa-star-o"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                      <li class="no-star"><i class="fa fa-star-o"></i></li>
                      <li class="no-star"><i class="fa fa-star-o"></i></li>
                    </ul>
                  </div>
                  <div class="comment-author-infos pt-25">
                    <span>HTML 5</span>
                    <em>01-12-18</em>
                  </div>
                  <div class="comment-details">
                    <h4 class="title-block">Demo</h4>
                    <p>Plaza</p>
                  </div>


                  <div className="card">


                    <div class="card-body">
                      <h3 class="review-page-title">Write Your Review</h3>
                      <div class="modal-inner-area row">

                        <div class="col-lg-12">
                          <div class="li-review-content">

                            <div class="feedback-area">
                              <div class="feedback">
                                <h3 class="feedback-title">Our Feedback</h3>
                                <form action="#">
                                  <p class="your-opinion">
                                    <label>Your Rating</label>
                                    <span>
                                      <select class="star-rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </span>
                                  </p>
                                  <p class="feedback-form">
                                    <label for="feedback">Your Review</label>
                                    <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                  </p>
                                  <div class="feedback-input">
                                    <p class="feedback-form-author">
                                      <label for="author">Name<span class="required">*</span>
                                      </label>
                                      <input id="author" name="author" value="" size="30" aria-required="true" type="text" />
                                    </p>
                                    <p class="feedback-form-author feedback-form-email">
                                      <label for="email">Email<span class="required">*</span>
                                      </label>
                                      <input id="email" name="email" value="" size="30" aria-required="true" type="text" />
                                      <span class="required"><sub>*</sub> Required fields</span>
                                    </p>
                                    <div class="feedback-btn pb-15">

                                      <a href="#">Submit</a>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
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
