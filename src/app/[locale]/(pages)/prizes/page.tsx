import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Image from "next/image";

type PrizesProps = {
  year: number;
  competitions: Array<{
    title: string;
    date: string;
    results: Array<string>;
    imageUrl: string;
  }>;
};

const Prizes = ({ year, competitions }: PrizesProps) => (
  <section className="my-8 text-center">
    <h2 className="text-2xl font-bold mb-4">{year} Competitions</h2>
    {competitions.map((comp, index) => (
      <div key={index} className="flex flex-col md:flex-row bg-stone-900 rounded-lg shadow-lg mb-6 items-center">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={comp.imageUrl}
            alt={comp.title}
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="p-4 md:w-2/3 text-left">
          <h3 className="text-xl font-semibold mb-2">{comp.title}</h3>
          <p className="mb-2 text-gray-400"><strong>Date:</strong> {comp.date}</p>
          <ul className="list-disc list-inside space-y-1">
            {comp.results.map((result, i) => (
              <li key={i} className="text-gray-300">{result}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
);


export default function PrizesPage() {
  const t = useTranslations('pages');

  const data = [
    {
      year: 2024,
      competitions: [
        {
          title: 'Baja SAE California',
          date: '4/25/2024',
          results: [
            '2nd place overall 927.16 points',
            '3rd place business',
            '3rd place acceleration',
            '2nd place endurance',
            '4th place overall dynamic',
            '3rd place overall static',
          ],
          imageUrl: '/Prizes/cali2024.jpeg',
        },
        {
          title: 'Baja SAE Williamsport',
          date: '4/16/2024',
          results: [
            '1st place overall 915.06 points',
            '2nd place business presentation',
            '2nd place acceleration',
            '3rd place maneuverability',
            '3rd place endurance',
            '2nd place overall dynamic',
            '4th place overall static',
          ],
          imageUrl: '/Prizes/penn2024.jpeg',
        },
        {
          title: 'Baja SAE Michigan',
          date: '9/12/2024',
          results: [
            '1st place overall 983.89 points',
            '2nd place business presentation',
            '2nd place cost event',
            '1st place design',
            '2nd place acceleration',
            '1st place hill climb',
            '2nd place suspension & traction',
            '1st place endurance',
            '1st place overall dynamic',
            '1st place overall static',
          ],
          imageUrl: '/Prizes/mich2024.jpeg',
        },
      ],
    },
    {
      year: 2023,
      competitions: [
        {
          title: 'Baja SAE Oshkosh',
          date: '5/4/2023',
          results: [
            '2nd place overall 874.12 points',
            '2nd place business presentation',
            '1st place design',
            '1st place acceleration',
            '3rd place maneuverability',
            '3rd place endurance',
            '2nd place overall dynamic',
            '1st place overall static',
          ],
          imageUrl: '/Prizes/oshk2023.jpg',
        },
        {
          title: 'Baja SAE Oregon',
          date: '5/31/2023',
          results: [
            '1st place overall 952.87 points',
            '1st place design',
            '1st place acceleration',
            '1st place maneuverability',
            '3rd place hill climb',
            '2nd place rock crawl',
            '3rd place endurance',
            '2nd place overall dynamic',
            '1st place overall static',
          ],
          imageUrl: '/Prizes/oreg2023.jpg',
        },
        {
          title: 'Baja SAE Ohio',
          date: '9/6/2023',
          results: [
            '5th place overall 782.34 points',
            '3rd place cost event',
            '1st place design',
            '1st place acceleration',
            '3rd place suspension',
            '1st place overall static',
          ],
          imageUrl: '/Prizes/ohio2023.jpg',
        },
      ],
    },
    {
      year: 2022,
      competitions: [
        {
          title: 'Baja SAE Tennessee Tech',
          date: '5/12/2022',
          results: [
            '2nd place overall 991.44 points',
            '2nd place cost event',
            '2nd place design',
            '1st place maneuverability',
            '2nd place overall dynamic',
            '2nd place overall static',
          ],
          imageUrl: '/images/2022_tennessee.jpg',
        },
        {
          title: 'Baja SAE Rochester',
          date: '6/2/2022',
          results: [
            '3rd place overall 901.01 points',
            '2nd place cost event',
            '1st place design',
            '2nd place maneuverability',
            '2nd place overall static',
          ],
          imageUrl: '/images/2022_rochester.jpg',
        },
        {
          title: 'Baja SAE Arizona',
          date: '9/29/2022',
          results: [
            '2nd place overall 969.71 points',
            '3rd place cost event',
            '1st place design',
            '1st place maneuverability',
            '2nd place endurance',
            '2nd place overall static',
          ],
          imageUrl: '/images/2022_arizona.jpg',
        },
      ],
    },
    {
      year: 2021,
      competitions: [
        {
          title: 'Baja SAE Knowledge',
          date: '3/18/2021',
          results: ['9th place overall'],
          imageUrl: '/images/2021_knowledge.jpg',
        },
        {
          title: 'OktoBajaFest',
          date: '10/15/2021',
          results: [
            '1st place design',
            '1st place Baja cross',
            '2nd place acceleration',
            '2nd place hill climb',
            '1st place endurance',
          ],
          imageUrl: '/images/2021_oktobajafest.jpg',
        },
      ],
    },
    {
      year: 2020,
      competitions: [
        {
          title: 'Baja SAE Arizona',
          date: '4/16/2020',
          results: [
            '9th place overall',
            '2nd place cost event',
            '4th place overall dynamic',
          ],
          imageUrl: '/images/2020_arizona.jpg',
        },
        {
          title: 'Baja SAE Louisville',
          date: '5/14/2020',
          results: [
            '7th place overall',
            '2nd place cost event',
            '3rd place overall dynamic',
            '3rd place overall static',
          ],
          imageUrl: '/images/2020_louisville.jpg',
        },
        {
          title: 'Baja SAE Illinois',
          date: '6/3/2020',
          results: [],
          imageUrl: '/images/2020_illinois.jpg',
        },
      ],
    },
    {
      year: 2019,
      competitions: [
        {
          title: 'Baja SAE Tennessee Tech',
          date: '4/11/2019',
          results: [
            '3rd place overall 881.62 points',
            '2nd place cost event',
            '2nd place design',
            '2nd place maneuverability',
            '3rd place endurance',
            '1st place overall static',
          ],
          imageUrl: '/images/2019_tennessee.jpg',
        },
        {
          title: 'Baja SAE California',
          date: '5/16/2019',
          results: [
            '4th place overall 830.74 points',
            '1st place business presentation',
            '1st place cost event',
            '3rd place design',
            '3rd place acceleration',
            '2nd overall dynamic',
            '1st overall static',
          ],
          imageUrl: '/images/2019_california.jpg',
        },
        {
          title: 'Baja SAE Rochester',
          date: '6/6/2019',
          results: [
            '2nd place overall',
            '1st place cost event',
            '1st place design',
            '2nd place endurance',
            '1st place overall static',
          ],
          imageUrl: '/images/2019_rochester.jpg',
        },
      ],
    },
  ];

  return (
    <Page>
      <h1 className="text-3xl font-bold text-center mb-8">{t('prizes.title')}</h1>
      {data.map((entry, index) => (
        <Prizes key={index} year={entry.year} competitions={entry.competitions} />
      ))}
      <p className="text-center mt-8 text-gray-400">
        {t('prizes.footer')} <a href="https://www.bajasae.net/res/ResultsLanding.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Baja SAE Results</a>
      </p>
    </Page>
  );
}
