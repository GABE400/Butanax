import React from 'react';
import HeroImage from '../components/HeroImage';

const Services = () => {
  return (
    <div>
      <HeroImage
        heading='Our Services'
        text='Welcome to our pest control services!'
      />
      <div className='parent-div grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10'>
        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=1' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=2' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=3' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=4' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=5' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src='https://picsum.photos/400/300?random=6' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              Shoes!
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
