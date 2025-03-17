"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      transition={{ duration: 0.5 }}
      className="px-12 py-8 flex justify-center m-auto gap-4 flex-col max-w-7xl"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
