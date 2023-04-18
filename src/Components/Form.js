import React from "react";
import "../Styles/Form.css";

const Form = () => {
  const amountInputHandler = (e) => {
    console.log(e.value);
  };

  const descInputHandler = (e) => {
    console.log(e.value);
  };

  const addBtnHandler = (e) => {
    console.log("clear clicked");
  };

  return (
    <>
      <div className="form">
        <input type="text" value="Enter Amount" onChange={amountInputHandler} />
        <input
          type="text"
          value="Enter Description"
          onChange={descInputHandler}
        />
        <button className="add-btn" onClick={addBtnHandler}>
          Add
        </button>
      </div>
    </>
  );
};

export default Form;
