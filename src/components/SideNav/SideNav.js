import "./SideNav.css";
import search from "../../img/search.svg";
import Button from "../Button/Button";
import edit from "../../img/edit.svg";
import remove from "../../img/delete.svg";

// eslint-disable-next-line react/prop-types
export default function SideNav({ isLogged }) {
  let categories = ["Животные", "Автомобили", "Цветы"];
  let side =
    isLogged === "false"
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
          type="button"
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
