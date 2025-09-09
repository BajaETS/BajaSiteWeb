"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Partner from "@/app/components/Partner";
import { motion } from "framer-motion";

type PartnerProps = {
  name: string
  image: string
  link: string
  message?: string
}

type PartnerSection = {
  ranking: string
  height: string
  width: string
  partners: PartnerProps[]
}

export default function Media() {
  const t = useTranslations('pages.media')

  return (
    <>
      {t("title")}
    </>
  );
}
