import React, { useState } from "react";

const CashFlow = () => {
  const [rentIncome, setRentIncome] = useState(0);
  const [rentExpenses, setRentExpenses] = useState(0);

  const handleRentIncome = (e) => {
    setRentIncome(parseInt(e.target.value));
  };

  const handleExpenses = (e) => {
    setRentExpenses(parseInt(e.target.value));
  };

  const cashFlow = rentIncome - rentExpenses;

  return (
    <div>
      <h2>CASH FLOW</h2>
      <div>
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          value={rentIncome}
          className="d-flex flex-row mb-3"
          onChange={handleRentIncome}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Rental Expenses</label>
        <input
          type="number"
          value={rentExpenses}
          className="d-flex flex-row mb-3"
          onChange={handleExpenses}
        />
      </div>
      <div>
        <h3>Total monthy cashflow is {cashFlow}</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-3" />
    </div>
  );
};

export default CashFlow;
