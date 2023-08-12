import "./Main.css";
import SideNav from "../../components/SideNav/SideNav";
import Cards from "../../components/Cards/Cards";
import React from "react";
import Cookies from "js-cookie";

export default function Main() {
    let isLogged = Cookies.get("logged");
    return (
        <div className="main">
            <SideNav isLogged={isLogged}/>
            <Cards isLogged={isLogged}/>
        </div>
    );
}
