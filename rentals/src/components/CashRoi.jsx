import React from "react";

const CashRoi = ({ onOutcomeChange, sumInvestment, annCashFlow, cashRoi }) => {
  const sanitizeValue = (value) => {
    if (isNaN(value) || !isFinite(value)) {
      return "n/a";
    }
    return value;
  };
  const handleOutcomeChange = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10) || 0;

    onOutcomeChange((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sanitizedSumInvestment = sanitizeValue(sumInvestment);
  const sanitizedAnnCashFlow = sanitizeValue(annCashFlow);
  const sanitizedCashRoi = sanitizeValue(cashRoi);
  return (
    <div>
      <h2 className="mb-3">CASH ON CASH ROI</h2>
      <div className="row row-cols-2 mx-5">
        <label>Down Payment</label>
        <input
          type="number"
          name="downPayment"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Closing Costs</label>
        <input
          type="number"
          name="closingCosts"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Rehab Budget</label>
        <input
          type="number"
          name="rehabBudget"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Misc Other</label>
        <input
          type="number"
          name="miscOther"
          className="d-flex flex-row mb-2"
          onChange={handleOutcomeChange}
        />
      </div>
      <div className="m-5">
        <div>
          <h3>Total Invested {sanitizedSumInvestment}</h3>
        </div>
        <div>
          <h4>Annual Cash Flow {sanitizedAnnCashFlow}</h4>
        </div>
        <div>
          <h3>Cash on Cash ROI {sanitizedCashRoi} %</h3>
        </div>
      </div>
    </div>
  );
};

export default CashRoi;
