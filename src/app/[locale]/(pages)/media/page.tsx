"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Carousel from "@/app/components/Carousel";
import Page from "@/app/components/Page";

export default function Media() {
  const t = useTranslations('pages.media')
    const slides = [
    "/History/2014.jpg",
    "/History/2015.jpg",
    "/History/2016.JPG",
  ];

  return (
    <Page>
      <div className="h-1/2 p-4">
        <Carousel slides={slides} />
      </div>
    </Page>
  );
}
