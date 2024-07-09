import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Whether you're craving a comforting bowl of pasta, a fresh and
            healthy salad, or an indulgent dessert, we've got you covered. Our
            user-friendly interface makes it easy to browse and filter through a
            variety of top-rated dishes, ensuring you find exactly what you're
            looking for.
          </p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>Company</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-353-124-764-213</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy">
        Copyright 2024 &copy; Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
