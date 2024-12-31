import React from "react";

interface HistoryYearProps {
  image: string;
  year: number;
  text: string;
}

export default function HistoryYear({ image, year, text }: HistoryYearProps) {
  const isEven = year % 2 === 0;

  return (
    <div className="flex flex-col items-center max-w-96">
      {isEven ? (
        <>
          <img src={image} alt={`Year ${year}`} className="max-w-full h-auto" />
          <h2 className="text-xl font-bold p-2">{year}</h2>
          <p className="text-base p-4">{text}</p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold p-2">{year}</h2>
          <p className="text-base p-4">{text}</p>
          <img src={image} alt={`Year ${year}`} className="max-w-full h-auto " />
        </>
      )}
    </div>
  );
}