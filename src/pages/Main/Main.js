import "./Main.css";
import SideNav from "../../components/SideNav/SideNav";
import Cards from "../../components/Cards/Cards";
import React from "react";
import WindowSize from "../../components/WindowSize";
import Cookies from "js-cookie";

export default function Main() {
  let { size, ref } = WindowSize();
  let isLogged = Cookies.get("logged");
  return (
    <div ref={ref} className="main">
      {size > 500 && <SideNav isLogged={isLogged} />}
      <Cards isLogged={isLogged} />
    </div>
  );
}
