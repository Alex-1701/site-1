import './Main.css';
import SideNav from "../SideNav/SideNav";
import Cards from "../Cards/Cards";
import React from "react";
import WindowSize from "../WindowSize";
import Cookies from "js-cookie";

export default function Main() {
    let {size, ref} = WindowSize();
    let isLogged = Cookies.get("logged");
    return (
        <div ref={ref} className="main">
            {
                size > 500 &&
                <SideNav isLogged={isLogged}/>
            }
            <Cards isLogged={isLogged}/>
        </div>
    );
}