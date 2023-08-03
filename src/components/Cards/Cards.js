import './Cards.css';
import Card from "../Card/Card";
import React from "react";

export default function Cards() {
    let cards = [
        {
            path: "/database/Животные/image1.png",
            name: "Барсик"
        },
        {
            path: "/database/Животные/image 5.png",
            name: "Котики"
        },
        {
            path: "./database/Животные/image 3.png",
            name: "Ракета"
        },
        {
            path: "/database/Животные/image 6.png",
            name: "Рыжик"
        },
        {
            path: "/database/Животные/image 4.png",
            name: "Ёж"
        },
        {
            path: "/database/Животные/image 7.png",
            name: "Гав"
        },
    ]
    return (
        <div className="cards">
            {
                cards.map(c => {
                    return (<Card card={c}/>);
                })
            }
        </div>
    );
}