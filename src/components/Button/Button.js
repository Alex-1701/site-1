import './Button.css';

export default function Button({logo, name, logic}) {
    return (
        <button className="btn" onClick={() => {
            logic();
        }}>
            <img className="btnImg" src={logo} alt={name}/>
        </button>
    );
}