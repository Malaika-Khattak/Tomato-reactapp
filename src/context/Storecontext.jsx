import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});

  const addtocart = (itemid) => {
    if (!cartitem[itemid]) {
      setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcartitem((prev) => ({
        ...prev,
        [itemid]: prev[itemid] + 1,
      }));
    }
  };

  const removefromcart = (itemid) => {
    setcartitem((prev) => ({
      ...prev,
      [itemid]: prev[itemid] - 1,
    }));
  };

  const gettotal = () => {
    let totalamount = 0;
    for (const itemid in cartitem) {
      if (cartitem[itemid] > 0) {
        let iteminfo = food_list.find((product) => product._id === itemid);
        totalamount += iteminfo.price * cartitem[itemid];
      }
    }
    return totalamount;
  };

  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    gettotal,
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StorecontextProvider;
