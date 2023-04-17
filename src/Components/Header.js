import React from "react";
import "../Styles/Header.css";

const Header = (props) => {
  return (
    <>
      <div className="head-container">
        <h1>Expense Tracker App</h1>
        <p>Total Savings: ₹ {props.amount}</p>
      </div>
    </>
  );
};

export default Header;
