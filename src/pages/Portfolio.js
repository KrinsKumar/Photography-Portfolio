import React from 'react';

//image
import image1 from '../img/portfolio/1.png';
import image2 from '../img/portfolio/2.png';
import image3 from '../img/portfolio/3.png';
import image4 from '../img/portfolio/4.png';

//link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-8 max:w-sm'>
            <strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            voluptatibus quae doloribus quidem voluptatem. Quisquam voluptatum,
            voluptate, quibusdam, quia voluptas quod quos voluptatibus quae
            doloribus quidem voluptatem.s
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            voluptatibus quae doloribus quidem voluptatem. Quisquam voluptatum,
            voluptate, quibusdam, quia voluptas quod quos voluptatibus quae
            doloribus quidem voluptatem.s
          </p>
          <Link to={`/contact`} className='btn mb-[30px] mx-auto lg:mx-0'>Get in touch</Link>
        </div>
        <div className='grid grid-cols-2 lg:gap-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image3} alt=''/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image4} alt=''/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Portfolio;
