"use client";
import React from "react";
import {Navbar} from "./components/Navbar";
import {HomePage} from "HomePage"
import { Route } from "react-router-dom";
import "./Home.css";
import { WhatWeDo } from "./components/WhatWeDo";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/whatwedo" element={<WhatWeDo/>}/>
      </Switch>
    </>
  );
}
