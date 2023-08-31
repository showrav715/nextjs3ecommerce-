import Image from "next/image";
import React from "react";
import banner1 from "../../assets/images/banner/2_1.jpg";
import banner2 from "../../assets/images/banner/2_2.jpg";
function Banner() {
  return (
    <>
      <section class="product-area li-laptop-product li-laptop-product-2 pb-45">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-4">
              <div class="li-banner-2 pt-15">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-banner">
                      <a href="#">
                        <Image
                          src={banner1}
                          alt="Li's Static Banner"
                          width={575}
                          height={200}
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="single-banner pt-xs-30">
                      <a href="#">
                        <Image
                          src={banner2}
                          alt="Li's Static Banner"
                          width={575}
                          height={200}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
