import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../context/Storecontext";

const Fooditem = ({ _id, name, image, price, description }) => {
  const { cartitem, addtocart, removefromcart } = useContext(Storecontext);

  return (
    <div className="fooditem">
      <div className="fooditem-img-container">
        <img className="fooditem-img" src={image} alt="" />
        {!cartitem[_id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => addtocart(_id)}
          />
        ) : (
          <div className="fooditemcount">
            <img
              src={assets.remove_icon_red}
              alt=""
              srcset=""
              onClick={() => removefromcart(_id)}
            />
            <p>{cartitem[_id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              srcset=""
              onClick={() => addtocart(_id)}
            />
          </div>
        )}
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fooditem-desc">{description}</p>
        <p className="fooditem-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
