import React from "react";
import "../Styles/Calculator.css";
import Card from "./Card";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { resetAmount } from "../redux/slices/amountSlice";
import { resetExpense } from "../redux/slices/expensesSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(resetAmount());
    dispatch(resetExpense());
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
