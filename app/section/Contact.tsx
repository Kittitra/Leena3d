'use client';

import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='relative w-full h-full flex flex-col mt-[25rem]'>
        <div className='w-full md:h-[75vh] bg-black pt-0 md:px-[17rem] md:pt-[35rem] xl:px-[17rem] xl:pt-20 py-[5rem] flex flex-col md:gap-5 text-white px-10 text-end'>
            <h1 className='font-noto-bold text-2xl md:text-6xl z-10'> 
                ติดต่อเรา
            </h1>
            <p className='font-noto-sans text-xl'>
                หากมีคำถาม
            </p>
        </div>

        <div className='xl:absolute top-[35vh] left-[40vh] p-5 xl:p-0 z-20'>
            <ContactForm />
        </div>

        <div className='absolute w-[35vh] xl:w-[57vh] top-0 md:top-[40vh] md:left-22 xl:left-[50rem] xl:top-[13vh] z-10'>
            <img src='/images/contact-image.png' alt=""  />
        </div>

        <div className='w-full h-screen hidden md:block bg-gray-900 z-10' />
    </section>
  )
}

export default Contact