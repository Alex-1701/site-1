import React from "react";
import "./Nav.css";
import Cookies from "js-cookie";
import logo from "../../img/logo.svg";
import telegram from "../../img/telegram.svg";
import insta from "../../img/insta.svg";
import tiktok from "../../img/tiktok.svg";
import menu from "../../img/menu.svg";
import Link from "../Link/Link";
import EnterBtn from "../EnterBth/EnterBtn";

export default function Nav() {
  return (
    <nav className="nav__wrapper">
      <div className="wrapper__wrap">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={menu}
          className="menu"
          alt="menu"
          onClick={() => {
            document.querySelector(".side").classList.toggle("open");
          }}
        />
        <button
          type="button"
          className="wrap__logo"
          onClick={() => {
            window.location.replace("/");
            Cookies.set("logged", false);
          }}
        >
          <img src={logo} className="logo__logo" alt="vishey.by" />
        </button>
        <div className="wrap__block">
          <div className="block__links hide">
            <Link
              logo={insta}
              name="vishey.by"
              href="https://instagram.com/vishey.by?igshid=OGQ5ZDc2ODk2ZA=="
            />
            <Link
              logo={telegram}
              name="vishey.by"
              href="https://t.me/visheyby"
            />
            <Link
              logo={tiktok}
              name="vishey.by"
              href="https://www.tiktok.com/@vishey.by?_t=8ekSjfMfRME&_r=1"
            />
          </div>
          <EnterBtn />
        </div>
      </div>
    </nav>
  );
}
