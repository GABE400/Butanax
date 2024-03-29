import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TheGuy from '../../assets/step-search.png';
import './style.css';

const SectionOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '100vw' });
    }
  });
  return (
    <section className='relative'>
      <div ref={ref} className='custom-shape-divider-top-1677970800'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div
        className='
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-2/3 -translate-y-1/4
    '
      >
        <motion.img
          animate={animation}
          src={TheGuy}
          alt='search image'
          className='max-w-none h-fit lg:h-[35rem] w-screen pl-20 md:w-auto'
        />
      </div>
    </section>
  );
};

export default SectionOne;
