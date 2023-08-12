import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import AddImageCard from "../Card/AddImageCard";
import {getAllImages} from "../../services/images";

import "./Cards.css";

export default function Cards({isLogged}) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAllImages().then((res) => {
            setImages(res);
        });
    }, []);

    return (
        <div className="cards">
            {
                images.map(image => <Card key={image.url} card={image} isLogged={isLogged}/>)
            }
            <AddImageCard/>
        </div>
    );
}

Cards.propTypes = {
    isLogged: PropTypes.string.isRequired
}