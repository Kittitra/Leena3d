'use client';

import { AboutData } from '@/constants'
import React from 'react'
import TechIcon from '../components/models/about-models/TechIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger)


const About = () => {
  const threejs = AboutData[0];
  const blender =  AboutData[1];



  useGSAP(() => {
      gsap.fromTo('.logo-card', {
          y: 40, 
          opacity: 0,
      },
      {
          y: 0,
          opacity: 1,
          duration: .5,
          ease: 'power2.inOut',
          stagger: 0.3,
          scrollTrigger: {
              trigger: '.show-card',
              start: 'top center',
          }
      })

      gsap.fromTo('.logo-card-1', {
          y: 40, 
          opacity: 0,
      },
      {
          y: 0,
          opacity: 1,
          duration: .5,
          ease: 'power2.inOut',
          stagger: 0.3,
          scrollTrigger: {
              trigger: '.show-card-1',
              start: 'top center',
          }
      })
  })

  return (
    <div id='about' className='w-full h-full pt-[35vh]'>
      <section className=' relative w-full flex flex-col items-center justify-between text-white gap-5'>
        <div className='show-card flex flex-col items-center relative w-full gap-10'>
            <h1 className='text-2xl md:text-5xl font-noto-bold'>
            {threejs.title}
          </h1>
          <p className='z-10 font-noto-sans px-5 md:w-[50vh] md:px-0 text-sm md:text-lg text-center xl:w-[100vh]'>{threejs.paragraph}</p>

          <div className='logo-card absolute w-[75vh] h-[75vh] md:-top-10 md:right-20 xl:right-54'>
            <TechIcon model={threejs.model} />
          </div>
        </div>

        <div className='show-card-1 flex flex-col items-center relative w-full mt-[75vh] gap-10'>
          <h1 className='text-2xl md:text-5xl font-noto-bold'>
            {blender.title}
          </h1>
          <p className='z-10 font-noto-sans px-5 md:px-0 text-sm md:text-lg text-center md:w-[50vh] xl:w-[100vh]'>{blender.paragraph}</p>

          <div className='logo-card-1 absolute w-[75vh] h-[75vh] top-20 md:top-0 md:left-10'>
            <TechIcon model={blender.model} />
          </div>
        </div>

      </section>
    </div>
  )
}

export default About