import React from "react";

const CashRoi = () => {
  return (
    <div>
      <h2>CASH ON CASH ROI</h2>
      <div>
        <label htmlFor="monthlyRent">Down Payment</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Closing Costs</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Rehab Budget</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Misc Other</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <h3>TOTAL INVESTMENT</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-2" />
      <div>
        <label htmlFor="monthlyRent">Annual Cash Flow</label>
        <input
          type="number"
          id="monthlyRent"
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <h3>TOTAL INVESTMENT</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-2" />
    </div>
  );
};

export default CashRoi;
