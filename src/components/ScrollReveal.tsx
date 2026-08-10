"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type VariantType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "fadeIn"
  | "zoomIn"
  | "scaleUp"
  | "slideUp";

interface ScrollRevealProps extends MotionProps {
  children: ReactNode;
  variant?: VariantType;
  delay?: number; // in seconds
  duration?: number; // in seconds
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

// Gentle, luxurious deceleration curve
const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variantsMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 1.25, // Slower, elegant 1.25s duration
  className = "",
  once = true,
  amount = 0.15,
  ...props
}: ScrollRevealProps) {
  const selectedVariant = variantsMap[variant] || variantsMap.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerChildren = 0.16, // Gentle 0.16s gap between elements
  delayChildren = 0.05,
  className = "",
  once = true,
  amount = 0.12,
}: {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  variant = "fadeUp",
  className = "",
}: {
  children: ReactNode;
  variant?: VariantType;
  className?: string;
}) {
  const selectedVariant = variantsMap[variant] || variantsMap.fadeUp;

  return (
    <motion.div
      variants={selectedVariant}
      transition={{ duration: 1.0, ease: LUXURY_EASE }} // 1.0s duration per staggered card
      className={className}
    >
      {children}
    </motion.div>
  );
}
