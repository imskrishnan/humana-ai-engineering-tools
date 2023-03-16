import React, { useState } from "react";

import "../public/styles.css";
import Header from "./components/header";
import ButtonNavigation from "./components/buttonNavigation";
import Activity from "./components/activity";

function App() {
  const [activityName, setActivityName] = useState("Help");

  const handleActivityData = (data) => {
    setActivityName(data);
  };

  return (
    <div>
      {/* This renders AI Engineering Tools at the top */}
      <Header />
      <br />

      <div className="container-lg">
        <div className="row">
          {/* Renders the stacked button groups to the left */}
          <ButtonNavigation onData={handleActivityData} />

          {/* Renders the main activity based on the selection made from the button groups */}
          <Activity activity={activityName} />
        </div>
      </div>
    </div>
  );
}

export default App;
