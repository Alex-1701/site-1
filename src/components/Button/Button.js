import './Button.css';

export default function Button({logo, name, logic}) {
    return (
        <button type="button" className="btn" onClick={() => {
            logic();
        }}>
            <img className="btnImg" src={logo} alt={name}/>
        </button>
    );
}
