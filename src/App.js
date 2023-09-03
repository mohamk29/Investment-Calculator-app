import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";

function App() {
  const yearlyData = [];

  const calculateHandler = (data) => {
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
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculatedData={calculateHandler} />

      <ResultTable dataArray={yearlyData} />
    </div>
  );
}

export default App;
