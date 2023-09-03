import React from "react";

import image1 from "../../assets/images/shipping-icon/1.png";
import image2 from "../../assets/images/shipping-icon/2.png";
import image3 from "../../assets/images/shipping-icon/3.png";
import image4 from "../../assets/images/shipping-icon/4.png";
import Image from "next/image";

const images = [image1, image2, image3, image4];

function Services() {
  return (
    <div className="footer-static-top">
      <div className="container">
        <div className="footer-shipping pt-60 pb-55 pb-xs-25">
          <div className="row">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55"
                >
                  <div className="li-shipping-inner-box">
                    <div className="shipping-icon">
                      <Image
                        src={image}
                        width={67}
                        height={57}
                        alt="Shipping"
                      />
                    </div>
                    <div className="shipping-text">
                      <h2>Free Delivery</h2>
                      <p>And free returns. See checkout for delivery dates.</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
