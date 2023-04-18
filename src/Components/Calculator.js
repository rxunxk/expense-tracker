import React from "react";
import "../Styles/Calculator.css";
import Card from "./Card";
import Form from "./Form";

const Calculator = () => {
  const clearHandler = () => {
    console.log("clear clicked");
  };

  return (
    <>
      <div className="container">
        <Form />
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
