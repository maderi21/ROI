import React from "react";

const CashFlow = ({ cashFlow, sumIncome, sumExpenses }) => {
  return (
    <div className="row text-center mx-5">
      <h2 className="mb-3">CASH FLOW</h2>
      <p>Rental Income: {sumIncome}</p>
      <p>Rental Expenses: {sumExpenses}</p>
      <div>
        <h3>Total monthly cashflow is {cashFlow}</h3>
      </div>
    </div>
  );
};

export default CashFlow;
