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

  const sections : PartnerSection[] = [
    {
      ranking: t('ranking.platinum'),
      height: "auto",
      width: "250px",
      partners: [
        {
          name: "Blaxes",
          image: "/Partners/platinum/Blaxes.png",
          link: "https://blaxes.com",
          message: t("platinum-messages.Blaxes")
        },
        {
          name: "École de technologie supérieure",
          image: "/Partners/platinum/ets.png",
          link: "https://www.etsmtl.ca",
          message: t("platinum-messages.ETS")
        },
        {
          name: "SKF Bearings",
          image: "/Partners/platinum/skf.png",
          link: "https://www.skf.com/ca/en",
          message: t("platinum-messages.SKF")
        },
        {
          name: "Engrenage LB",
          image: "/Partners/platinum/engrenagelb.png",
          link: "https://www.engrenagelb.ca",
          message: t("platinum-messages.EngrenageLB")
        },
        {
          name: "Altium",
          image: "/Partners/platinum/altium.png",
          link: "https://www.altium.com",
          message: t("platinum-messages.Altium")
        }
      ]
    },
    {
      ranking: t('ranking.gold'),
      height: "180px",
      width: "180px",
      partners: [
        {
          name: "BRP",
          image: "/Partners/gold/BRP.png",
          link: "www.brp.com/"
        },
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
          name: "Groupe Fusia",
          image: "/Partners/gold/FusiaGroupe.png",
          link: "https://www.fusia-groupe.com/"
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
          name: "Hutchinson",
          image: "/Partners/gold/hutchinson.png",
          link: "https://www.hutchinsoninc.com/"
        },
        {
          name: "Industrie L",
          image: "/Partners/gold/IndustrieL.png",
          link: "https://www.industrie-l.ca/"
        },
        {
          name: "KISSsoft",
          image: "/Partners/gold/KISSsoft.png",
          link: "https://www.kisssoft.com/en"
        },
        {
          name: "MEGATECH",
          image: "/Partners/gold/megatech.png",
          link: "https://brpmegatech.com/en/"
        },
        {
          name: "Métal CN",
          image: "/Partners/gold/MetalCN.png",
          link: "https://metalcn.ca/"
        },
        {
          name: "Odessa",
          image: "/Partners/gold/odessa.png",
          link: "http://odessacanada.com/"
        },
        {
          name: "Ressorts Liberté",
          image: "/Partners/gold/RessortsLiberte.png",
          link: "https://www.libertyspring.com/?lang=fr"
        },
        {
          name: "Solidworks",
          image: "/Partners/gold/Solidworks.png",
          link: "https://www.solidworks.com/"
        },
        {
          name: "Soucy International",
          image: "/Partners/gold/SoucyInter.png",
          link: "https://www.soucy-group.com/"
        }
      ]
    },
    {
      ranking: t('ranking.silver'),
      height:"150px",
      width:"150px",
      partners: [
        {
          name: "3M",
          image: "/Partners/silver/3M.png",
          link: "https://www.3mcanada.ca/3M/fr_CA/p/"
        },
        {
          name: "Aciers Richelieu",
          image: "/Partners/silver/aciersRichelieu.png",
          link: "https://www.aciers-richelieu.com/"
        },
        {
          name: "Anodisation Expert",
          image: "/Partners/silver/AnodisationExpert.png",
          link: "https://anodisationexpert.com/"
        },
        {
          name: "Anodisation Québec",
          image: "/Partners/silver/anodisationQuebec.png",
          link: "https://www.anodisationquebec.com/"
        },
        {
          name: "Canimex",
          image: "/Partners/silver/Canimex.png",
          link: "https://www.groupecanimex.com/"
        },
        {
          name: "CTA",
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
          name: "Igus",
          image: "/Partners/silver/igus.png",
          link: "https://www.igus.com/"
        },
        {
          name: "Les Joints Étanches R.B.",
          image: "/Partners/silver/JointsEtanchesRB.png",
          link: "https://www.sealsonline.com/rbqc/"
        },
        {
          name: "Kimpex",
          image: "/Partners/silver/kimpex.png",
          link: "https://www.kimpex.com/fr-ca/accueil"
        },
        {
          name: "Lamsi",
          image: "/Partners/silver/lamsi.png",
          link: "https://www.etsmtl.ca/laboratoires/lamsi"
        },
        {
          name: "Laser Amp",
          image: "/Partners/silver/LaserAMP.png",
          link: "https://www.laseramp.com/"
        },
        {
          name: "Loctite",
          image: "/Partners/silver/Loctite.png",
          link: "https://www.loctiteproducts.com/"
        },
        {
          name: "Mec-Tor",
          image: "/Partners/silver/MECTOR.png",
          link: "http://www.mector.ca/"
        },
        {
          name: "Nitrex",
          image: "/Partners/silver/Nitrex.png",
          link: "https://www.nitrex.com/fr/"
        },
        {
          name: "Outils Pierre Berger",
          image: "/Partners/silver/OutilsPB.png",
          link: "https://www.outilspierreberger.com/"
        },
        {
          name: "Prolab Technolub",
          image: "/Partners/silver/prolab.png",
          link: "https://www.prolabtechnolub.com/"
        },
        {
          name: "Rousseau",
          image: "/Partners/silver/rousseau.png",
          link: "https://www.rousseau.com/"
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
          name: "Spaenaur",
          image: "/Partners/silver/spaenaur.png",
          link: "https://www.spaenaur.com/"
        },
        {
          name: "Stageline",
          image: "/Partners/silver/stageline.png",
          link: "https://stageline.com/fr/"
        },
        {
          name: "Tech 53",
          image: "/Partners/silver/Tech53.png",
          link: "https://tech-53.com/"
        },
        {
          name: "Thermetco",
          image: "/Partners/silver/Thermetco.png",
          link: "https://www.thermetco.com/fr/"
        },
        {
          name: "TT Fab 3d",
          image: "/Partners/silver/TTFab3D.png",
          link: "https://www.facebook.com/TTFabrication3D/"
        },
        {
          name: "Usinage FB",
          image: "/Partners/silver/usinageFB.png",
          link: "https://www.usinagefb.com/"
        },
        {
          name: "Vanguard Steel",
          image: "/Partners/silver/vanguardSteel.png",
          link: "https://vanguardsteel.com/"
        },
        {
          name: "Walter",
          image: "/Partners/silver/Walter.png",
          link: "https://www.walter.com/fr_CA"
        }
      ]
    },
    {
      ranking: t('ranking.bronze'),
      height:"100px",
      width:"100px",
      partners: [
        {
          name: "Aux petits moteurs Charette",
          image: "/Partners/bronze/AuxPetitsMoteursCharette.png",
          link: "https://pmcjoliette.ca/"
        },
        {
          name: "Axis Prototypes",
          image: "/Partners/bronze/AxisProto.png",
          link: "https://www.axisproto.com/fr/nos-projets/"
        },
        {
          name: "Campagna Motors",
          image: "/Partners/bronze/campagna.png",
          link: "https://trex.campagnamotors.com/fr/"
        },
        {
          name: "Canevas Design",
          image: "/Partners/bronze/canevasDesign.png",
          link: "https://www.canevasdesign.ca/"
        },
        {
          name: "CK Worldwide",
          image: "/Partners/bronze/CKworldwide.png",
          link: "https://www.ckworldwide.com/"
        },
        {
          name: "Elasto Proxy",
          image: "/Partners/bronze/elastoProxy.png",
          link: "https://www.elastoproxy.com/"
        },
        {
          name: "Gates",
          image: "/Partners/bronze/gates.png",
          link: "https://gates-ca.ptplace.com/home"
        },
        {
          name: "GGB Bearings",
          image: "/Partners/bronze/GGBbearings.png",
          link: "https://www.ggbearings.com/en"
        },
        {
          name: "IFM",
          image: "/Partners/bronze/IFM.png",
          link: "https://www.ifm.com/ca/fr"
        },
        {
          name: "JIT Laser",
          image: "/Partners/bronze/JITLaser.png",
          link: "https://www.jitlaser.com/"
        },
        {
          name: "Prismatic Powders",
          image: "/Partners/bronze/prismaticPowders.png",
          link: "https://www.prismaticpowders.com/"
        }
      ]
    }
  ]

  return (
    <Page>
      <p className="text-center text-5xl font-bebas p-5">{t('title')}</p>
      <div className="flex justify-center">
        <p className="text-center text-xl max-w-3xl pb-10">{t('message')}</p>
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