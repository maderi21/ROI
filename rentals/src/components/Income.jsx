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
      <h2 className="mb-3">INCOME</h2>
      <div className="row row-cols-2 mx-5">
        <label htmlFor="monthlyRent">Rental Income</label>
        <input
          type="number"
          name="rentalIncome"
          className="mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label htmlFor="monthlyRent">Energy</label>
        <input
          type="number"
          name="energy"
          className="mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label htmlFor="monthlyRent">Misc</label>
        <input
          type="number"
          name="misc"
          className="mb-2"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Income;
