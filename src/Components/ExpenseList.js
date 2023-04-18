import React from "react";
import { useSelector } from "react-redux";
import { getExpensesSelector } from "../redux/slices/expensesSlice";
import "../Styles/ExpenseList.css";

const ExpenseList = (props) => {
  let expenseItems = [];
  const expenses = useSelector(getExpensesSelector);
  if (expenses.length > 0) {
    expenseItems = expenses.map((expense) => {
      if (props.title === "Income") {
        if (expense.amount > 0) {
          return (
            <div className="expense-item-container">
              <p className="expense-amount">₹ {expense.amount}</p>
              <p className="expense-desc">{expense.description}</p>
            </div>
          );
        }
      } else {
        if (expense.amount < 0) {
          return (
            <div className="expense-item-container">
              <p className="expense-amount">₹ {expense.amount}</p>
              <p className="expense-desc">{expense.description}</p>
            </div>
          );
        }
      }
    });
    return <>{expenseItems}</>;
  } else {
    return <p>No {props.title} Yet!</p>;
  }
};

export default ExpenseList;
