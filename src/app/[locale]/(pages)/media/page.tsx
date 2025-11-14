"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Carousel from "@/app/components/Carousel";
import Page from "@/app/components/Page";

export default function Media() {
  const t = useTranslations('pages.media');

  const arizona2025 = [  "arizona2025/IMG_6342.JPG","arizona2025/IMG_6366.JPG",  "arizona2025/IMG_6373.JPG",  "arizona2025/IMG_6377.JPG",  "arizona2025/IMG_6390.JPG",  "arizona2025/IMG_6392.JPG",  "arizona2025/IMG_6407.JPG",  "arizona2025/IMG_6420.JPG",  "arizona2025/IMG_6426.JPG",  "arizona2025/IMG_6455.JPG",  "arizona2025/IMG_6463.JPG",  "arizona2025/IMG_6486.JPG",  "arizona2025/IMG_6491.JPG",  "arizona2025/IMG_6496.JPG",  "arizona2025/IMG_6551.JPG",  "arizona2025/IMG_6556.JPG",  "arizona2025/IMG_6564.JPG",  "arizona2025/IMG_6565.JPG",  "arizona2025/IMG_6576.JPG",  "arizona2025/IMG_6603.JPG",  "arizona2025/IMG_6604.JPG",  "arizona2025/IMG_6613.JPG",  "arizona2025/IMG_6622.JPG",  "arizona2025/IMG_6625.JPG",  "arizona2025/IMG_6629.JPG",  "arizona2025/IMG_6645.JPG",  "arizona2025/IMG_6649.JPG",  "arizona2025/IMG_6657.JPG",  "arizona2025/IMG_6665.JPG",  "arizona2025/IMG_6672.JPG",  "arizona2025/IMG_6675.JPG",  "arizona2025/IMG_6694.JPG",  "arizona2025/IMG_6969.JPG",  "arizona2025/IMG_6987.JPG",  "arizona2025/IMG_7030.JPG",  "arizona2025/IMG_7031.JPG",  "arizona2025/IMG_7116.JPG",  "arizona2025/IMG_7245.JPG"];
  const maryland2025 = ["maryland2025/IMG_7753.JPG","maryland2025/IMG_7782.JPG","maryland2025/IMG_7793.JPG","maryland2025/IMG_7835.JPG","maryland2025/IMG_7841.JPG","maryland2025/IMG_7851.JPG","maryland2025/IMG_7880.JPG","maryland2025/IMG_7908.JPG","maryland2025/IMG_7933.JPG","maryland2025/IMG_7936.JPG","maryland2025/IMG_8088.JPG","maryland2025/IMG_8137.JPG","maryland2025/IMG_8161.JPG","maryland2025/IMG_8177.JPG","maryland2025/IMG_8181.JPG","maryland2025/IMG_8209.JPG","maryland2025/IMG_8224.JPG","maryland2025/IMG_8284.JPG","maryland2025/IMG_8347.JPG","maryland2025/IMG_8371.JPG","maryland2025/IMG_8381.JPG","maryland2025/IMG_8446.JPG","maryland2025/IMG_8492.JPG","maryland2025/IMG_8579.JPG","maryland2025/IMG_8602.JPG","maryland2025/IMG_8627.JPG","maryland2025/IMG_8647.JPG","maryland2025/IMG_8768.JPG","maryland2025/IMG_8777.JPG"];
  const carolina2025 = [];

  return (
    <Page>
      <Carousel slides={arizona2025}/>
      <Carousel slides={maryland2025}/>
    </Page>
  );
}
