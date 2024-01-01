import React from "react";

const Expenses = ({ onExpenseChange }) => {
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10) || 0;

    onExpenseChange((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="mb-3">EXPENSES</h2>
      <div className="row row-cols-2 mx-5">
        <label>Tax</label>
        <input
          type="number"
          name="tax"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Insurance</label>
        <input
          type="number"
          name="insurance"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Utilities</label>
        <input
          type="number"
          name="utilities"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>HOA</label>
        <input
          type="number"
          name="hoa"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Vacancy</label>
        <input
          type="number"
          name="vacancy"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Repairs</label>
        <input
          type="number"
          name="repairs"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>CapEx</label>
        <input
          type="number"
          name="capEx"
          className="d-flex flex-row mb-2"
          onChange={handleInputChange}
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Property Mng</label>
        <input
          type="number"
          name="propertyMng"
          onChange={handleInputChange}
          className="d-flex flex-row mb-2"
        />
      </div>
      <div className="row row-cols-2 mx-5">
        <label>Mortgage</label>
        <input
          type="number"
          name="mortgage"
          onChange={handleInputChange}
          className="d-flex flex-row mb-2"
        />
      </div>
    </div>
  );
};

export default Expenses;
