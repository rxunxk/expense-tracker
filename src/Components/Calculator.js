import React from "react";

const Calculator = () => {
  const clearHandler = () => {
    console.log("clear clicked");
  };
  return (
    <>
      <div className="form">
        <input type="number" value="Enter Amount" />
        <input type="text" value="Enter Description" />
        <button onClick={clearHandler}>Clear All</button>
      </div>
      <div className="display-cards"></div>
      <button className="clear-btn" onClick={clearHandler}>
        Clear All
      </button>
    </>
  );
};

export default Calculator;
