import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import Button from "../Button/Button";
import remove from "../../img/delete.svg";

export default function Card({isLogged, card}) {
    return (
        <div className="cards__card">
            {isLogged && (
                <div className="card__wrap">
                    <Button
                        logo={remove}
                        name="remove"
                        logic={() => {

                        }}
                    />
                </div>
            )}
            <img className="card__img" src={card.url} alt={card.name}/>
            <p>{card.name}</p>
        </div>
    );
}

Card.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
}
