import React from 'react';

const ServiceCard = ({ service }) => {
  const { title, description, image } = service;

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img
        src={require(`/images/${image}`).default}
        alt={title}
        className='w-full h-48 object-cover'
      />
      <div className='p-6'>
        <h2 className='text-lg font-bold mb-2'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
