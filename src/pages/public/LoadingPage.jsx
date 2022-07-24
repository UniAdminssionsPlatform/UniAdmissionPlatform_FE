import { motion } from 'framer-motion';
import React from 'react';

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around'
};
const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: '#ffcd33',
  borderRadius: '0.5rem'
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: '0%'
  },
  end: {
    y: '60%'
  }
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut'
};
const LoadingPage = () => (
  <div>
    <div className='fixed  w-full min-h-screen z-50 bg-amber-100 opacity-30' />
    <div className='flex fixed w-full justify-center items-center h-screen'>
      <motion.div style={loadingContainer} variants={loadingContainerVariants} initial='start' animate='end'>
        <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
        <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
        <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      </motion.div>
    </div>
  </div>
);
export default LoadingPage;
