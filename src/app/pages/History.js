import React from "react";
import { Navbar } from "../components/Navbar";
import { MiniLogo } from "../components/MiniLogo";
import Footer from "../components/Footer";

export default function History(){
    return(
        <>
            <MiniLogo/>
            <Navbar/>
            <p>History</p>
            <Footer/>
        </>
    );
}