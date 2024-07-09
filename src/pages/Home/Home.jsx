import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/Exploremenu/Exploremenu";
import Fooddisplay from "../../components/Fooddisplay/Fooddisplay";
import Appdown from "../../components/Appdown/Appdown";

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory} />
      <Fooddisplay category={category} />
      <Appdown />
    </div>
  );
};

export default Home;
