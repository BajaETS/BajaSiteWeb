import type { HistoryEntry } from './types'

/**
 * THE HISTORY TIMELINE - one entry per year the team has a story for.
 *
 * -- Adding a year -------------------------------------------------------------
 *   1. Put the photo in public/History/.
 *   2. Add a block below. Keep the list newest-first.
 *   3. Write the story itself in BOTH messages/en.json and messages/fr.json, under
 *        pages.history.entries.<year>
 *      The textKey below just points at it. The story is the only part that changes
 *      with language, which is why it is not in this file.
 *   4. Run: npm run check
 *
 * The timeline's start and end years come from the oldest and newest entries here,
 * so the labels at each end of the slider update on their own.
 */
export const HISTORY: HistoryEntry[] = [
  {
    year: 2026,
    image: '/History/2026.jpg',
    textKey: 'pages.history.entries.2026',
  },
  {
    year: 2025,
    image: '/History/2025.JPG',
    textKey: 'pages.history.entries.2025',
  },
  {
    year: 2024,
    image: '/History/2024.jpg',
    textKey: 'pages.history.entries.2024',
  },
  {
    year: 2023,
    image: '/History/2023.jpg',
    textKey: 'pages.history.entries.2023',
  },
  {
    year: 2022,
    image: '/History/2022.JPG',
    textKey: 'pages.history.entries.2022',
  },
  {
    year: 2020,
    image: '/History/2021.jpg',
    textKey: 'pages.history.entries.2020-2021',
  },
  {
    year: 2019,
    image: '/History/2019.jpg',
    textKey: 'pages.history.entries.2019',
  },
  {
    year: 2018,
    image: '/History/2018.jpg',
    textKey: 'pages.history.entries.2018',
  },
  {
    year: 2017,
    image: '/History/2017.JPG',
    textKey: 'pages.history.entries.2017',
  },
  {
    year: 2016,
    image: '/History/2016.JPG',
    textKey: 'pages.history.entries.2016',
  },
  {
    year: 2015,
    image: '/History/2015.jpg',
    textKey: 'pages.history.entries.2015',
  },
  {
    year: 2014,
    image: '/History/2014.jpg',
    textKey: 'pages.history.entries.2014',
  },
  {
    year: 2013,
    image: '/History/2013.JPG',
    textKey: 'pages.history.entries.2013',
  },
  {
    year: 2012,
    image: '/History/2012.png',
    textKey: 'pages.history.entries.2012',
  },
  {
    year: 2011,
    image: '/History/2011.jpg',
    textKey: 'pages.history.entries.2011',
  },
  {
    year: 2010,
    image: '/History/2010.jpg',
    textKey: 'pages.history.entries.2010',
  },
  {
    year: 2009,
    image: '/History/2009.JPG',
    textKey: 'pages.history.entries.2009',
  },
  {
    year: 2008,
    image: '/History/2008.jpg',
    textKey: 'pages.history.entries.2008',
  },
  {
    year: 2006,
    image: '/History/2006.JPG',
    textKey: 'pages.history.entries.2006',
  },
  {
    year: 2005,
    image: '/History/2005.JPG',
    textKey: 'pages.history.entries.2005',
  },
  {
    year: 2004,
    image: '/History/2004.JPG',
    textKey: 'pages.history.entries.2004',
  },
  {
    year: 2003,
    image: '/History/2003.jpg',
    textKey: 'pages.history.entries.2003',
  },
  {
    year: 2002,
    image: '/History/2002.JPG',
    textKey: 'pages.history.entries.2002',
  },
  {
    year: 2001,
    image: '/History/2001.PNG',
    textKey: 'pages.history.entries.2001',
  },
  {
    year: 1993,
    image: '/History/1993.jpg',
    textKey: 'pages.history.entries.1993',
  },
  {
    year: 1992,
    image: '/History/1992.jpg',
    textKey: 'pages.history.entries.1992',
  },
  {
    year: 1989,
    image: '/History/1989.jpg',
    textKey: 'pages.history.entries.1989',
  },
]
