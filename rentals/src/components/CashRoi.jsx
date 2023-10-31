import React, { useState } from "react";

const CashRoi = ({ cashFlow }) => {
  const [downPayment, setDownPayment] = useState(0);
  const [closingCosts, setClosingCosts] = useState(0);
  const [rehabBudget, setRehabBudget] = useState(0);
  const [miscOther, setMiscOther] = useState(0);

  const handleDownPayment = (e) => {
    setDownPayment(parseInt(e.target.value));
  };

  const handleClosingCosts = (e) => {
    setClosingCosts(parseInt(e.target.value));
  };

  const handleRehabBudget = (e) => {
    setRehabBudget(parseInt(e.target.value));
  };

  const handleMiscOther = (e) => {
    setMiscOther(parseInt(e.target.value));
  };

  const sumInvestment = downPayment + closingCosts + rehabBudget + miscOther;
  const AnnChashFlow = cashFlow * 12;

  return (
    <div>
      <h2>CASH ON CASH ROI</h2>
      <div>
        <label htmlFor="monthlyRent">Down Payment</label>
        <input
          type="number"
          value={downPayment}
          className="d-flex flex-row mb-2"
          onChange={handleDownPayment}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Closing Costs</label>
        <input
          type="number"
          value={closingCosts}
          className="d-flex flex-row mb-2"
          onChange={handleClosingCosts}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Rehab Budget</label>
        <input
          type="number"
          value={rehabBudget}
          className="d-flex flex-row mb-2"
          onChange={handleRehabBudget}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Misc Other</label>
        <input
          type="number"
          value={miscOther}
          className="d-flex flex-row mb-2"
          onChange={handleMiscOther}
        />
      </div>
      <div>
        <h3>Total Invested {sumInvestment}</h3>
      </div>
      <div>
        <h4>Annual Cash Flow {AnnChashFlow}</h4>
      </div>
      <div>
        <h3>TOTAL INVESTMENT</h3>
      </div>
      <input type="number" id="monthlyRent" className="d-flex flex-row mb-2" />
    </div>
  );
};

export default CashRoi;
