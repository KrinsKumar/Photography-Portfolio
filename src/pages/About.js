import React from 'react';
//import images
import WomenImg from '../img/about/woman.png'
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
import {transition1} from '../transitions'

const About = () => {
  return <motion.section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomenImg} alt=''/>
        </div>
        <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className='h1'>About Me</h1>
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
          <Link to={`/portfolio`} className='btn'>View My Work</Link>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default About;
