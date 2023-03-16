import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "./button";

/**
 * Component that renders the left side button stack
 */
const ButtonNavigation = ({ onData }) => {
  const [activeButton, setActiveButton] = useState({
    Calculator: false,
    "Cohort Selector": false,
    "SQL Query": false,
    Help: false,
    Back: false
  });

  const handleChildData = (data) => {
    onData(data);
  };

  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <div className="d-grid gap-4">
            <Button
              className={
                activeButton.Calculator
                  ? "btn btn-outline-dark active"
                  : "btn btn-outline-dark"
              }
              name="Calculator"
              onData={handleChildData}
              setter={setActiveButton}
            />
            <Button
              className={
                activeButton[`Cohort Selector`]
                  ? "btn btn-outline-dark active"
                  : "btn btn-outline-dark"
              }
              name="Cohort Selector"
              onData={handleChildData}
              setter={setActiveButton}
            />
            <Button
              className={
                activeButton[`SQL Query`]
                  ? "btn btn-outline-dark active"
                  : "btn btn-outline-dark"
              }
              name="SQL Query"
              onData={handleChildData}
              setter={setActiveButton}
            />
            <Button
              className={
                activeButton.Help
                  ? "btn btn-outline-dark active"
                  : "btn btn-outline-dark"
              }
              name="Help"
              onData={handleChildData}
              setter={setActiveButton}
            />
            <br />
            <Button
              className={
                activeButton.Back
                  ? "btn btn-outline-dark active"
                  : "btn btn-outline-dark"
              }
              name="Back"
              onData={handleChildData}
              setter={setActiveButton}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ButtonNavigation.propTypes = {
  onData: PropTypes.func
};

export default ButtonNavigation;
