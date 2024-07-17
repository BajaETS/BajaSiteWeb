"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./Page.css";
import WhatWeDo from "./pages/WhatWeDo";
import Fundraiser from "./pages/Fundraiser";
import Team from "./pages/Team";
import Prizes from "./pages/Prizes";
import Partners from "./pages/Partners";
import History from "./pages/History";


export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="whatwedo" element={<WhatWeDo />} />
        <Route path="fundraiser" element={<Fundraiser />} />
        <Route path="team" element={<Team />} />
        <Route path="prizes" element={<Prizes />} />
        <Route path="partners" element={<Partners />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
