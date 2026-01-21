import React from "react";
import { VideoHome } from "../../components/VideoHome";
import { HomePageScrollSection } from "../../components/HomePageScrollSection";
import { BajameisterBanner } from "../../components/BajameisterBanner";


export default function HomePage() {
  return (
    <>
      <VideoHome />
      <HomePageScrollSection />
      <BajameisterBanner />
    </>
  );
}
