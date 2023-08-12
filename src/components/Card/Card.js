import './Card.css';
import Button from "../Button/Button";
import edit from "../../img/edit.svg";
import remove from "../../img/delete.svg";

export default function Card(props) {

    return (
        <div className="card">
            {
                props.isLogged === "true" &&
                (
                    <div className="wrapBtn">
                        <Button logo={edit} name="edit" logic={() => {
                            alert("edit")
                        }}/>
                        <Button logo={remove} name="remove" logic={() => {
                            alert("delete")
                        }}/>
                    </div>
                )
            }
            <div className="image">
                <img src={props.card.url} alt={props.card.name}/>
            </div>
            <p>{props.card.name}</p>
        </div>
    );
}
