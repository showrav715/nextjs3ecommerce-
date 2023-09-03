import React from "react";
import Services from "./Services";

import footerLogo from "../../assets/images/menu/logo/1.jpg";
import copyright from "../../assets/images/payment/1.png";
import Image from "next/image";


function Footer() {
  return (
    <div className="footer">
      <Services />

      <div className="footer-static-middle">
        <div className="container">
          <div className="footer-logo-wrap pt-50 pb-35">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                  <Image width={190} height={45} src={footerLogo} alt="Footer Logo" />
                  <p className="info">
                    We are a team of designers and developers that create high
                    quality HTML Template & Woocommerce, Shopify Theme.
                  </p>
                </div>
                <ul className="des">
                  <li>
                    <span>Address: </span>
                    6688Princess Road, London, Greater London BAS 23JK, UK
                  </li>
                  <li>
                    <span>Phone: </span>
                    <a href="#">(+123) 123 321 345</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto://info@yourdomain.com">
                      info@yourdomain.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Product</h3>
                  <ul>
                    <li>
                      <a href="#">Prices drop</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="#">Best sales</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Our company</h3>
                  <ul>
                    <li>
                      <a href="#">Delivery</a>
                    </li>
                    <li>
                      <a href="#">Legal Notice</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="footer-block">
                  <h3 className="footer-block-title">Follow Us</h3>
                  <ul className="social-link">
                    <li className="twitter">
                      <a
                        href="https://twitter.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="rss">
                      <a
                        href="https://rss.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="RSS"
                      >
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google +"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Youtube"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-newsletter">
                  <h4>Sign up to newsletter</h4>
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="footer-subscribe-form validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div
                        id="mc-form"
                        className="mc-form subscribe-form form-group"
                      >
                        <input
                          id="mc-email"
                          type="email"
                          autoComplete="off"
                          placeholder="Enter your email"
                        />
                        <button className="btn" id="mc-submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-static-bottom pt-55 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#">Online Shopping</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">My Orders</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Most Populars</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Special Products</a>
                  </li>
                  <li>
                    <a href="#">Manufacturers</a>
                  </li>
                  <li>
                    <a href="#">Our Stores</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Warantee</a>
                  </li>
                  <li>
                    <a href="#">Refunds</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Discount</a>
                  </li>
                  <li>
                    <a href="#">Refunds</a>
                  </li>
                  <li>
                    <a href="#">Policy Shipping</a>
                  </li>
                </ul>
              </div>

              <div className="copyright text-center">
                <a href="#">
                  <Image width={286} height={32} src={copyright} alt="" />
                </a>
              </div>

              <div className="copyright text-center pt-25">
                <span>
                  <a target="_blank" href="https://www.templateshub.net">
                    Templates Hub
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
