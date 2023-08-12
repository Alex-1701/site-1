import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import AddImageCard from "../Card/AddImageCard";
import { IMAGES_COLLECTION, FirestoreApi } from "../../services";

import "./Cards.css";

export default function Cards({ isLogged }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    FirestoreApi.getAll(IMAGES_COLLECTION).then((res) => {
      setImages(res);
    });
  }, []);

  return (
    <div className="cards">
      {images.map((image) => (
        <Card key={image.id} card={image} isLogged={isLogged} />
      ))}
      <AddImageCard />
    </div>
  );
}

Cards.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
