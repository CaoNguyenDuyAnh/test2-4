import React, { useState } from "react";

export default function Card(props) {
  const [isClicked, setIsClicked] = useState(true);
  const { icon, title, setValue, id, valueData } = props;
  const handleGetData = (id) => {
    if (valueData.includes(id)) {
      setValue(valueData.filter((idSelect) => idSelect !== id));
      console.log("sau khi fileter", valueData);
    } else {
      setValue([...valueData, id]);
    }
  };
  console.log(valueData);
  return (
    <div className={isClicked ? "card" : "card card-active"}>
      <img className="card__img" src={icon} alt="" />
      <h3>{title}</h3>
      <button
        onClick={() => {
          handleGetData(id);
          setIsClicked(!isClicked);
        }}
        className={isClicked ? "card__button" : "card__button-active"}>
        <img src="./Group 24.png" alt="" />
        <span>{isClicked ? "Join to earn" : "+200"}</span>
      </button>
    </div>
  );
}
