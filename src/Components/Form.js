import React, { useState } from "react";
import "../Styles/Form.css";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slices/expensesSlice";
import { addAmount } from "../redux/slices/amountSlice";

const Form = () => {
  const [amt, setAmount] = useState("0");
  const [desc, setDesc] = useState("Enter Description");
  const [isAmtClicked, setAmtClicked] = useState(false);
  const [isDescClicked, setDescClicked] = useState(false);
  const dispatch = useDispatch();

  const randomId = Math.floor(Math.random() * 1000) + 1;

  const isValid = () => {
    if (desc === "" || desc === "Enter Description") {
      console.log("invalid desc");
      alert("Description cannot be empty!");
      return false;
    } else if (amt === "" || amt === 0) {
      alert("Amount cannot be empty!");
      console.log("invalid amt");
      return false;
    }
    console.log("imma pretend I didnt see anything");
    return true;
  };

  const amountInputHandler = (e) => {
    setAmount(e.target.value);
  };

  const descInputHandler = (e) => {
    setDesc(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isValid) {
      dispatch(addExpense({ amount: amt, description: desc, id: randomId }));
      dispatch(addAmount(parseInt(amt)));
    }
    setAmount("0");
    setAmtClicked(true);
    setDesc("Enter Desciption");
    setDescClicked(true);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form">
          <input
            type="number"
            value={amt}
            onClick={() => {
              if (!isAmtClicked) {
                setAmount("");
                setAmtClicked(true);
              }
            }}
            onChange={amountInputHandler}
          />
          <input
            type="text"
            value={desc}
            onClick={() => {
              if (!isDescClicked) {
                setDesc("");
                setDescClicked(true);
              }
            }}
            onChange={descInputHandler}
          />
          <button className="add-btn">Add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
