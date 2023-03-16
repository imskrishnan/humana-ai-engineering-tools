import React from "react";

/**
 * Header component renders the Heading that consists of the text -
 * AI Engineering Tools
 */
const Header = () => {
  return (
    <div
      className="container-lg p-2 border border-dark-subtle rounded"
      style={{ marginTop: "20px" }}
    >
      <nav
        className="navbar justify-content-center"
        style={{ padding: "0px", margin: "0px" }}
      >
        <h2 className="header">AI Engineering Tools</h2>
      </nav>
    </div>
  );
};

export default Header;
