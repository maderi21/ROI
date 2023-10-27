import React from "react";

const Income = () => {
  return (
    <div>
      <h2>INCOME</h2>
      <div>
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-3"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Energy</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-3"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Misc</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-3"
        />
      </div>
      <div>
        <h3>TOTAL MONTHLY INCOME</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-3" />
    </div>
  );
};

export default Income;
