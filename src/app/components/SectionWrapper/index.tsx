"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const SectionWrapper = (props: {children: React.ReactNode}) => {
  const { children } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,  margin: "0px 0px -300px 0px"});

  console.log(isInView)

  return (
    <div ref={ref} style={{opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(50px)" }} className="px-12 py-8 flex justify-center m-auto gap-4 flex-col max-w-7xl transition-all duration-300">
      {children}
    </div>
  );
};

export default SectionWrapper;
