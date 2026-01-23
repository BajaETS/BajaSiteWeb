"use client";

import React from "react";
import Member from "../../../components/Member";
import { useTranslations, useMessages } from "next-intl";
import Page from "@/app/components/Page";
import { TMemberProps } from "@/app/components/Member/inteface";
import { motion } from "framer-motion";

type TMemberSection = {
  title: string;
  members: TMemberProps[];
};

export default function Team() {
  const t = useTranslations("team");
  // Load sections from the translation messages (structured data)
  const messages = useMessages() as any;
  const sections = (messages?.team?.sections ?? []) as Array<{
    title: string;
    members: Array<{
      image?: string;
      name: string;
      program?: string;
      roles?: string;
      nickname?: string;
      linkedin?: string;
    }>;
  }>;

  return (
    <Page>
      {/* Hero section with animated title */}
      <motion.div
        className="text-center pt-8 pb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bebas text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("page-title")}{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {t("page-title-highlight")}
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t("page-subtitle")}
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="mt-6 mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {sections.map((section, sidx) => (
        <section key={sidx} className="mb-16">
          {/* Animated Section Header */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-primary/10 blur-3xl rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <h2 className="relative text-5xl md:text-6xl font-bebas text-center text-white">
              {/* Decorative brackets */}
              <motion.span
                className="text-primary mr-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {"["}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t(section.title)}
              </motion.span>
              <motion.span
                className="text-primary ml-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {"]"}
              </motion.span>
            </h2>

            {/* Member count badge */}
            <motion.div
              className="flex justify-center mt-3"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="px-4 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                {t("member-count", { count: section.members.length })}
              </span>
            </motion.div>
          </motion.div>

          {/* Members Grid */}
          <div className="flex justify-center items-center">
            <div className="pt-8 pb-12 px-5 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 max-w-screen-2xl">
              {section.members.map((member, midx) => (
                <Member
                  key={midx}
                  index={midx}
                  image={member.image ?? ""}
                  name={member.name}
                  program={member.program ? t(member.program) : ""}
                  roles={member.roles ? t(member.roles) : ""}
                  nickname={member.nickname ?? ""}
                  linkedin={member.linkedin ?? ""}
                />
              ))}
            </div>
          </div>

          {/* Section divider (except for last section) */}
          {sidx < sections.length - 1 && (
            <motion.div
              className="flex justify-center items-center gap-3 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </motion.div>
          )}
        </section>
      ))}

      {/* Footer call to action */}
      <motion.div
        className="text-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 text-sm">
          {t("join-cta")}
        </p>
      </motion.div>
    </Page>
  );
}
