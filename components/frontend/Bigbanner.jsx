import React from "react";

import banner from "../../assets/images/bg-banner/1.jpg";

function Bigbanner() {
  return (
    <div className="li-static-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                backgroundImage: `url(${banner.default || banner})`,
                backgroundPosition: "center center", // Center the background image horizontally and vertically
                backgroundSize: "cover", // Optional: Scale the image to cover the entire div
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="li-static-home-image"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bigbanner;
