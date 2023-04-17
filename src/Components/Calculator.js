import React from "react";
import "../Styles/Calculator.css";
import Card from "./Card";

const Calculator = () => {
  const amountInputHandler = (e) => {
    console.log(e.value);
  };

  const descInputHandler = (e) => {
    console.log(e.value);
  };

  const clearHandler = () => {
    console.log("clear clicked");
  };
  return (
    <>
      <div className="container">
        <div className="form">
          <input
            type="text"
            value="Enter Amount"
            onChange={amountInputHandler}
          />
          <input
            type="text"
            value="Enter Description"
            onChange={descInputHandler}
          />
          <button className="add-btn" onClick={clearHandler}>
            Add
          </button>
        </div>
        <div className="expense-cards">
          <Card title="Income" bgColor="g" fgColor="dg" />
          <Card title="Expenses" bgColor="r" fgColor="dr" />
        </div>
        <button className="clear-btn" onClick={clearHandler}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default Calculator;
