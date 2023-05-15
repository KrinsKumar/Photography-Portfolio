import React from 'react';

//import images
import WomanImg from '../img/contact/woman.png'

const Contact = () => {
  return <section className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        <div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>

        </div>
        <div className='lg:flex-1 lg:pt-8 px-4'>
          <h1 className='h1'>Contact Me</h1>
          <p className='mb-12'>If you have any questions or just want to say hello, please feel free to contact me and I will try my best to get back to you!</p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input 
                type='email' 
                placeholder='Your name'
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              />
              <input 
                type='text' 
                placeholder='Your email address'
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              />
            </div>
            <input 
              type='text' 
              placeholder='Your message'
              className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            />
            <button className='btn mb-[30px] mx-auto lg:max-0 self-start'>Send</button>
          </form>
        </div>
        <div className='lg:flex-1 '>
          <img src={WomanImg} alt=''/>
        </div>
      </div>
    </div>
  </section >;
};

export default Contact;
