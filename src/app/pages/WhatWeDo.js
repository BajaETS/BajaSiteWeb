import React from "react";
import { Navbar } from "../components/Navbar";
import { MiniLogo } from "../components/MiniLogo";
import Footer from "../components/Footer";

export default function WhatWeDo(){
    return(
        <>
            <MiniLogo/>
            <Navbar/>   
            <p>What we do</p>
            <Footer/>
        </>
    );
}