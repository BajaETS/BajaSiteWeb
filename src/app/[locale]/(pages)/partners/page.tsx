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

export default function Partners() {
  const t = useTranslations('partners')

  const openPDF = (url: string) => {
    window.open(url, '_blank');
  }

  const sections: PartnerSection[] = [
    {
      ranking: t('ranking.platinum'),
      height: "auto",
      width: "250px",
      partners: [
        {
          name: "BRP",
          image: "/Partners/platinum/BRP.png",
          link: "https://www.brp.com/"
        },
        {
          name: "Blaxes",
          image: "/Partners/platinum/Blaxes.png",
          link: "https://blaxes.com",
          message: t("platinum-messages.Blaxes")
        },
        {
          name: "OSG",
          image: "/Partners/platinum/osg.png",
          link: "https://osgcanada.com/osg/",
          message: t("platinum-messages.OSG")
        },
        {
          name: "SKF Bearings",
          image: "/Partners/platinum/skf.png",
          link: "https://www.skf.com/ca/en",
          message: t("platinum-messages.SKF")
        },
        // {
        //   name: "École de technologie supérieure",
        //   image: "/Partners/platinum/ets.png",
        //   link: "https://www.etsmtl.ca",
        //   message: t("platinum-messages.ETS")
        // },
        // {
        //   name: "Ressorts Liberté",
        //   image: "/Partners/platinum/RessortsLiberte.png",
        //   link: "https://www.libertyspring.com/?lang=fr",
        //   message: t("platinum-messages.RessortsLiberte")
        // },
        // {
        //   name: "Altium",
        //   image: "/Partners/platinum/altium.png",
        //   link: "https://www.altium.com",
        //   message: t("platinum-messages.Altium")
        // }
      ]
    },
    {
      ranking: t('ranking.gold'),
      height: "180px",
      width: "180px",
      partners: [
        {
          name: "CNC Tracy",
          image: "/Partners/gold/CNCtracy.png",
          link: "https://cnctracy.com"
        },
        {
          name: "Drillmex",
          image: "/Partners/gold/Drillmex.png",
          link: "https://drillmex.com/"
        },
        {
          name: "ESCI",
          image: "/Partners/gold/ESCI.png",
          link: "http://www.engrenage-esci.com/"
        },
        {
          name: "GMN Bearing USA",
          image: "/Partners/gold/GMn.png",
          link: "https://www.gmnbt.com/"
        },
        {
          name: "GMP Friction",
          image: "/Partners/gold/GMPfriction.png",
          link: "https://gmpfriction.com/"
        },
        {
          name: "Engrenage LB",
          image: "/Partners/gold/engrenageslb.png",
          link: "https://engrenagelb.ca/"
        },
        {
          name: "KISSsoft",
          image: "/Partners/gold/KISSsoft.png",
          link: "https://www.kisssoft.com/en"
        },
        {
          name: "SEGGER",
          image: "/Partners/gold/segger.png",
          link: "https://www.segger.com/"
        },
        {
          name: "Cégep de Saint-Laurent",
          image: "/Partners/gold/cstlaurent.png",
          link: ""
        },
        {
          name: "Lotus Design",
          image: "/Partners/gold/lotusdesign.png",
          link: ""
        },
        {
          name: "Rapid Harness",
          image: "/Partners/gold/rapidharness.png",
          link: ""
        },
        // {
        //   name: "BRP",
        //   image: "/Partners/gold/BRP.png",
        //   link: "https://www.brp.com/"
        // },
        // {
        //   name: "Industrie L",
        //   image: "/Partners/gold/IndustrieL.png",
        //   link: "https://www.industrie-l.ca/"
        // },
        // {
        //   name: "Mesotec",
        //   image: "/Partners/gold/mesotec.png",
        //   link: "https://mesotec.ca/"
        // },
        // {
        //   name: "Solidworks",
        //   image: "/Partners/gold/Solidworks.png",
        //   link: "https://www.solidworks.com/"
        // },
        // {
        //   name: "Lenovo Canada",
        //   image: "/Partners/gold/lenovo.png",
        //   link: "https://www.lenovo.com/ca/"
        // }
      ]
    },
    {
      ranking: t('ranking.silver'),
      height: "150px",
      width: "150px",
      partners: [
        {
          name: "Acier Richelieu",
          image: "/Partners/silver/aciersRichelieu.png",
          link: "https://www.aciers-richelieu.com/"
        },
        {
          name: "Amcan Jumax",
          image: "/Partners/silver/amcanjumax.png",
          link: "http://amcanjumax.com/"
        },
        {
          name: "Anodisation Expert",
          image: "/Partners/silver/AnodisationExpert.png",
          link: "https://anodisationexpert.com/"
        },
        {
          name: "Applied Industrial Technologies",
          image: "/Partners/silver/appliedindustrial.png",
          link: ""
        },
        {
          name: "Avaled",
          image: "/Partners/silver/avaled.png",
          link: "http://www.avaled.com/"
        },
        {
          name: "Canimex",
          image: "/Partners/silver/Canimex.png",
          link: "https://www.groupecanimex.com/"
        },
        {
          name: "Castrol",
          image: "/Partners/silver/castrol.png",
          link: "https://www.castrol.com/en_ca/canada/home.html"
        },
        {
          name: "CK Worldwide",
          image: "/Partners/silver/CKworldwide.png",
          link: "https://www.ckworldwide.com/"
        },
        {
          name: "CTA CNC",
          image: "/Partners/silver/CTA.png",
          link: "https://www.cegepmontpetit.ca/cta"
        },
        {
          name: "CVTech-IBC",
          image: "/Partners/silver/CVTech-IBC.png",
          link: "https://cvtech-ibc.com/home/"
        },
        {
          name: "Drill-O-Max",
          image: "/Partners/silver/DrillOMax.png",
          link: "http://drillomax.com/profil_fr.htm"
        },
        {
          name: "Extruflex",
          image: "/Partners/silver/Extruflex.png",
          link: "https://www.extruflex.net/"
        },
        {
          name: "Ferndale Safety",
          image: "/Partners/silver/ferndale.png",
          link: "https://www.ferndalesafety.com/"
        },
        {
          name: "Gene Haas Foundation",
          image: "/Partners/silver/haas.png",
          link: "https://ghaasfoundation.org/content/ghf/en/home.html"
        },
        {
          name: "General Dynamics",
          image: "/Partners/silver/generaldynamics.png",
          link: "https://www.gd.com/"
        },
        {
          name: "Groupe Fusia",
          image: "/Partners/silver/FusiaGroupe.png",
          link: "https://www.fusia-groupe.com/"
        },
        {
          name: "Hutchinson",
          image: "/Partners/silver/hutchinson.png",
          link: "https://www.hutchinsoninc.com/"
        },
        {
          name: "Igus",
          image: "/Partners/silver/igus.png",
          link: "https://www.igus.com/"
        },
        {
          name: "Kimpex",
          image: "/Partners/silver/kimpex.png",
          link: "https://www.kimpex.com/fr-ca/accueil"
        },
        {
          name: "LAMSI",
          image: "/Partners/silver/lamsi.png",
          link: "https://www.etsmtl.ca/laboratoires/lamsi"
        },
        {
          name: "MEGATECH",
          image: "/Partners/silver/megatech.png",
          link: "https://brpmegatech.com/en/"
        },
        {
          name: "Métal CN",
          image: "/Partners/silver/MetalCN.png",
          link: "https://metalcn.ca/"
        },
        {
          name: "Odessa",
          image: "/Partners/silver/odessa.png",
          link: "http://odessacanada.com/"
        },
        {
          name: "Odrive Robotics",
          image: "/Partners/silver/odrive.png",
          link: "https://odriverobotics.com/"
        },
        {
          name: "Ressorts Liberté",
          image: "/Partners/silver/RessortsLiberte.png",
          link: "https://www.libertyspring.com/?lang=fr"
        },
        {
          name: "Sodel",
          image: "/Partners/silver/Sodel.png",
          link: "https://www.sodel.com/"
        },
        {
          name: "Solufab",
          image: "/Partners/silver/Solufab.png",
          link: "https://www.solufab.ca/"
        },
        {
          name: "Soucy International",
          image: "/Partners/silver/SoucyInter.png",
          link: "https://www.soucy-group.com/"
        },
        {
          name: "Stageline",
          image: "/Partners/silver/stageline.png",
          link: "https://stageline.com/fr/"
        },
        {
          name: "Tech-53",
          image: "/Partners/silver/Tech53.png",
          link: "https://tech-53.com/"
        },
        {
          name: "Thermetco",
          image: "/Partners/silver/Thermetco.png",
          link: "https://www.thermetco.com/fr/"
        },
        {
          name: "TT Fabrication 3D",
          image: "/Partners/silver/TTFab3D.png",
          link: "https://www.facebook.com/TTFabrication3D/"
        },
        {
          name: "TS Innovation",
          image: "/Partners/silver/tsinnovation.png",
          link: "https://tsinnovation.ca/en/"
        },
        {
          name: "Walter",
          image: "/Partners/silver/Walter.png",
          link: "https://www.walter.com/fr_CA"
        },
        // {
        //   name: "Anodisation Québec",
        //   image: "/Partners/silver/anodisationQuebec.png",
        //   link: "https://www.anodisationquebec.com/"
        // },
        // {
        //   name: "Centric Iterations",
        //   image: "/Partners/silver/centriciterations.png",
        //   link: "https://www.centriciterations.com/"
        // },
        // {
        //   name: "Laser Amp",
        //   image: "/Partners/silver/LaserAMP.png",
        //   link: "https://www.laseramp.com/"
        // }
      ]
    },
    {
      ranking: t('ranking.bronze'),
      height: "100px",
      width: "100px",
      partners: [
        {
          name: "3M",
          image: "/Partners/bronze/3M.png",
          link: "https://www.3mcanada.ca/3M/fr_CA/p/"
        },
        {
          name: "AFCO",
          image: "/Partners/bronze/afco.png",
          link: "https://www.afcoracing.com/"
        },
        {
          name: "Anodisation Québec",
          image: "/Partners/bronze/anodisationQuebec.png",
          link: "https://www.anodisationquebec.com/"
        },
        {
          name: "Apaulo",
          image: "/Partners/bronze/apaulo.png",
          link: ""
        },
        {
          name: "CTA",
          image: "/Partners/bronze/cta.png",
          link: "https://www.cegepmontpetit.ca/cta"
        },
        {
          name: "Élasto Proxy",
          image: "/Partners/bronze/elastoProxy.png",
          link: "https://www.elastoproxy.com/"
        },
        {
          name: "IFM",
          image: "/Partners/bronze/IFM.png",
          link: "https://www.ifm.com/ca/fr"
        },
        {
          name: "Joints Étanches RB",
          image: "/Partners/bronze/JointsEtanchesRB.png",
          link: "https://www.sealsonline.com/rbqc/"
        },
        {
          name: "Marmen Inc.",
          image: "/Partners/bronze/marmen.png",
          link: ""
        },
        {
          name: "Outils Pierre Berger",
          image: "/Partners/bronze/OutilsPB.png",
          link: "https://www.outilspierreberger.com/"
        },
        {
          name: "Prismatic Powders",
          image: "/Partners/bronze/prismaticPowders.png",
          link: "https://www.prismaticpowders.com/"
        },
        {
          name: "Prolab",
          image: "/Partners/bronze/prolab.png",
          link: "https://www.prolabtechnolub.com/"
        },
        {
          name: "SAMTEC",
          image: "/Partners/bronze/samtec.png",
          link: ""
        },
        {
          name: "Solaxis",
          image: "/Partners/bronze/solaxis.png",
          link: "https://solaxis.ca/"
        },
        {
          name: "Vanguard Steel",
          image: "/Partners/bronze/vanguardSteel.png",
          link: "https://vanguardsteel.com/"
        },
        {
          name: "VR3 Engineering",
          image: "/Partners/bronze/vr3.png",
          link: "https://vr3.ca/"
        },
        // {
        //   name: "CVTech-IBC",
        //   image: "/Partners/bronze/CVTech-IBC.png",
        //   link: "https://cvtech-ibc.com/home/"
        // },
        // {
        //   name: "Campagna Motors",
        //   image: "/Partners/bronze/campagna.png",
        //   link: "https://trex.campagnamotors.com/fr/"
        // },
        // {
        //   name: "Rousseau",
        //   image: "/Partners/bronze/rousseau.png",
        //   link: "https://www.rousseau.com/"
        // },
        // {
        //   name: "Innovair Solutions",
        //   image: "/Partners/bronze/innovair.png",
        //   link: "https://www.innovairsolutions.com/en-ca/default.aspx"
        // },
        // {
        //   name: "Groupe EP",
        //   image: "/Partners/bronze/groupeep.png",
        //   link: "https://www.groupeep.com/"
        // },
        // {
        //   name: "SolidXperts",
        //   image: "/Partners/bronze/solidxperts.png",
        //   link: "https://www.solidxperts.com/"
        // },
        // {
        //   name: "DamiFilms",
        //   image: "/Partners/bronze/damifilms.png",
        //   link: "https://instagram.com/dami.films/"
        // }
      ]
    }
  ]

  return (
    <Page>
      <p className="text-center text-5xl font-bebas p-5">{t('title')}</p>
      <div className="flex justify-center">
        <p className="text-center text-xl max-w-3xl pb-10">{t('message')}</p>
      </div>
      <div className="flex justify-center pb-10">
        <button onClick={openPDF.bind(null, t('portfolio'))} className="bg-primary px-10 py-2 rounded-full font-bebas hover:bg-sky-700 transition-all text-2xl">
          {t('portfolio-button-text')}
        </button>
      </div>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bebas mb-0 text-center">{section.ranking}</h2>
          <div
            className={`pt-8 pb-8 px-5 md:px-36 grid gap-8`}
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(${section.width}, 1fr))`,
              gridAutoRows: `${section.height}`,
            }}
          >
            {section.partners.map((partner) => (
              <div key={partner.name} className="text-center h-auto">
                <Partner
                  name={partner.name}
                  image={partner.image}
                  link={partner.link}
                  height={section.height}
                  width={section.width}
                />
                {partner.message && <p className="mt-2 text-sm">{partner.message}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </Page>
  );
}
