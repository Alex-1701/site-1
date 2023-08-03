import './Nav.css';
import logo from '../../img/logo.svg';
import telegram from '../../img/telegram.svg';
import insta from '../../img/insta.svg';
import tiktok from '../../img/tiktok.svg';
import menu from '../../img/Menu.svg';
import Link from "../Link/Link";
import EnterBtn from "../EnterBth/EnterBtn";
import {useEffect, useRef, useState} from "react";
import WindowSize from "../WindowSize";

export default function Nav() {
    let {size, ref} = WindowSize();

    return (
        <nav ref={ref} className="wrapper">
            <div className="wrap">
                {
                    size < 500 &&
                    <img src={menu} className="menu" alt="menu"/>
                }
                <img src={logo} className="logo" alt="vishey.by"/>
                <div className="block">
                    {
                        size > 500 &&
                        <div className="links">
                            {/*TODO Linki поменяй!!!*/}
                            <Link logo={insta} name="vishey.by" href="https://www.instagram.com/"/>
                            <Link logo={telegram} name="vishey.by" href="https://web.telegram.org/k/"/>
                            <Link logo={tiktok} name="vishey.by" href="https://www.tiktok.com/"/>
                        </div>
                    }
                    <EnterBtn/>
                </div>
            </div>
        </nav>
    );
}