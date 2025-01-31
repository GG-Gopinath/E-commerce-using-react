import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The scope of the e-commerce website project encompasses the
          development of a user-friendly online platform allowing customers to
          register, browse products, add items to their cart, securely process
          payments, and manage orders.
        </p>
        <p>
          E-commerce is the exchange of goods and services
          and the transmission of funds and data over the internet. E-commerce
          relies on technology and digital platforms, including websites, mobile
          apps and social media to make buying and selling possible.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
