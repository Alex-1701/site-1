import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export function Button({ logo, name, onClick }) {
  return (
    <button type="button" className="btn" onClick={onClick}>
      <img className="btn_img" src={logo} alt={name} />
    </button>
  );
}

Button.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
