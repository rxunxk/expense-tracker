import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpensesSelector,
  removeExpense,
} from "../redux/slices/expensesSlice";
import { addAmount } from "../redux/slices/amountSlice";
import { TbTrashXFilled } from "react-icons/tb";
import "../Styles/ExpenseList.css";

const ExpenseList = (props) => {
  let expenseItems = [];
  const expenses = useSelector(getExpensesSelector);
  const dispatch = useDispatch();

  const deleteHandler = (id, amt) => {
    dispatch(removeExpense(id));
    dispatch(addAmount(-amt));
  };

  if (expenses.length > 0) {
    expenseItems = expenses.map((expense) => {
      if (props.title === "Income") {
        if (expense.amount > 0) {
          return (
            <div className="expense-item-container" key={expense.id}>
              <p className="expense-amount">₹ {expense.amount}</p>
              <p className="expense-desc">{expense.description}</p>
              <TbTrashXFilled
                className="delete-btn"
                onClick={deleteHandler.bind(null, expense.id, expense.amount)}
              />
            </div>
          );
        }
      } else {
        if (expense.amount < 0) {
          return (
            <div className="expense-item-container" key={expense.id}>
              <p className="expense-amount">₹ {expense.amount}</p>
              <p className="expense-desc">{expense.description}</p>
              <TbTrashXFilled
                className="delete-btn"
                onClick={deleteHandler.bind(null, expense.id, expense.amount)}
              />
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
