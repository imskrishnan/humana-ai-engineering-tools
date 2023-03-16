import React, { useState } from "react";

/**
 * Calculator component performs the following operations:
 *  - Addition
 *  - Subtraction
 *  - Multiplication
 *  - Division
 */
const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const DIVISION_BY_ZERO = `Error: Cannot Divide Number by Zero`;

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculation = () => {
    switch (operation) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        if (secondNumber === 0) {
          setResult(DIVISION_BY_ZERO);
        } else {
          setResult(Math.round((firstNumber / secondNumber) * 100) / 100);
        }
        break;
      default:
        setResult(0);
    }
  };

  return (
    <>
      <h2>Calculator</h2>
      <hr className="border border-dark" />
      <br />
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">First Number: </label>
        <div className="col-sm-8">
          <input
            type="number"
            onChange={(e) => {
              setFirstNumber(Number(e.target.value));
            }}
            className="form-control"
            id="inputFirstNumber"
          />
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Second Number: </label>
        <div className="col-sm-8">
          <input
            type="number"
            className="form-control"
            id="inputSecondNumber"
            onChange={(e) => setSecondNumber(Number(e.target.value))}
          />
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Calculation: </label>
        <div className="col-sm-8">
          <select
            value={operation}
            onChange={handleOperationChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label"></label>
        <div className="col-sm-8">
          <button
            onClick={handleCalculation}
            type="button"
            className="btn btn-outline-dark col-6"
          >
            Run
          </button>
        </div>
      </div>

      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">Result: </label>
        <div className="col-sm-8">
          <input
            value={result}
            className="form-control"
            type="text"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </div>
      </div>

      <br />
    </>
  );
};

export default Calculator;
