import React from 'react';

//import images
import WomanImg from '../img/home/woman.png';

//import icons
import { GrLocation } from 'react-icons/gr'

//import link
import { Link } from 'react-router-dom';

const Home = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute  flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 text-center lg:text-left'>
            Krins Vaghasia <br/>FullStack Developer
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-6 flex flex-row'>
          <GrLocation className='mt-2 mr-2'/> <span>Toronto, CA</span>
          </p>
          <Link to='/contact' className='btn mb-[30px]'>Contact Me!</Link>
        </div>

        <div className='flex justify-end max-h-96 lg:max-h-max overflow-hidden'>
          <div>
            <img src={WomanImg} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Home;
