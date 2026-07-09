"use client";
import { motion } from "motion/react";
import React from "react";

export const SectionReveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <SectionReveal>
    <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      {children}
    </h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
    />
  </SectionReveal>
);
