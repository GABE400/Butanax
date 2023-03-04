import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("/src/assets/bgUpNN.png")`,
      }}
    >
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            We understand that pests can be a major nuisance and can compromise
            the safety and hygiene of your home. That's why we're here to help.
          </p>
          <button className='btn bg-[#c31432]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
