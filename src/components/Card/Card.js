import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.card.path} alt={props.card.name}/>
            </div>
            <p>{props.card.name}</p>
        </div>
    );
}