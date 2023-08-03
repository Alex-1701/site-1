import './EnterBtn.css';

export default function EnterBtn() {
    return (
        <button className="button" onClick={() => {
            alert("Я КНОПКА)")
        }}>
            Войти
        </button>
    );
}