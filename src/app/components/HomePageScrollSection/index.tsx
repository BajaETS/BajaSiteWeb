import React from "react";
import { useTranslations } from "next-intl";
import SectionWrapper from "../SectionWrapper";

interface TSectionWithText {
  text: string
}

type TSectionTitleProps = TSectionWithText

type TSectionParagraphProps = TSectionWithText


const SectionTitle = (props: TSectionTitleProps) => {

  const {text} = props
  
  return (
    <h2 className="text-left text-6xl font-bebas">
      {text}
    </h2>
  )
}


const SectionParagraph = (props: TSectionParagraphProps) => {

  const {text} = props
  
  return (
    <h2 className="text-left text-lg">
      {text}
    </h2>
  )
}

export function HomePageScrollSection() {

  const t = useTranslations('pages')

  return (
    <div className="text-white bg-black text-center">
      <SectionWrapper>
        <SectionTitle text={t('home.content.who-we-are.title')} />
        <SectionParagraph text={t('home.content.who-we-are.text')}/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle text={t('home.content.research-and-innovation.title')}/>
        <SectionParagraph text={t('home.content.research-and-innovation.text')}/>
      </SectionWrapper>

      {/* Hot fix for second paragraph not showing, empty wrapper to be used as spacing */}
      <SectionWrapper>
        <SectionTitle text=""/>
        <SectionParagraph text=""/>
      </SectionWrapper>
    </div>
  );
};
