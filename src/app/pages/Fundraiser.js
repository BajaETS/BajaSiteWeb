import React from "react";
import { Navbar } from "../components/Navbar";
import { MiniLogo } from "../components/MiniLogo";
import Footer from "../components/Footer";

export default function Fundraiser(){
    return(
        <>
            <MiniLogo/>
            <Navbar/>
            <p>Fundraiser</p>
            <Footer/>
        </>
    );
}