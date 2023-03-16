import React, { useState } from "react";

/**
 * Cohort Selector component selects the LOB and the condition and outputs the text
 * in the result text area
 */
const CohortSelector = () => {
  const [selectedOption, setSelectedOption] = useState("Medicare");
  const [radioOption, setRadioOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioOption(e.target.value);
  };

  return (
    <>
      <h2>Cohort Selector</h2>
      <hr className="border border-dark" />
      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Line of Business: </label>
        <div className="col-sm-8">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Medicare">Medicare</option>
            <option value="Medicaid">Medicaid</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Condition: </label>
        <div className="col-sm-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOption"
              id="radio1"
              value="Sample"
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="radio1">
              Sample
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOption"
              id="radio2"
              value="All"
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="radio2">
              All
            </label>
          </div>
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Result: </label>
        <div className="col-sm-8">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              style={{ height: "100px" }}
              value={`Line of Business: ${selectedOption}\nCondition: ${radioOption}`}
              disabled
            ></textarea>
            <label htmlFor="floatingTextarea2Disabled"></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CohortSelector;
