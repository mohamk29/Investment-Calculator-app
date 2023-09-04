import classes from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const ResultTable = (props) => {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year </th>
            <th>Yearly Profit</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.dataArray.map((data) => {
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.yearlyProfit)}</td>
                <td>{formatter.format(data.investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
