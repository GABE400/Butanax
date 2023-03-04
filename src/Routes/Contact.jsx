import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // TODO: Send form data to server
  };

  return (
    <div>
      <HeroImage heading='Contact Us' text='Get in touch with us' />
      <div className='bg-gray-100 min-h-screen py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-10'>
            <div className='bg-[#bdc3c7] rounded-lg shadow-lg p-8'>
              <h2 className='text-lg font-bold mb-4 text-[#3C3B3F] font-mono'>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label
                    htmlFor='name'
                    className='block text-[#2C5364] font-bold mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full border border-gray-300 rounded px-4 py-2 leading-tight focus:outline-none focus:shadow-outline'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='email'
                    className='block text-[#2C5364] font-bold mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full border border-gray-300 rounded px-4 py-2 leading-tight focus:outline-none focus:shadow-outline'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='message'
                    className='block  text-[#2C5364] font-bold mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    className='w-full border border-gray-300 rounded px-4 py-2 leading-tight focus:outline-none focus:shadow-outline'
                    rows='5'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  className='bg-[#3C3B3F] hover:bg-[#3A6073] text-white hover:text-[#E9E4F0] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='bg-[#bdc3c7] rounded-lg shadow-lg p-8'>
              <h2 className='text-lg font-bold mb-4 text-[#3C3B3F] font-mono'>
                Get in touch
              </h2>
              <p className='mb-4  text-[#2C5364]'>
                If you need pest control services for your home or business,
                it's important to choose a reliable and experienced company that
                can effectively address your pest problems. You may want to
                reach us via phone, email, or through our website's contact form
                to request a consultation or to schedule a service appointment.
                When contacting us, be sure to provide as much information about
                your pest problem as possible, including the type of pest, the
                location and severity of the infestation, and any other relevant
                details. This will help us to better understand your needs and
                provide you with an accurate quote for our services.
                Additionally, don't be afraid to ask any questions you may have
                about our methods, experience, and pricing to ensure that you're
                comfortable with our approach before hiring us to handle your
                pest control needs. If you have any questions or concerns,
                please don't hesitate to contact us. We're always here to help.
              </p>
              <ul className='list-disc ml-8'>
                <li className='mb-2  text-[#2C5364]'>
                  <span className='font-bold  text-[#800080]'>Phone:</span> +260
                  979 676 566
                </li>
                <li className='mb-2  text-[#2C5364]'>
                  <span className='font-bold  text-[#800080]'>Email: </span>
                  browntancy@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
