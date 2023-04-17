import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={`outter-card ${props.bgColor}`}>
        <div className={`inner-card ${props.fgColor}`}>
          <h3>{props.title}</h3>
          <p>Amount</p>
          <p>Description</p>
        </div>
        No {props.title} Yet!
      </div>
    </>
  );
};

export default Card;
