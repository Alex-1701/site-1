import './SideNav.css';
import search from '../../img/search.svg';

export default function SideNav() {
    let categories = ["Животные", "Автомобили", "Цветы"];
    return (
        <div className="side">
            <div className="inputBlock">
                <input type="text" placeholder="Поиск..." className="searchInput"/>
                <button className="searchBtn" onClick={() => {
                    alert("Я КНОПКА ПОИСКА)))\nа ты нет");
                }}>
                    <img className="searchImg" src={search} alt="search"/>
                </button>
            </div>
            {categories.map(c => (
                <div className="category">{c}</div>
            ))}
        </div>
    );
}