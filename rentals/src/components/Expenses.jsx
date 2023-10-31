import React, { useState } from "react";

const Expenses = () => {
  const [tax, setTax] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [vacancy, setVacancy] = useState(0);
  const [repairs, setRepairs] = useState(0);
  const [capEx, setCapEx] = useState(0);
  const [propertyMng, setPropertyMng] = useState(0);
  const [mortgage, setMortgage] = useState(0);

  const handleTax = (e) => {
    setTax(parseInt(e.target.value));
  };

  const handleInsurance = (e) => {
    setInsurance(parseInt(e.target.value));
  };

  const handleUtilities = (e) => {
    setUtilities(parseInt(e.target.value));
  };

  const handleHoa = (e) => {
    setHoa(parseInt(e.target.value));
  };

  const handleVacancy = (e) => {
    setVacancy(parseInt(e.target.value));
  };

  const handleRepairs = (e) => {
    setRepairs(parseInt(e.target.value));
  };

  const handleCapEx = (e) => {
    setCapEx(parseInt(e.target.value));
  };

  const handlePropertyMng = (e) => {
    setPropertyMng(parseInt(e.target.value));
  };

  const handleMortgage = (e) => {
    setMortgage(parseInt(e.target.value));
  };

  const sumExpenses =
    tax +
    insurance +
    utilities +
    hoa +
    vacancy +
    repairs +
    capEx +
    propertyMng +
    mortgage;

  return (
    <div>
      <h2>EXPENSES</h2>
      <div>
        <label htmlFor="monthlyRent">Tax</label>
        <input
          type="number"
          value={tax}
          className="d-flex flex-row mb-2"
          onChange={handleTax}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Insurance</label>
        <input
          type="number"
          value={insurance}
          className="d-flex flex-row mb-2"
          onChange={handleInsurance}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Utilities</label>
        <input
          type="number"
          value={utilities}
          className="d-flex flex-row mb-2"
          onChange={handleUtilities}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">HOA</label>
        <input
          type="number"
          value={hoa}
          className="d-flex flex-row mb-2"
          onChange={handleHoa}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Vacancy</label>
        <input
          type="number"
          value={vacancy}
          className="d-flex flex-row mb-2"
          onChange={handleVacancy}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Repairs</label>
        <input
          type="number"
          value={repairs}
          className="d-flex flex-row mb-2"
          onChange={handleRepairs}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">CapEx</label>
        <input
          type="number"
          value={capEx}
          className="d-flex flex-row mb-2"
          onChange={handleCapEx}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Property Mng</label>
        <input
          type="number"
          value={propertyMng}
          onChange={handlePropertyMng}
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Mortgage</label>
        <input
          type="number"
          value={mortgage}
          onChange={handleMortgage}
          className="d-flex flex-row mb-2"
        />
      </div>
      <div>
        <h3>Total monthly expenses {sumExpenses}</h3>
      </div>
    </div>
  );
};

export default Expenses;
