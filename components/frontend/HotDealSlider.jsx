import Image from "next/image";
import React from "react";

function HotDealSlider({ image }) {
  return (
    <div className="single-product-wrap">
        <div className="product-image">
          <a href="single-product.html">
            <Image
              src={image}
              alt="Li's Product Image"
              width={300}
              height={300}
            />
          </a>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer">
                <a href="shop-left-sidebar.html">Graphic Corner</a>
              </h5>
              <div className="rating-box">
                <ul className="rating">
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
                </ul>
              </div>
            </div>
            <h4>
              <a className="product_name" href="single-product.html">
                Accusantium dolorem1
              </a>
            </h4>
            <div className="price-box">
              <span className="new-price">$46.80</span>
            </div>
          </div>
          <div className="add-actions" style={{zIndex:1}}>
            <ul className="add-actions-link">
              <li className="add-cart active">
                <a href="#">Add to cart</a>
              </li>
              <li>
                <a className="links-details" href="wishlist.html">
                  <i className="fa fa-heart-o"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="quick view"
                  className="quick-view-btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default HotDealSlider;
