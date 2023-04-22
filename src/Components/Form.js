import React, { useState } from "react";
import "../Styles/Form.css";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slices/expensesSlice";
import { addAmount } from "../redux/slices/amountSlice";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Form = () => {
  const [amt, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const randomId = Math.floor(Math.random() * 1000) + 1;

  function errorCheck() {
    if (amt === "" || desc === "") {
      alert("Amount OR Description cannot be empty!");
      return true;
    } else {
      return false;
    }
  }

  const amountInputHandler = (e) => {
    setAmount(e.target.value);
  };

  const descInputHandler = (e) => {
    setDesc(e.target.value);
  };

  const addHandler = (e) => {
    if (!errorCheck()) {
      dispatch(addExpense({ amount: amt, description: desc, id: randomId }));
      dispatch(addAmount(parseInt(amt)));
      setAmount("");
      setDesc("");
    }
  };

  return (
    <>
      <form>
        <div className="form">
          <TextField
            className="amt-input input"
            id="outlined-number"
            label="Amount"
            type="number"
            size="small"
            value={amt}
            sx={{
              marginRight: "10px",
              marginBottom: "10px",
              width: "250px",
            }}
            onChange={amountInputHandler}
          />
          <TextField
            id="outlined-basic"
            label="Enter Description"
            variant="outlined"
            className="desc-input input"
            size="small"
            value={desc}
            sx={{
              marginRight: "10px",
              marginBottom: "10px",
              width: "250px",
            }}
            onChange={descInputHandler}
          />
          <Button
            variant="contained"
            sx={{
              marginRight: "10px",
              marginBottom: "10px",
              backgroundColor: "#16a34a",
              color: "white",
              "&:hover": {
                backgroundColor: "#159d47",
              },
            }}
            onClick={addHandler}
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
