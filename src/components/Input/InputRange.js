import React from "react";
import PropTypes from "prop-types";

const InputRange = (props) => {
  const { text, percentage } = props;

  return (
    <div className="InputRange-wrapper">
      <p className="InputRange-text">{text}</p>
      <div className="InputRange-range">
        <div className="InputRange-process"  style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

InputRange.propTypes = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default InputRange;
