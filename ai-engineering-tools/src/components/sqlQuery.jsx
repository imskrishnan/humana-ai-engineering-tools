import React, { useState } from "react";

/**
 * SqlQuery component takes input from the Query Text area and displays the
 * query in the Result Text Area.
 */
const SqlQuery = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleDisplayClick = () => {
    setDisplayText(text);
  };

  return (
    <>
      <h2>SQL Query</h2>
      <hr className="border border-dark" />
      <br />

      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label">SQL Query: </label>
        <div className="col-sm-8">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", fontFamily: "monospace" }}
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <label htmlFor="floatingTextarea2"></label>
          </div>
        </div>
      </div>

      <br />
      <div className="mb-3 row">
        <label className="col-sm-4 col-form-label"></label>
        <div className="col-sm-8">
          <button
            onClick={handleDisplayClick}
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
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              style={{ height: "100px" }}
              value={displayText}
              readOnly
              disabled
            ></textarea>
            <label htmlFor="floatingTextarea2Disabled"></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SqlQuery;
