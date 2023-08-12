import React from "react";
import PropTypes from "prop-types";
import "./SideNav.css";
import search from "../../img/search.svg";
import Button from "../Button/Button";
import edit from "../../img/edit.svg";
import remove from "../../img/delete.svg";
import Link from "../Link/Link";
import insta from "../../img/insta.svg";
import telegram from "../../img/telegram.svg";
import tiktok from "../../img/tiktok.svg";
import plus from "../../img/plus.svg";

export default function SideNav({isLogged}) {
    const categories = ["Животные", "Автомобили", "Цветы"];

    return (
        <div className="side">
            <div className="side__block">
                <input
                    type="text"
                    placeholder="Поиск..."
                    className="block__search_input"
                />
                <button
                    type="button"
                    className="block__search_btn"
                    onClick={() => {

                    }}
                >
                    <img className="block__search_img" src={search} alt="search"/>
                </button>
            </div>
            {categories.map((c) => (
                <div key={c} className="side__category">
                    <div className="category__block">
                        <p className="category__name">{c}</p>
                    </div>
                    {isLogged && (
                        <div>
                            <Button
                                logo={edit}
                                name="edit"
                                logic={() => {

                                }}
                            />
                            <Button
                                logo={remove}
                                name="remove"
                                logic={() => {

                                }}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className="side__links">
                <Link
                    logo={insta}
                    name="vishey.by"
                    href="https://instagram.com/vishey.by?igshid=OGQ5ZDc2ODk2ZA=="
                />
                <Link logo={telegram} name="vishey.by" href="https://t.me/visheyby"/>
                <Link
                    logo={tiktok}
                    name="vishey.by"
                    href="https://www.tiktok.com/@vishey.by?_t=8ekSjfMfRME&_r=1"
                />
            </div>
            {isLogged && (
                <button type="button" className="btn center">
                    <img src={plus} alt="plus"/>
                </button>
            )}
        </div>
    );
}

SideNav.propsTypes = {
    isLogged: PropTypes.bool.isRequired
}