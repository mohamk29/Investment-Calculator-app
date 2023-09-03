const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const ResultTable = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year </th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.dataArray.map((data) => {
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.savingsEndOfYear)}</td>
                <td>{formatter.format(data.yearlyInterest)}</td>
                <td>{formatter.format(data.savingsEndOfYear - 2)}</td>
                <td>{formatter.format(data.savingsEndOfYear + 20)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
