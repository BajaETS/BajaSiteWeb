"use client";

import React from "react";
import Member from "../../../components/Member";
import { useTranslations, useMessages } from "next-intl";
import Page from "@/app/components/Page";
import { TMemberProps } from "@/app/components/Member/inteface";

type TMemberSection = {
  title: string
  members: TMemberProps[]
}

export default function Team() {

  const t = useTranslations('team')
  // Load sections from the translation messages (structured data)
  const messages = useMessages() as any;
  const sections = (messages?.team?.sections ?? []) as Array<{
    title: string;
    members: Array<{
      image?: string;
      name: string;
      program?: string; // key under team.programs
      roles?: string; // key under team.roles
      nickname?: string;
      linkedin?: string;
    }>;
  }>;

  return (
    <Page>
      {sections.map((section, sidx) => (
        <React.Fragment key={sidx}>
          <h2 className="text-5xl font-bebas mb-0 text-center">{t(section.title)}</h2>
          <div className="flex justify-center items-center">
            <div className="pt-8 pb-24 px-5 md:px-36 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 h-auto overflow-y-auto max-w-screen-2xl">
              {section.members.map((member, midx) => (
                <Member
                  key={midx}
                  image={member.image ?? ''}
                  name={member.name}
                  program={member.program ? t(member.program) : ''}
                  roles={member.roles ? t(member.roles) : ''}
                  nickname={member.nickname ?? ''}
                  linkedin={member.linkedin ?? ''}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </Page>
  );
}
