"use client";

import React, { useState } from "react";
import MemberPopup from "../MemberPopup";
import { useTranslations } from "next-intl";
import { TMemberProps } from "./inteface";

export default function Member(props: TMemberProps) {

  const { image, program, roles, nickname, name, linkedin } = props

  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('team')

  return (
    <>
      <div
        className="my-0 mx-auto w-[250px] h-[250px] rounded-full overflow-hidden flex justify-center items-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt="Member" className="w-full h-full object-cover transition-transform hover:scale-110" />
      </div>
      {
        isOpen && (
          <MemberPopup
            onClose={() => setIsOpen(false)}
            image={image}
          >
            <h1 className="text-base font-bold mb-2">{name}</h1>
            <h2>{program}</h2>
            <h2>{t('role')}: {roles}</h2>
            {nickname ? <h2>{t('nickname')}: {nickname}</h2> : null}
            <a className="p-5 flex justify-center"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Footer/linkedInLogoWhite.png" alt="LinkedIn" width="30" height="30" />
            </a>
          </MemberPopup>
        )
      }
    </>
  );
}