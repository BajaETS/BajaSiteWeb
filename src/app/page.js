"use client";
import React from "react";
import Image from "next/image";
import {Navbar} from "./components/Navbar";
import {VideoHome} from "./components/VideoHome";

export default function Home() {

  return (
    <>
      <Navbar/>
      <VideoHome/>
    </>
  );
}
