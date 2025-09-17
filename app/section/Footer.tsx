'use client';

import { footerLinks, footerNav } from '@/constants'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
    const params = usePathname();
  return (
    <section id='footer' className='relative flex flex-col w-full bg-gray-200 h-[75vh] md:pt-[20rem] pb-5 md:px-20 xl:px-36 overflow-hidden'>
        <div className='absolute top-0 md:top-0 xl:top-[-5vh] xl:right-[10vh] w-[50vh] md:w-[75vh] '>
            <img src="/images/footer-image.png" alt="" className='w-full h-full object-cover'/>
            <div className='absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent' />
        </div>

        <div className='flex flex-col md:flex-row gap-20 md:gap-0 justify-center items-center w-full h-full z-10'>
            <div className='flex flex-col gap-5 w-4/5'>
                <h1 className='font-noto-bold text-4xl'>Logo</h1>
                <span className='font-noto-sans text-sm'>
                    สร้างผลงานที่น่าสนใจด้วยโมเดลสามมิติ
                </span>
            </div>

            <div className='flex flex-row gap-10 justify-around w-full md:text-2xl'>
                {params != '/' ? '' : (
                    <div className='flex flex-col gap-1'>
                        {footerNav.map((nav) => (
                            <a href={nav.link} key={nav.title} className='transition-all duration-200 ease-in-out hover:-translate-y-1'>
                                <span className='font-noto-sans text-sm'>
                                    {nav.title}
                                </span>
                            </a>
                        ))}
                    </div>
                )}
                <div className='flex flex-col gap-1'>
                    {footerLinks.map((nav) => (
                        <a href={nav.url} key={nav.title} target='_blank' className='flex gap-1 
                        transition-all duration-200 ease-in-out hover:-translate-y-1'>
                            <span>
                                <nav.icon />
                            </span>
                            <span className='font-noto-sans text-sm'>
                                {nav.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        
        <span className='font-noto-sans text-sm text-end mr-[-5rem] text-grey-500 z-10'>
            © 2025 .Logo All rights reserved
        </span>
    </section>
  )
}

export default Footer