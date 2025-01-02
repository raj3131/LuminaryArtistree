import React from 'react';
import { Link } from 'react-router-dom'; 
import archiimg from "../images/1-11.jpg";
import foodimg from "../images/FOOD-5.jpg";
import portimg from "../images/Portraits Hero IMG.jpg";
import "./compoCss/Categories.css";
import Tabs from "./tabs"; 

const tabs = [
  { image: archiimg, description: "Architecture", route: "/architecture" },
  { image: foodimg, description: "Food", route: "/food" },
  { image: portimg, description: "Portrait", route: "/portrait" },  
];

function Categories() {
  return (
    <>
      {tabs.map((eachTab, index) => (
        <Link to={eachTab.route} key={index} className="category-item"> 
          <Tabs image={eachTab.image} description={eachTab.description} />
        </Link>
      ))}
    </>
  );
}

export default Categories;
