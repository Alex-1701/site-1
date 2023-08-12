import './Card.css';
import Button from "../Button/Button";
import remove from "../../img/delete.svg";

export default function Card(props) {
    return (
        <div className="cards__card">
            {
                props.isLogged === "true" &&
                (
                    <div className="card__wrap">
                        <Button logo={remove} name="remove" logic={() => {
                            alert("delete")
                        }}/>
                    </div>
                )
            }
            <img className="card__img" src={props.card.url} alt={props.card.name}/>
            <p>{props.card.name}</p>
        </div>
    );
}
