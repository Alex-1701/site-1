import './Button.css';

export default function Button({logo, name, logic}) {
    return (
        <button className="btn" onClick={() => {
            logic();
        }}>
            <img className="btn_img" src={logo} alt={name}/>
        </button>
    );
}