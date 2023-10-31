import React from "react";

const CashFlow = ({ cashFlow, sumIncome, sumExpenses }) => {
  return (
    <div>
      <h2>CASH FLOW</h2>
      <p>Rental Income: {sumIncome}</p>
      <p>Rental Expenses: {sumExpenses}</p>
      <div>
        <h3>Total monthly cashflow is {cashFlow}</h3>
      </div>
    </div>
  );
};

export default CashFlow;
