import React from "react";
import Member from "../../../components/Member";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import { TMemberProps } from "@/app/components/Member/inteface";

type TMemberSection = {
  title: string
  members: TMemberProps[]
}

export default function Team() {

  const t = useTranslations('team')

  const sections: TMemberSection[] = [
    {
      title: t('title.management'),
      members: [
        {
          image: "/Team/BlasterSquare.jpg",
          name: "Samuel Leblanc",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.technical-director'),
          nickname: "Blaster",
          linkedin: "https://www.linkedin.com/in/samuel-leblanc-bmw/"
        },
        {
          image: "/Team/Boisvert.jpg",
          name: "Olivier Boisvert",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.powertrain-lead'),
          nickname: "Oli",
          linkedin: "https://www.linkedin.com/in/olivier-boisvert/"
        },
        {
          image: "/Team/Chando.jpg",
          name: "Olivier Chandonnet",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.team-captain'),
          nickname: "Chando",
          linkedin: "https://www.linkedin.com/in/olivier-chandonnet-103404263/"
        },
        {
          image: "/Team/Hubert.jpeg",
          name: "Hubert Moisan-Leduc",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.treasurer'),
          linkedin: "https://www.linkedin.com/in/hubert-moisan-leduc-4ba002293/"
        }
      ]
    },
    {
      title: t('title.team-leads'),
      members: [
        {
          image: "/Team/Lavigne.jpg",
          name: "Samuel Lavigne-Cloutier",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.aerodynamics-lead'),
          nickname: "Lavigne",
          linkedin: "https://www.linkedin.com/in/samuellavigne-cloutier/"
        },
        {
          image: "/Team/Xav.jpg",
          name: "Xavier Vaillancourt",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.machining-lead'),
          nickname: "Xav",
          linkedin: "https://www.linkedin.com/in/xavier-vaillancourt-8924a1242/"
        },
        {
          image: "/Team/MIKA.JPEG",
          name: "Mika Loiselle",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.brakes-lead'),
          linkedin: "https://www.linkedin.com/in/mika-loiselle-ba010b231/"
        },
        {
          image: "/Team/Maxwell.jpg",
          name: "Maxence Lafond",
          program: t('programs.software-engineering'),
          roles: t('roles.electronics-lead'),
          nickname: "Maxwell",
          linkedin: "https://www.linkedin.com/in/maxence-lafond-b211a5218/"
        },
        {
          image: "/Team/Antoine.jpg",
          name: "Antoine Proulx",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.direction-lead'),
          nickname: "BDT",
          linkedin: "https://www.linkedin.com/in/antoine-proulx-884480231/"
        },
        {
          image: "/Team/berp.JPG",
          name: "Charles Grenier",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.cvt-lead'),
          nickname: "Berp",
          linkedin: "https://www.linkedin.com/in/charles-grenier-b45627292/"
        },
        {
          image: "/Team/Leo.JPEG",
          name: "Léo Bazinet",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.suspension-lead'),
          nickname: "Le Roux",
          linkedin: "https://www.linkedin.com/in/léo-bazinet-78165a232/"
        },
        {
          image: "/Team/Annabelle.jpeg",
          name: "Annabelle Gagnon",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.chassis-lead'),
          nickname: "Annacool",
          linkedin: "https://www.linkedin.com/in/annabelle-gagnon-ab8313311/"
        },
        {
          image: "/Team/Kantin.jpeg",
          name: "Justin Desbois",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.driveline-lead'),
          nickname: "Kantin",
          linkedin: "https://www.linkedin.com/in/justin-desbois-043bb9293/"
        },
        {
          image: "/Team/Steph.jpeg",
          name: "Steph Bienvenue",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.ergonomics-lead'),
          linkedin: "https://www.linkedin.com/in/steph-bienvenue-22948b250/"
        },
      ]
    },
    {
      title: t('title.mechanics'),
      members: [
        {
          image: "/Team/PA.JPEG",
          name: "Pierre-Alexis Lachance",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          nickname: "PA",
          linkedin: "https://www.linkedin.com/in/pierre-alexis-lachance-360a51314/"
        },
        {
          image: "/Team/elie.JPG",
          name: "Élie Bazinet",
          program: t('programs.construction-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/company/baja-ets/"
        },
        {
          image: "/Team/dannick.JPEG",
          name: "Danick Rouillier",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          nickname: "The Rock",
          linkedin: "https://www.linkedin.com/in/danick-rouillier-4805a1335/"
        },
        {
          image: "/Team/Maorie.JPEG",
          name: "Maorie Barbeau",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/in/maorie-barbeau-b07292232/"
        },
        {
          image: "/Team/samViens.JPG",
          name: "Samuel Viens",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/company/baja-ets/"
        },
        {
          image: "/Team/Aymerick.JPG",
          name: "Aymeric Bellon",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/in/aymeric-bellon-855b77259/"
        },
        {
          image: "/Team/Adrien.JPEG",
          name: "Adrean Domenko",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/in/adrean-domenko-aa63562b3/"
        },
        {
          image: "/Team/default3.jpeg",
          name: "Jacob Dôme",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          nickname: "J D O M E",
          linkedin: "https://www.linkedin.com/company/baja-ets/"
        },
        {
          image: "/Team/default2.jpeg",
          name: "Samuel Leblanc",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          nickname: "Baby Boss",
          linkedin: "https://www.linkedin.com/company/baja-ets/"
        },
        {
          image: "/Team/default1.jpeg",
          name: "Philip Kilganon-Roy",
          program: t('programs.mechanical-engineering'),
          roles: t('roles.mechanics'),
          linkedin: "https://www.linkedin.com/company/baja-ets/"
        }
      ]
    },
    {
      title: t('title.electronics'),
      members: [
        {
          image: "/Team/Alex.jpeg",
          name: "Alex Maheu",
          program: t('programs.electrical-engineering'),
          roles: t('roles.electronics'),
          linkedin: "https://www.linkedin.com/in/alex-maheu-6382752b5/"
        },
        {
          image: "/Team/oscar.JPG",
          name: "Xavier Orsat-Parker",
          program: t('programs.software-engineering'),
          roles: t('roles.electronics'),
          nickname: "Oscar",
          linkedin: "https://www.linkedin.com/in/xavier-orsat-parker-0b6697251/"
        },
        {
          image: "/Team/Felix.JPEG",
          name: "Félix Desrochers",
          program: t('programs.electrical-engineering'),
          roles: t('roles.electronics'),
          linkedin: "https://www.linkedin.com/in/felix-desrochers-312051193/"
        },
        {
          image: "/Team/default4.jpeg",
          name: "Jérôme Trottier",
          program: t('programs.software-engineering'),
          roles: t('roles.electronics'),
          linkedin: "https://www.linkedin.com/in/jerometrottier/"
        }
      ]
    }
  ]

  return (
    <Page>
      {sections.map((section) => (
        <>
          <h2 className="text-5xl font-bebas mb-0 text-center">{section.title}</h2>
          <div className="flex justify-center items-center">
            <div className="pt-8 pb-24 px-5 md:px-36 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 h-auto overflow-y-auto max-w-screen-2xl">
              {section.members.map(member => (
                <Member
                  image={member.image}
                  name={member.name}
                  program={member.program}
                  roles={member.roles}
                  nickname={member.nickname}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </Page>
  );
}
