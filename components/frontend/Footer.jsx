import React from "react";
import Services from "./Services";

import footerLogo from "../../assets/images/menu/logo/1.jpg";
import copyright from "../../assets/images/payment/1.png";
import Image from "next/image";


function Footer() {
  return (
    <div class="footer">
      <Services />

      <div class="footer-static-middle">
        <div class="container">
          <div class="footer-logo-wrap pt-50 pb-35">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="footer-logo">
                  <Image width={190} height={45} src={footerLogo} alt="Footer Logo" />
                  <p class="info">
                    We are a team of designers and developers that create high
                    quality HTML Template & Woocommerce, Shopify Theme.
                  </p>
                </div>
                <ul class="des">
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

              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="footer-block">
                  <h3 class="footer-block-title">Product</h3>
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

              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="footer-block">
                  <h3 class="footer-block-title">Our company</h3>
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

              <div class="col-lg-4">
                <div class="footer-block">
                  <h3 class="footer-block-title">Follow Us</h3>
                  <ul class="social-link">
                    <li class="twitter">
                      <a
                        href="https://twitter.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Twitter"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="rss">
                      <a
                        href="https://rss.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="RSS"
                      >
                        <i class="fa fa-rss"></i>
                      </a>
                    </li>
                    <li class="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google +"
                      >
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li class="facebook">
                      <a
                        href="https://www.facebook.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="youtube">
                      <a
                        href="https://www.youtube.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Youtube"
                      >
                        <i class="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li class="instagram">
                      <a
                        href="https://www.instagram.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="footer-newsletter">
                  <h4>Sign up to newsletter</h4>
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="footer-subscribe-form validate"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div
                        id="mc-form"
                        class="mc-form subscribe-form form-group"
                      >
                        <input
                          id="mc-email"
                          type="email"
                          autocomplete="off"
                          placeholder="Enter your email"
                        />
                        <button class="btn" id="mc-submit">
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

      <div class="footer-static-bottom pt-55 pb-55">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-links">
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

              <div class="copyright text-center">
                <a href="#">
                  <Image width={286} height={32} src={copyright} alt="" />
                </a>
              </div>

              <div class="copyright text-center pt-25">
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
