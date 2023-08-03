import './Link.css';

export default function Link(props) {
    return (
        <a href={props.href} className="link">
            <img src={props.logo} alt={props.name}/>
            <p>{props.name}</p>
        </a>
    );
}