import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage';
import BirdBugs from '../assets/img/1.png';
import Rats from '../assets/img/2.jpg';
import Cockroaches from '../assets/img/3.jpg';
import Mattress from '../assets/img/4.jpg';
import Flies from '../assets/img/5.jpg';
import Lawn from '../assets/img/6.jpg';
import Mosquito from '../assets/img/7.png';
import Termites from '../assets/img/8.jpg';

const Services = () => {
  return (
    <div>
      <HeroImage
        heading='Our Services'
        text='Welcome to our pest control services!'
      />
      <div className='parent-div grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10 sm:mx-10'>
        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={BirdBugs} alt='Bed bugs' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Bed Bugs Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Bed bugs are small, reddish-brown insects that feed on human and
              animal blood. They are a nuisance pest and can cause discomfort
              and anxiety in their hosts.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Rats} alt='Rats' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Rats Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Rats are a common household pest that can cause damage to property
              and carry diseases.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Cockroaches} alt='Cockroaches' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Cockroaches Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Cockroaches are a common household pest that can contaminate food
              and spread disease.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Mattress} alt='Mattress' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Mattress Deep Cleaning</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Deep cleaning your mattress is an important part of maintaining
              its hygiene and extending its lifespan.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Flies} alt='Flies' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Flies Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Flies are a common household pest that can contaminate food and
              spread disease.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Lawn} alt='Lawn' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Lawn Fertilization</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Lawn fertilization is an important part of maintaining a healthy
              and vibrant lawn.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Mosquito} alt='Mosquito' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Mosquito Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Mosquitoes can be a nuisance and can also transmit diseases, so it
              is important to take steps to control them.
            </p>
          </div>
        </div>

        <div className='card w-96 bg-[#bdc3c7] shadow-xl m-2 mx-auto'>
          <figure>
            <img src={Termites} alt='Termites' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-[#2C5364]'>
              <div className='badge badge-natural'>Termites Control</div>
            </h2>
            <p className='text-[#3C3B3F]'>
              Termites are destructive pests that can cause significant damage
              to your home or property.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
