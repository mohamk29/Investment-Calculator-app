import { useState } from "react";
import classes from "./CalculatorForm.module.css";

const CalculatorForm = (props) => {
  let calculationData = {};

  const [totalSharesInput, setTotalSharesInput] = useState("");

  const [pricePerShareInput, setPricePerShareInput] = useState("");

  const [expectedIncreaseInput, setExpectedIncreaseInput] = useState("");

  const [investmentDurationInput, setInvestmentDurationInput] = useState("");

  const totalSharesHandler = (event) => {
    setTotalSharesInput(event.target.value);
  };

  const pricePerSharesHandler = (event) => {
    setPricePerShareInput(event.target.value);
  };

  const expectedIncreaseHandler = (event) => {
    setExpectedIncreaseInput(event.target.value);
  };

  const investmentDurationHandler = (event) => {
    setInvestmentDurationInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    calculationData = {
      totalSharesInput: totalSharesInput,
      pricePerShareInput: pricePerShareInput,
      expectedIncreaseInput: expectedIncreaseInput,
      investmentDurationInput: investmentDurationInput,
    };
    props.onCalculatedData(calculationData);
  };

  const resetHandler = () => {
    setTotalSharesInput("");
    setPricePerShareInput("");
    setExpectedIncreaseInput("");
    setInvestmentDurationInput("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="total-shares">Total Numbers of Shares</label>
          <input
            type="number"
            id="total-shares"
            onChange={totalSharesHandler}
          />
        </p>
        <p>
          <label htmlFor="price-per-share">Price Per Share ($)</label>
          <input
            type="number"
            id="price-per-share"
            onChange={pricePerSharesHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-increase">
            Expected Increase In Price (%, per year)
          </label>
          <input
            type="number"
            id="expected-increase"
            onChange={expectedIncreaseHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
