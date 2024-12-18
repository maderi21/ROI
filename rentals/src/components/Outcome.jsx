import React from "react";

const Outcome = ({ cashRoi }) => {
  const style = {
    color: cashRoi > 8 ? "blue" : "darkred",
  };

  return (
    <>
      <hr></hr>
      <p>
        An 8% ROI on long-term real estate investing is generally considered a
        solid return, particularly if it's sustained over several years
      </p>
      <p>
        Please keep in mind, the ROI in real estate investing is highly
        dependent on individual strategy, goals, and risk tolerance
      </p>
      <div className="d-flex justify-content-center">
        <h2>Should You Invest?</h2>
      </div>
      <div style={style} className="d-flex justify-content-center fs-3 fw-bold">
        {cashRoi > 8 ? <p>YES!</p> : <p>NO!</p>}
      </div>
    </>
  );
};

export default Outcome;
