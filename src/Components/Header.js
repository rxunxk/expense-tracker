import React from "react";
import "../Styles/Header.css";
import { useSelector } from "react-redux";
import { getAmountSelector } from "../redux/slices/amountSlice";

const Header = () => {
  const amount = useSelector(getAmountSelector);
  return (
    <>
      <div className="head-container">
        <h1>Expense Tracker App</h1>
        <p>Total Savings: ₹ {amount}</p>
      </div>
    </>
  );
};

export default Header;
