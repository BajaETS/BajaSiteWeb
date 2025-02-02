"use client"
import React, { useState, useRef, useEffect } from 'react';
import Timeline from '../Timeline';
import HistoryYear from '../HistoryYear';

type HistoryYearProps = {
  image: string;
  year: number;
  text: string;
};

export default function HistorySection() {
  const [position, setPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const sections: HistoryYearProps[] = [
    {
      image: '/History/1989.jpg',
      year: 1989,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/1990.jpg',
      year: 1990,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/1992.jpg',
      year: 1992,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/1993.jpg',
      year: 1993,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2001.png',
      year: 2001,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2002.jpg',
      year: 2002,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2003.jpg',
      year: 2003,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2004.jpg',
      year: 2004,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2005.jpg',
      year: 2005,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2006.jpg',
      year: 2006,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2008.jpg',
      year: 2008,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2009.jpg',
      year: 2009,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2010.jpg',
      year: 2010,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2012.png',
      year: 2012,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2013.jpg',
      year: 2013,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2014.jpg',
      year: 2014,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2015.jpg',
      year: 2015,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2016.jpg',
      year: 2016,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2017.jpg',
      year: 2017,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2018.jpg',
      year: 2018,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2019.jpg',
      year: 2019,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2020.jpg',
      year: 2020,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },{
      image: '/History/2022.jpg',
      year: 2022,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollLeft = ref.current.scrollLeft;
        const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        setPosition(scrollPercentage);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (ref.current) {
        ref.current.scrollLeft += event.deltaY;
      }
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
      ref.current.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
        ref.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <>
      <div ref={ref} className="overflow-x-auto no-scrollbar h-full overflow-y-hidden">
        <div className="grid grid-flow-col auto-cols-max gap-10">
          {sections.map(({ image, year, text }) => (
            <HistoryYear key={year} image={image} year={year} text={text} />
          ))}
        </div>
      </div>
      <Timeline position={position} />
    </>
  );
}