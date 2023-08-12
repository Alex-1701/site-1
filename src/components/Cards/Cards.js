import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import AddImageCard from "../Card/AddImageCard";
import {getAllImages} from "../../services/images";

import "./Cards.css";

export default function Cards(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAllImages().then((res) => {
            console.log(res);
            setImages(res);
        });
    }, []);

    return (
        <div className="cards">
            {images.map((image) => {
                return <Card key={image.url} card={image} isLogged={props.isLogged}/>;
            })}
            <AddImageCard></AddImageCard>
        </div>
    );
}
