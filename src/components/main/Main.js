import React from "react";
import SingleItem from "./single-item/SingleItem";
import data from "../../assets/data/categories.json";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="row card-deck">
        {data.categories.map((item, index) => {
          return <SingleItem key={index} info={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
