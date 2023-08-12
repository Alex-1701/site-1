import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import AddImageCard from "../Card/AddImageCard";
import {
  IMAGES_COLLECTION,
  FirestoreApi,
  CITIES_COLLECTION,
  CATEGORIES_COLLECTION,
} from "../../services";

import "./Cards.css";

export default function Cards(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    FirestoreApi.getAll(IMAGES_COLLECTION).then((res) => {
      setImages(res);
    });
  }, []);

  return (
    <div className="cards">
      {images.map((image) => {
        return <Card key={image.id} card={image} isLogged={props.isLogged} />;
      })}
      <AddImageCard></AddImageCard>
    </div>
  );
}
