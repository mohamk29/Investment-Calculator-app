import { useState } from "react";

const CalculatorForm = (props) => {
  const [currentSavingsInput, setCurrentSavingsInput] = useState("");

  const [yearlySavingsInput, setYearlySavingsInput] = useState("");

  const [expectedInterestInput, setExpectedInterestInput] = useState("");

  const [investmentDurationInput, setInvestmentDurationInput] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavingsInput(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setYearlySavingsInput(event.target.value);
  };

  const expectedInterestHandler = (event) => {
    setExpectedInterestInput(event.target.value);
  };

  const investmentDurationHandler = (event) => {
    setInvestmentDurationInput(event.target.value);
  };

  const yearlyData = [];

  const calculateHandler = () => {
    const expectedReturn = expectedInterestInput / 100;

    for (let i = 0; i < investmentDurationInput; i++) {
      const yearlyInterest = currentSavingsInput * expectedReturn;
      currentSavingsInput += yearlyInterest + yearlySavingsInput;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsInput,
        yearlySavingsInput: yearlySavingsInput,
      });
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    calculateHandler();
    props.onCalculatedData(yearlyData);
  };

  const resetHandler = () => {
    setCurrentSavingsInput("");
    setYearlySavingsInput("");
    setExpectedInterestInput("");
    setInvestmentDurationInput("");
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
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
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={calculateHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
