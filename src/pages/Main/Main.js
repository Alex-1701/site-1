import "./Main.css";
import React from "react";
import Cookies from "js-cookie";
import SideNav from "../../components/SideNav/SideNav";
import Cards from "../../components/Cards/Cards";

export default function Main() {
    const isLogged = Cookies.get("isLogged") === "true";
    return (
        <div className="main">
            <SideNav isLogged={isLogged}/>
            <Cards isLogged={isLogged}/>
        </div>
    );
}
