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
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.savingsEndOfYear - 2}</td>
                <td>
                  {data.savingsEndOfYear + data.yearlyContribution * data.year}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
