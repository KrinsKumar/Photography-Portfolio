import React from 'react';
//import images
import WomanImg from '../img/home/woman.png';
//import icons
import { GrLocation } from 'react-icons/gr'
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
import {transition1} from '../transitions'

const Home = () => {
  return <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity:1}} 
      exit={{opacity: 0}} 
      transition={transition1} 
      className='section'
    >
    <motion.div className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <motion.div 
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute  flex flex-col justify-center items-center lg:items-start'
          initial={{opacity: 0, y: '-50%'}} 
          animate={{opacity:1, y: '0'}} 
          exit={{opacity: 0, y: '-50%'}} 
          transition={transition1}
        >
          <h1 className='h1 text-center lg:text-left'>
            Alina Lee <br/>Professional Photographer
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-6 flex flex-row'>
          <GrLocation className='mt-2 mr-2'/> <span>Toronto, CA</span>
          </p>
          <Link to='/contact' className='btn mb-[30px]'>Contact Me!</Link>
        </motion.div>

        <motion.div 
          className='flex justify-end max-h-96 lg:max-h-max overflow-hidden'
          initial={{scale: 0}} 
        animate={{scale: 1}} 
        exit={{scale: 0}} 
        transition={transition1}
        >
          <div>
            <motion.img whileHover={{scale: 1.1}} transition={transition1} src={WomanImg} alt='' />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>;
};

export default Home;
