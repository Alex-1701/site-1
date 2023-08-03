import './Main.css';
import SideNav from "../SideNav/SideNav";
import Cards from "../Cards/Cards";
import React from "react";
import WindowSize from "../WindowSize";

export default function Main() {
    let {size, ref} = WindowSize();

    return (
        <div ref={ref} className="main">
            {
                size > 500 &&
                <SideNav/>
            }
            <Cards/>
        </div>
    );
}