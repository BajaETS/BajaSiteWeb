import React from "react";
import { Navbar } from "../components/Navbar";
import "./Team.css"
import { MiniLogo } from "../components/MiniLogo";

export default function Team(){
    return(
        <>
            <MiniLogo/>
            <Navbar/>
            <p>Team</p>
        </>
    );
}