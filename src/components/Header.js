import React from 'react';

//components
import Socials from './Socials';
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav';

//link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
          <Link to={'/'} className='max-w-[200px]'>
            <img src={Logo} alt='logo'/>
          </Link>
          <nav className='hidden lg:flex gap-x-12'>
            <Link to='/' className='text-[#696c6d] hover:text-primary transition'>
              Home
            </Link>
            <Link to='/about' className='text-[#696c6d] hover:text-primary transition'>
              About
            </Link>
            <Link to='/portfolio' className='text-[#696c6d] hover:text-primary transition'>
              Portfolio
            </Link>
            <Link to='/contact' className='text-[#696c6d] hover:text-primary transition'>
              Contact
            </Link>
          </nav>
        </div>
        <Socials />
        <MobileNav />
      </header>
  );
};

export default Header;
