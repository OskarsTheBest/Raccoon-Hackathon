import React from "react";

const Result = ({ price, area, img }) => {
  return (
    <div className="result">
      <h1>Analysis Review</h1>
      <div className="result-content">
        <img src={img} />
        <div>
          <p>
            Total Forest Area: <span className="result-text">{area}m2</span>{" "}
          </p>
          <p>
            You only have to pay<span className="result-text">{price}€</span> to get
            notifications in case somebody tries to do illegal deforestation at
            your property
          </p>
        </div>
        <div className="result-btn-container">
          <div className="result-btn result-btn-cancel">
            <span>Cancel</span>
          </div>
          <div className="result-btn">
            <span>Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
