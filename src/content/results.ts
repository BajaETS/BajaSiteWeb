import type { CompetitionYear } from './types'

/**
 * COMPETITION RESULTS.
 *
 * -- Adding a competition ------------------------------------------------------
 *   1. Find the right year block below (or add a new one at the top).
 *   2. Add a competition: title, date, an optional photo in public/Prizes/, and the results.
 *   3. Run: npm run check
 *
 * -- How a result is written ---------------------------------------------------
 *     { place: 1, category: 'acceleration', medal: 'gold' }
 *
 *   place    A NUMBER, not "1st". The site writes "1st" in English and "1re" in French
 *            from this number, so the two can never disagree. (They used to: three French
 *            results read "3rd" and "2nd" in English on the live site.)
 *   category One of the fixed list in ./types.ts. Using a fixed list is what stops the
 *            same category being spelled four different ways, which had already happened -
 *            the old data had 20 different French spellings for 13 categories.
 *   medal    gold | silver | bronze | other. Controls the coloured bar.
 *   points   Optional score.
 *   detailsKey Optional. Points at a tooltip sentence in the message files, under
 *            pages.prizes.details.<id>. Only add one if there is something to explain.
 *
 * -- Adding a new category -----------------------------------------------------
 *   Add it to ResultCategory in ./types.ts, then add its name under
 *   pages.prizes.categories in BOTH message files. The build fails until you do both.
 *
 * Dates are YYYY-MM-DD and are displayed in the reader's language automatically.
 */
export const COMPETITION_YEARS: CompetitionYear[] = [
  {
    year: 2026,
    competitions: [
      {
        title: 'Baja SAE Oregon',
        date: '2026-05-07',
        image: '/Prizes/oregon2026.jpeg',
        results: [
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 2, category: 'cost', medal: 'silver' },
        ],
      },
      {
        title: 'Baja SAE New York',
        date: '2026-06-11',
        image: '/Prizes/newyork2026.jpeg',
        results: [
          { place: 3, category: 'overall', medal: 'bronze', points: 919.16, detailsKey: 'pages.prizes.details.2026-baja-sae-new-york-overall' },
          { place: 1, category: 'business', medal: 'gold', detailsKey: 'pages.prizes.details.2026-baja-sae-new-york-business' },
          { place: 1, category: 'suspension', medal: 'gold', detailsKey: 'pages.prizes.details.2026-baja-sae-new-york-suspension' },
          { place: 1, category: 'dynamic', medal: 'gold' },
          { place: 2, category: 'static', medal: 'silver' },
          { place: 3, category: 'acceleration', medal: 'bronze' },
          { place: 3, category: 'cost', medal: 'bronze' },
          { place: 3, category: 'design', medal: 'bronze' },
          { place: 3, category: 'climb', medal: 'bronze', detailsKey: 'pages.prizes.details.2026-baja-sae-new-york-climb' },
        ],
      },
    ],
  },
  {
    year: 2025,
    competitions: [
      {
        title: 'Baja SAE Arizona',
        date: '2025-05-01',
        image: '/Prizes/arizona2025.jpg',
        results: [
          { place: 2, category: 'overall', medal: 'silver', points: 918.63, detailsKey: 'pages.prizes.details.2025-baja-sae-arizona-overall' },
          { place: 3, category: 'cost', medal: 'bronze' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 3, category: 'suspension', medal: 'bronze' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 3, category: 'static', medal: 'bronze' },
        ],
      },
      {
        title: 'Baja SAE Maryland',
        date: '2025-06-12',
        image: '/Prizes/maryland2025.jpg',
        results: [
          { place: 5, category: 'overall', medal: 'other', points: 912.64, detailsKey: 'pages.prizes.details.2025-baja-sae-maryland-overall' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 1, category: 'business', medal: 'gold', detailsKey: 'pages.prizes.details.2025-baja-sae-maryland-business' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 3, category: 'design', medal: 'bronze' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
      {
        title: 'Baja SAE Carolina',
        date: '2025-10-02',
        image: '/Prizes/carolina2025.jpg',
        results: [
          { place: 3, category: 'overall', medal: 'bronze', points: 955.37, detailsKey: 'pages.prizes.details.2025-baja-sae-carolina-overall' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 1, category: 'cost', medal: 'gold' },
          { place: 2, category: 'climb', medal: 'silver', detailsKey: 'pages.prizes.details.2025-baja-sae-carolina-climb' },
          { place: 2, category: 'static', medal: 'silver' },
          { place: 3, category: 'dynamic', medal: 'bronze' },
          { place: 3, category: 'endurance', medal: 'bronze' },
        ],
      },
    ],
  },
  {
    year: 2024,
    competitions: [
      {
        title: 'Baja SAE California',
        date: '2024-04-25',
        image: '/Prizes/cali2024.jpeg',
        results: [
          { place: 2, category: 'overall', medal: 'silver', points: 927.16, detailsKey: 'pages.prizes.details.2024-baja-sae-california-overall' },
          { place: 3, category: 'business', medal: 'bronze', detailsKey: 'pages.prizes.details.2024-baja-sae-california-business' },
          { place: 3, category: 'acceleration', medal: 'bronze' },
          { place: 2, category: 'endurance', medal: 'silver' },
          { place: 4, category: 'dynamic', medal: 'other' },
          { place: 3, category: 'static', medal: 'bronze' },
        ],
      },
      {
        title: 'Baja SAE Williamsport',
        date: '2024-04-16',
        image: '/Prizes/penn2024.jpeg',
        results: [
          { place: 1, category: 'overall', medal: 'gold', points: 915.06, detailsKey: 'pages.prizes.details.2024-baja-sae-williamsport-overall' },
          { place: 2, category: 'business', medal: 'silver', detailsKey: 'pages.prizes.details.2024-baja-sae-williamsport-business' },
          { place: 2, category: 'acceleration', medal: 'silver' },
          { place: 3, category: 'maneuverability', medal: 'bronze' },
          { place: 3, category: 'endurance', medal: 'bronze' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 4, category: 'static', medal: 'other' },
        ],
      },
      {
        title: 'Baja SAE Michigan',
        date: '2024-09-12',
        image: '/Prizes/mich2024.jpeg',
        results: [
          { place: 1, category: 'overall', medal: 'gold', points: 983.89, detailsKey: 'pages.prizes.details.2024-baja-sae-michigan-overall' },
          { place: 2, category: 'business', medal: 'silver', detailsKey: 'pages.prizes.details.2024-baja-sae-michigan-business' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 2, category: 'acceleration', medal: 'silver' },
          { place: 1, category: 'climb', medal: 'gold', detailsKey: 'pages.prizes.details.2024-baja-sae-michigan-climb' },
          { place: 2, category: 'suspension', medal: 'silver', detailsKey: 'pages.prizes.details.2024-baja-sae-michigan-suspension' },
          { place: 1, category: 'endurance', medal: 'gold' },
          { place: 1, category: 'dynamic', medal: 'gold' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
    ],
  },
  {
    year: 2023,
    competitions: [
      {
        title: 'Baja SAE Oshkosh',
        date: '2023-05-04',
        results: [
          { place: 2, category: 'overall', medal: 'silver', points: 874.12, detailsKey: 'pages.prizes.details.2023-baja-sae-oshkosh-overall' },
          { place: 2, category: 'business', medal: 'silver', detailsKey: 'pages.prizes.details.2023-baja-sae-oshkosh-business' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 3, category: 'maneuverability', medal: 'bronze' },
          { place: 3, category: 'endurance', medal: 'bronze' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
      {
        title: 'Baja SAE Oregon',
        date: '2023-05-31',
        image: '/Prizes/oreg2023.jpg',
        results: [
          { place: 1, category: 'overall', medal: 'gold', points: 952.87, detailsKey: 'pages.prizes.details.2023-baja-sae-oregon-overall' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 1, category: 'maneuverability', medal: 'gold' },
          { place: 3, category: 'climb', medal: 'bronze', detailsKey: 'pages.prizes.details.2023-baja-sae-oregon-climb' },
          { place: 2, category: 'rocks', medal: 'silver', detailsKey: 'pages.prizes.details.2023-baja-sae-oregon-rocks' },
          { place: 3, category: 'endurance', medal: 'bronze' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
      {
        title: 'Baja SAE Ohio',
        date: '2023-09-06',
        image: '/Prizes/ohio2023.jpg',
        results: [
          { place: 5, category: 'overall', medal: 'other', points: 782.34, detailsKey: 'pages.prizes.details.2023-baja-sae-ohio-overall' },
          { place: 3, category: 'cost', medal: 'bronze' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 1, category: 'acceleration', medal: 'gold' },
          { place: 3, category: 'suspension', medal: 'bronze', detailsKey: 'pages.prizes.details.2023-baja-sae-ohio-suspension' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
    ],
  },
  {
    year: 2022,
    competitions: [
      {
        title: 'Baja SAE Tennessee Tech',
        date: '2022-05-12',
        image: '/Prizes/tene2022.jpg',
        results: [
          { place: 2, category: 'overall', medal: 'silver', points: 991.44, detailsKey: 'pages.prizes.details.2022-baja-sae-tennessee-tech-overall' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 2, category: 'design', medal: 'silver' },
          { place: 1, category: 'maneuverability', medal: 'gold' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 2, category: 'static', medal: 'silver' },
        ],
      },
      {
        title: 'Baja SAE Rochester',
        date: '2022-06-02',
        image: '/Prizes/roch2022.jpg',
        results: [
          { place: 3, category: 'overall', medal: 'bronze', points: 901.01, detailsKey: 'pages.prizes.details.2022-baja-sae-rochester-overall' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 2, category: 'maneuverability', medal: 'silver' },
          { place: 2, category: 'static', medal: 'silver' },
        ],
      },
      {
        title: 'Baja SAE Arizona',
        date: '2022-09-29',
        results: [
          { place: 2, category: 'overall', medal: 'silver', points: 969.71, detailsKey: 'pages.prizes.details.2022-baja-sae-arizona-overall' },
          { place: 3, category: 'cost', medal: 'bronze' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 1, category: 'maneuverability', medal: 'gold' },
          { place: 2, category: 'endurance', medal: 'silver' },
          { place: 2, category: 'static', medal: 'silver' },
        ],
      },
    ],
  },
  {
    year: 2021,
    competitions: [
      {
        title: 'Baja SAE Knowledge',
        date: '2021-03-18',
        results: [
          { place: 9, category: 'overall', medal: 'other', detailsKey: 'pages.prizes.details.2021-baja-sae-knowledge-overall' },
        ],
      },
      {
        title: 'OktoBajaFest',
        date: '2021-10-15',
        image: '/Prizes/okto2021.jpg',
        results: [
          { place: 1, category: 'design', medal: 'gold' },
          { place: 1, category: 'cross', medal: 'gold' },
          { place: 2, category: 'acceleration', medal: 'silver' },
          { place: 2, category: 'climb', medal: 'silver', detailsKey: 'pages.prizes.details.2021-oktobajafest-climb' },
          { place: 1, category: 'endurance', medal: 'gold' },
        ],
      },
    ],
  },
  {
    year: 2020,
    competitions: [
      {
        title: 'Baja SAE Arizona',
        date: '2020-04-16',
        results: [
          { place: 9, category: 'overall', medal: 'other', detailsKey: 'pages.prizes.details.2020-baja-sae-arizona-overall' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 4, category: 'dynamic', medal: 'other' },
        ],
      },
      {
        title: 'Baja SAE Louisville',
        date: '2020-05-14',
        results: [
          { place: 7, category: 'overall', medal: 'other', detailsKey: 'pages.prizes.details.2020-baja-sae-louisville-overall' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 3, category: 'dynamic', medal: 'bronze' },
          { place: 3, category: 'static', medal: 'bronze' },
        ],
      },
      {
        title: 'Baja SAE Illinois',
        date: '2020-06-03',
        results: [
        ],
      },
    ],
  },
  {
    year: 2019,
    competitions: [
      {
        title: 'Baja SAE Tennessee Tech',
        date: '2019-04-11',
        results: [
          { place: 3, category: 'overall', medal: 'bronze', points: 881.62, detailsKey: 'pages.prizes.details.2019-baja-sae-tennessee-tech-overall' },
          { place: 2, category: 'cost', medal: 'silver' },
          { place: 2, category: 'design', medal: 'silver' },
          { place: 2, category: 'maneuverability', medal: 'silver' },
          { place: 3, category: 'endurance', medal: 'bronze' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
      {
        title: 'Baja SAE California',
        date: '2019-05-16',
        results: [
          { place: 4, category: 'overall', medal: 'other', points: 830.74, detailsKey: 'pages.prizes.details.2019-baja-sae-california-overall' },
          { place: 1, category: 'business', medal: 'gold', detailsKey: 'pages.prizes.details.2019-baja-sae-california-business' },
          { place: 1, category: 'cost', medal: 'gold' },
          { place: 3, category: 'design', medal: 'bronze' },
          { place: 3, category: 'acceleration', medal: 'bronze' },
          { place: 2, category: 'dynamic', medal: 'silver' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
      {
        title: 'Baja SAE Rochester',
        date: '2019-06-06',
        results: [
          { place: 2, category: 'overall', medal: 'silver', detailsKey: 'pages.prizes.details.2019-baja-sae-rochester-overall' },
          { place: 1, category: 'cost', medal: 'gold' },
          { place: 1, category: 'design', medal: 'gold' },
          { place: 2, category: 'endurance', medal: 'silver' },
          { place: 1, category: 'static', medal: 'gold' },
        ],
      },
    ],
  },
]
