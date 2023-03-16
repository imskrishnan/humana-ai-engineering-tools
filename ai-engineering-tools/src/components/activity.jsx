import React from "react";
import PropTypes from "prop-types";

import Calculator from "./calculator";
import CohortSelector from "./cohortSelector";
import SqlQuery from "./sqlQuery";
import Welcome from "./welcome";
import Help from "./help";

const navigationButton = {
  Calculator: <Calculator />,
  "Cohort Selector": <CohortSelector />,
  "SQL Query": <SqlQuery />,
  Help: <Welcome />,
  Back: <Help />
};

// Renders appropriate JSX based on the Activity name passed on from the Activity component
const Activity = ({ activity = "Help" }) => {
  // Renders Calculator Activity
  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">{navigationButton[activity]}</div>
      </div>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.string
};

export default Activity;
