import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Header.css';

const Header = () => {
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
      animation.start({ x: '-100vw' });
    }
  });
  return (
    <div
      ref={ref}
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("/src/assets/bgUpNN.png")`,
      }}
    >
      <div className='hero-content text-center text-neutral-content'>
        <motion.div animate={animation} className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            We understand that pests can be a major nuisance and can compromise
            the safety and hygiene of your home. That's why we're here to help.
          </p>
          <button className='btn bg-[#c31432]'>
            <a href='#step'>Get Started</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
