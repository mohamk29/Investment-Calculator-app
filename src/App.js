import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";

function App() {
  let updatedData = [];
  const calculatedDataHandler = (data) => {
    updatedData = [...data];
  };
  return (
    <>
      <Header />
      <CalculatorForm onCalculatedData={calculatedDataHandler} />
      <ResultTable />
    </>
  );
}

export default App;
