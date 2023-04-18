import React from "react";
import "../Styles/Card.css";
import ExpenseList from "./ExpenseList";

const Card = (props) => {
  return (
    <>
      <div className={`outter-card ${props.bgColor}`}>
        <div className={`inner-card ${props.fgColor}`}>
          <h2>{props.title}</h2>
          <div className="amount-desc">
            <p className="card-amount">Amount</p>
            <p className="card-desc">Description</p>
          </div>
        </div>
        <ExpenseList title={props.title} />
      </div>
    </>
  );
};

export default Card;
