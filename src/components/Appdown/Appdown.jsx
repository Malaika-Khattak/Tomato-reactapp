import React from "react";
import "./Appdown.css";
const Appdown = () => {
  return (
    <div className="appdown" id="appdown">
      <p>
        For Better Experience Download
        <br />
        Tomato App
      </p>
      <div className="appdown_platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};
import "./Appdown.css";
import { assets } from "../../assets/assets";
export default Appdown;
