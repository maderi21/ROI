import React from "react";

const Income = ({ onIncomeChange }) => {
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10) || 0;

    onIncomeChange((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>INCOME</h2>
      <div>
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          name="rentalIncome"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Energy</label>
        <input
          type="number"
          name="energy"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Misc</label>
        <input
          type="number"
          name="misc"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Income;
