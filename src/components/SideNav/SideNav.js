import "./SideNav.css";
import search from "../../img/search.svg";
import Button from "../Button/Button";
import edit from "../../img/edit.svg";
import remove from "../../img/delete.svg";

export default function SideNav(props) {
  let categories = ["Животные", "Автомобили", "Цветы"];
  let side =
    props.isLogged === "false"
      ? categories.map((c) => <div key={c} className="category">{c}</div>)
      : categories.map((c) => (
          <div key={c} className="category">
            {c}
            <div>
              <Button
                logo={edit}
                name="edit"
                logic={() => {
                  alert("edit");
                }}
              />
              <Button
                logo={remove}
                name="remove"
                logic={() => {
                  alert("delete");
                }}
              />
            </div>
          </div>
        ));

  return (
    <div className="side">
      <div className="inputBlock">
        <input type="text" placeholder="Поиск..." className="searchInput" />
        <button
          className="searchBtn"
          onClick={() => {
            alert("search");
          }}
        >
          <img className="searchImg" src={search} alt="search" />
        </button>
      </div>
      {side}
    </div>
  );
}
