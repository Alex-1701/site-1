import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import remove from "../../img/delete.svg";

import "./Card.css";

export function Card({ isLogged, card, handleRemove }) {
  return (
    <div className="cards__card">
      {isLogged && (
        <div className="card__wrap">
          <Button
            logo={remove}
            name="remove"
            onClick={() => {
              handleRemove(card);
            }}
          />
        </div>
      )}
      <img className="card__img" src={card.url} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
}

Card.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
