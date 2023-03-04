import React from 'react';
import myImage from '../assets/pesta.png';
import HeroImage from '../components/HeroImage';

const About = () => {
  return (
    <div>
      <HeroImage heading='About Us' text='Get to know us and what we offer!' />
      <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10'>
        <div className='w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row md:items-center mb-8'>
            <img
              src={myImage}
              alt='My Profile'
              className='w-48 h-48 object-cover rounded-full mx-auto md:mx-0 md:mr-8'
            />
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-3xl font-bold mb-2 font-mono'>
                About Butanax Pest Control
              </h1>
              <p className='text-gray-600 text-lg'>
                At Butanax Pest Control, we are committed to providing
                high-quality and effective pest control services to our clients.
                Our team of experienced and licensed pest control professionals
                has the knowledge and expertise necessary to tackle any pest
                problem, from common household pests like ants and cockroaches
                to more specialized pests like termites and bed bugs.
              </p>
            </div>
          </div>
          <div className='text-lg text-gray-600'>
            <p>
              Founded in 2022, Butanax Pest Control has been serving the local
              community for a year now. During this time, we have earned a
              reputation for our exceptional service and attention to detail. We
              believe in taking a proactive approach to pest control, which
              means working with our clients to develop customized treatment
              plans that address their specific pest problems and prevent future
              infestations.
            </p>
            <p>
              At Butanax Pest Control, we use only the safest and most effective
              pest control products and techniques. We are committed to
              protecting both our clients and the environment, which is why we
              use eco-friendly products whenever possible. We also believe in
              transparency when it comes to pricing, which is why we provide
              upfront pricing and no hidden fees.
            </p>
            <p>
              Whether you need residential or commercial pest control services,
              you can trust the team at Butanax Pest Control to provide you with
              the best possible service. Contact us today to schedule a
              consultation and learn more about how we can help you eliminate
              your pest problems for good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
