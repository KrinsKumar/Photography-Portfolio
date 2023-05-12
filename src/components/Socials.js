import React from 'react';
//icons
import { ImGithub, ImLinkedin,  } from 'react-icons/im';


const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li className=''><a target='_blank' href='https://www.linkedin.com/in/krins/'>
          <ImLinkedin className='text-3xl text-primary hover:text-[#0a63bc] transition' />
        </a></li>
        <li className=''><a target='_blank' href='https://github.com/KrinsKumar'>
          <ImGithub className='text-3xl text-primary hover:text-[#696c6d] transition' />
        </a></li>
      </ul>
    </div>
  );
};

export default Socials;
