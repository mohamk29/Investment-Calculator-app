import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (data) => {
    const yearlyData = [];

    let totalPriceOfShares = data.totalSharesInput * data.pricePerShareInput;
    let increaseAmount = data.expectedIncreaseInput / 100;
    let yearlyProfit = totalPriceOfShares * increaseAmount;

    for (let i = 0; i < data.investmentDurationInput; i++) {
      yearlyData.push({
        year: i + 1,
        yearlyProfit: yearlyProfit,
        investedCapital: totalPriceOfShares,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculatedData={calculateHandler} />
      {!results && (
        <p style={{ textAlign: "center" }}>
          No investments have been calculated yet
        </p>
      )}
      {results && <ResultTable dataArray={results} />}
    </div>
  );
}

export default App;
