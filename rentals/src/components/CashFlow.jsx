import React from "react";

const CashFlow = () => {
  return (
    <div>
      <h2>CASH FLOW</h2>
      <div>
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-3"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Rental Expenses</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-3"
        />
      </div>
      <div>
        <h3>TOTAL MONTHLY CASH FLOW</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-3" />
    </div>
  );
};

export default CashFlow;
