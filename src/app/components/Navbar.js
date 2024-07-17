import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

export function Navbar(){
    return(
        <nav id="navbar">
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
    );
}