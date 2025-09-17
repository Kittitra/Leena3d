'use client';

import React from 'react'
import HeroExp from '../components/models/hero-models/HeroExpWrap'
import { Button } from '@/components/ui/button'
import { IoMdArrowDropdown } from 'react-icons/io'
import gsap from 'gsap';
import CardShow from './CardShow';


const Hero = () => {

  const mouseEnter = () =>{
    gsap.to('.arrow', {
      y: 10,
      opacity: 1
    })
  }

  const mouseLeave = () =>{
    gsap.to('.arrow', {
      y: -1,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.inOut',
      duration: .2
    })
  }

  return (
    <section id='header' className=' overflow-hidden '>
      <div className='flex flex-col relative w-full h-screen xl:flex-row bg-linear-to-b from-[#dae0ec] to-[#d4c6b5]'>
        <div className='flex-col ml-[8.5vh] md:ml-[10vh] w-fit xl:ml-[55vh] pt-[25vh] z-20' >
            <h1 className='text-xl md:text-4xl font-noto-sans font-semibold text-grey-500 '>
                ยินดีต้อนรับ
            </h1>
            <p className='text-sm md:text-lg font-noto-sans pt-3'>ด้วยพลังของ three.js กับ blender <br /> เกิดเป็นสิ่งสุดเท่</p>
            <a href="#card-show">
              <Button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='cursor-pointer rounded-full mt-5 h-fit w-full md:text-xl font-noto-sans transition-all duration-200 ease-in-out hover:-translate-y-1'>
                ลองดู
              </Button>
            </a>
            <span  className='arrow w-full flex-center opacity-0  '>
              <IoMdArrowDropdown size={50} />
            </span>
        </div>
        <figure>
          <div className=' absolute  xl:left-[35vh] top-0 xl:w-[70%] w-full h-full min-h-[50vh] xl:-top-0'>
            <HeroExp />
          </div>
        </figure>
      </div>

      <div className='mt-[-3rem]'>
        <CardShow />
      </div>
    </section>
  )
}

export default Hero