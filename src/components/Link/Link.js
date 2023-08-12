import React from "react";
import "./Link.css";
import PropTypes from "prop-types";

export default function Link({href, logo, name}) {
    return (
        <a href={href} className="links__link">
            <img src={logo} alt={name}/>
            <p>{name}</p>
        </a>
    );
}


Link.propTypes = {
    href: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}