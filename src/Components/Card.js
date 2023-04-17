import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
  return (
    <>
      <div className={`outter-card ${props.bgColor}`}>
        <div className={`inner-card ${props.fgColor}`}>
          <h2>{props.title}</h2>
          <div className="amount-desc">
            <p>Amount</p>
            <p>Description</p>
          </div>
        </div>
        <p>No {props.title} Yet!</p>
      </div>
    </>
  );
};

export default Card;
