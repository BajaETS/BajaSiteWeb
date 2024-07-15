import React from "react";
import {Logo} from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { VideoHome } from "../components/VideoHome";


export default function HomePage(){
    return(
        <>
            <Logo/>
            <Navbar/>
            <VideoHome/>
        </>
    );
}