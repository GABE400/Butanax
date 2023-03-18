import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionCall from '../../assets/stepstand.png';
import SectionImg from '../../assets/machine.png';
import SectionDoor from '../../assets/home-free.png';

const SectionTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const move = useAnimation();

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
      move.start({
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
      move.start({ x: '100vw' });
    }
  });
  return (
    <section className='pt-96 mt-28 sm:pt-40-c md:mt-0' id='step'>
      <div ref={ref} className='container mx-auto px-4'>
        <hr className='w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5' />

        <motion.h2
          animate={animation}
          className='text-center text-4xl font-semibold py-10 '
        >
          What Butanax offers in terms of services
        </motion.h2>

        <motion.div
          animate={move}
          className='flex flex-col justify-evenly items-center py-10 md:flex-row'
        >
          <div className='text-center mb-10'>
            <img src={SectionCall} alt='image screen' />
          </div>

          <div className='text-center md:text-left'>
            <span className='text-red-500 font-semibold'>Butanax Team</span>

            <h2
              className='
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          '
            >
              Our team of experienced pest control experts offers a wide range
              of services to tackle any pest problem you may have.
            </h2>

            <p className='text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0'>
              From ants, termites, and bed bugs to rodents and wildlife, we have
              the expertise and tools to eliminate them safely and effectively.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={animation}
          className='flex flex-col justify-evenly items-center py-10 md:flex-row'
        >
          <div className='text-center mb-10 order-1 md:order-2'>
            <img src={SectionImg} alt='image screen' className='h-96' />
          </div>

          <div className='text-center md:text-left order-2 md:order-1'>
            <span className='text-red-500 font-semibold'>What we use</span>

            <h2
              className='
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          '
            >
              We use eco-friendly and non-toxic methods to ensure the safety of
              your family and pets while removing pests from your home.
            </h2>

            <p className='text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0'>
              Our team will thoroughly inspect your property to identify the
              source of the infestation and develop a customized treatment plan
              tailored to your specific needs.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={move}
          className='flex flex-col justify-evenly items-center py-10 md:flex-row'
        >
          <div className='text-center mb-10'>
            <img src={SectionDoor} alt='image screen' className='h-auto' />
          </div>

          <div className='text-center md:text-left'>
            <span className='text-red-500 font-semibold'>
              At our pest control services, we prioritize customer satisfaction
              and provide our clients with long-term solutions to prevent future
              pest problems.
            </span>

            <h2
              className='
            text-4xl text-blue-900
            font-bold
            max-w-md
            leading-relaxed
            py-5
          '
            >
              Our goal is to make your home pest-free so that you can enjoy a
              safe and healthy living environment.
            </h2>

            <p className='text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0'>
              Do not let pests take over your home. Contact us today to schedule
              a consultation and get rid of those unwanted guests for good!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
