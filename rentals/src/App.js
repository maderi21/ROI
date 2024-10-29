import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import Income from "./components/Income";
import CashFlow from "./components/CashFlow";
import Expenses from "./components/Expenses";
import CashRoi from "./components/CashRoi";
import Outcome from "./components/Outcome";

function App() {
  const [incomeValues, setIncomeValues] = useState({
    rentalIncome: 0,
    energy: 0,
    misc: 0,
  });

  const [expenseValues, setExpenseValues] = useState({
    tax: 0,
    insurance: 0,
    utilities: 0,
    hoa: 0,
    vacancy: 0,
    repairs: 0,
    capEx: 0,
    propertyMng: 0,
    mortgage: 0,
  });

  const [outcomeValues, setOutcomeValues] = useState({
    downPayment: 0,
    closingCosts: 0,
    rehabBudget: 0,
    miscOther: 0,
  });

  const handleIncomeChange = (values) => {
    setIncomeValues(values);
  };

  const handleExpenseChange = (values) => {
    setExpenseValues(values);
  };

  const handleOutcomeChange = (values) => {
    setOutcomeValues(values);
  };

  const cashFlow =
    incomeValues.rentalIncome +
    incomeValues.energy +
    incomeValues.misc -
    (expenseValues.tax +
      expenseValues.insurance +
      expenseValues.utilities +
      expenseValues.hoa +
      expenseValues.vacancy +
      expenseValues.repairs +
      expenseValues.capEx +
      expenseValues.propertyMng +
      expenseValues.mortgage);

  const sumIncome =
    incomeValues.rentalIncome + incomeValues.energy + incomeValues.misc;

  const sumExpenses =
    expenseValues.tax +
    expenseValues.insurance +
    expenseValues.utilities +
    expenseValues.hoa +
    expenseValues.vacancy +
    expenseValues.repairs +
    expenseValues.capEx +
    expenseValues.propertyMng +
    expenseValues.mortgage;

  const sumInvestment =
    outcomeValues.downPayment +
    outcomeValues.closingCosts +
    outcomeValues.rehabBudget +
    outcomeValues.miscOther;

  const annCashFlow = cashFlow * 12;

  const cashRoi = ((annCashFlow / sumInvestment) * 100).toFixed(2);

  return (
    <div className="main-div text-center p-5	">
      <section>
        <div className="row text-center">
          <div className="col-md">
            <Income onIncomeChange={handleIncomeChange} />
          </div>
          <div className="col-md">
            <CashFlow
              cashFlow={cashFlow}
              sumIncome={sumIncome}
              sumExpenses={sumExpenses}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="row text-center mt-5">
          <div className="col-md">
            <Expenses onExpenseChange={handleExpenseChange} />
          </div>
          <div className="col-md">
            <CashRoi
              onOutcomeChange={handleOutcomeChange}
              sumInvestment={sumInvestment}
              annCashFlow={annCashFlow}
              cashRoi={cashRoi}
            />
          </div>
        </div>
      </section>
      <Outcome cashRoi={cashRoi} />
    </div>
  );
}

export default App;
