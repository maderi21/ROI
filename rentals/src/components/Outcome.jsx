import React from "react";

const Outcome = ({ cashRoi }) => {
  const style = {
    color: cashRoi > 8 ? "blue" : "darkred",
  };

  return (
    <>
      <hr></hr>
      <div className="d-flex justify-content-center">
        <h2>Should You Invest?</h2>
      </div>
      <div
        style={style}
        className="d-flex justify-content-center fs-3 fw-bold "
      >
        {cashRoi > 8 ? <p>YES!</p> : <p>NO!</p>}
      </div>
    </>
  );
};

export default Outcome;
