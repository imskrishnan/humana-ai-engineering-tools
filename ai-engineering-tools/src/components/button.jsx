import React from "react";
import PropTypes from "prop-types";

/**
 * Button component that accepts type, className and onClick as props and
 * returns a Button JSX
 */
const Button = ({ onData, name, className, setter }) => {
  const handleClick = (e) => {
    e.target && setter({ [`${name}`]: true });
    onData(name);
  };

  return (
    <button onClick={handleClick} name={name} className={className}>
      {name}
    </button>
  );
};

Button.propTypes = {
  onData: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};

export default Button;
