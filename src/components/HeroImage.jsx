import React, { Component } from 'react';

export class HeroImage extends Component {
  render() {
    return (
      <div
        className='hero min-h-50'
        style={{
          backgroundImage: `url("/src/assets/bg.jpg")`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>{this.props.heading}</h1>
            <p className='mb-5'>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;
