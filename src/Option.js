import { useState } from "react";
import SubOption from "./SubOption";
import "./index.css";
/*
export default function Option({ optionObject }) {
  return (
    <div className="option">
      <ul>
        <li className="list">
          <img src="pizzas/prosciutto.jpg" alt="" />
          {optionObject.name}
        </li>
      </ul>
    </div>
  );
}
*/
export default function Option({ display, setDisplay }) {
  return <div className="option" onClick={(e) => setDisplay(!display)}></div>;
}
