import React, { useContext } from "react";
import "./Fooddisplay.css";
import { Storecontext } from "../../context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  return (
    <div className="food_display" id="food_display">
      <h2>Top Dishes Near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem
                key={index}
                _id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
