import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerNav.css"

export default function HamburgerNav(){
    return(
        <div id="nav-container-hamburger">
            <Link to="/">
                <button id='cancel'>
                    <img src='/x-white.png' width='25' height='25'></img>
                </button>
            </Link>
            <nav id="navbar-hamburger">
                <ul>
                    <li>
                        <Link to="/whatwedo">What We Do</Link>
                    </li>
                    <li>
                        <Link to="/fundraiser">Fundraiser</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/prizes">Prizes</Link>
                    </li>
                    <li>
                        <Link to="/partners">Partners</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}