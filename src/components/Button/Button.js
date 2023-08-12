import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({logo, name, logic}) {
    return (
        <button
            type="button"
            className="btn"
            onClick={() => {
                logic();
            }}
        >
            <img className="btn_img" src={logo} alt={name}/>
        </button>
    );
}

Button.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logic: PropTypes.func.isRequired,
};
