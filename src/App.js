import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (data) => {
    const yearlyData = [];
    let currentSavings = data.currentSavingsInput;

    const expectedReturn = data.expectedInterestInput / 100;

    for (let i = 0; i < data.investmentDurationInput; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + data.yearlySavingsInput;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: data.yearlySavingsInput,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculatedData={calculateHandler} />
      {!results && <p>No calculation made yet...</p>}
      {results && <ResultTable dataArray={results} />}
    </div>
  );
}

export default App;
