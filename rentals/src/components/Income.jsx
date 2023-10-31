import React, { useState } from "react";

const Income = () => {
  const [rent, setRent] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [misc, setMisc] = useState(0);
  const [sum, setSum] = useState(0);

  const handleRent = (e) => {
    setRent(e.target.value);
  };

  const handleEnergy = (e) => {
    setEnergy(e.target.value);
  };

  const handleMisc = (e) => {
    setMisc(e.target.value);
  };

  const calculateSum = () => {
    const total = rent + energy + misc;
    setSum(total);
  };

  return (
    <div>
      <h2>INCOME</h2>
      <div>
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          value={rent}
          className="d-flex flex-row mb-2"
          onChange={handleRent}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Energy</label>
        <input
          type="number"
          value={energy}
          className="d-flex flex-row mb-2"
          onChange={handleEnergy}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Misc</label>
        <input
          type="number"
          value={misc}
          className="d-flex flex-row mb-2"
          onChange={handleMisc}
        />
      </div>
      <div>
        <h3>TOTAL MONTHLY INCOME IS {sum}</h3>
      </div>
    </div>
  );
};

export default Income;
