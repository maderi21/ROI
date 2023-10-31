import React from "react";

const CashRoi = ({ onOutcomeChange, sumInvestment, annCashFlow, cashRoi }) => {
  const handleOutcomeChange = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10) || 0;

    onOutcomeChange((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>CASH ON CASH ROI</h2>
      <div>
        <label>Down Payment</label>
        <input
          type="number"
          name="downPayment"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div>
        <label>Closing Costs</label>
        <input
          type="number"
          name="closingCosts"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div>
        <label>Rehab Budget</label>
        <input
          type="number"
          name="rehabBudget"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div>
        <label>Misc Other</label>
        <input
          type="number"
          name="miscOther"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div>
        <h3>Total Invested {sumInvestment}</h3>
      </div>
      <div>
        <h4>Annual Cash Flow {annCashFlow}</h4>
      </div>
      <div>
        <h3>Cash on Cash ROI {cashRoi} </h3>
      </div>
    </div>
  );
};

export default CashRoi;
