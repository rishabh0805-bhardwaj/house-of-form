/**
 * House Of Form — MotionFadeIn Component
 * Reusable scroll-triggered fade-in and slide-up animation using 'framer-motion'.
 * Applies subtle, premium viewport-triggered entrance effects to images and text blocks.
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionFadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const MotionFadeIn: React.FC<MotionFadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 0.85,
  className = '',
  viewportMargin = '-40px',
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin as any }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Architectural cubic-bezier ease
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
