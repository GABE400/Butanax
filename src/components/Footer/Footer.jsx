import React from 'react';
import ItemsContainer from './ItemsContainer';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
        <h1
          className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5'
        >
          <span className='text-[#c31432]'>Feel</span> free to contact us
        </h1>
        <div>
          <button
            className='bg-[#c31432] hover:bg-[#800080] duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full'
          >
            <Link to='/contact'>Contact Us</Link>
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
      text-center pt-2 text-gray-300 text-sm pb-8'
      >
        <span className='text-white'>
          © 2023 Created by{' '}
          <a
            href='https://www.techadoltd.com/'
            target='_blank'
            rel='noreferrer'
          >
            Techado
          </a>
        </span>
        <span className='text-white'>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
