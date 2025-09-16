'use client';

import { navLinks } from '@/constants'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {}

const Navbar = (props: Props) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  const params = usePathname();

  const { y: currentScrollY } = useWindowScroll();

  
  useEffect(() => {
      if(currentScrollY === 0){
          setIsNavVisible(true);
          navRef.current?.classList.remove('floating-nav');
      }else if(currentScrollY > lastScrollY) {
          setIsNavVisible(false);
          navRef.current?.classList.add('floating-nav');
      }else if(currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          navRef.current?.classList.add('floating-nav');
      }

      setLastScrollY(currentScrollY);

  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
      gsap.to(navRef.current, {
          y: isNavVisible ? 0 : -100,
          opacity: isNavVisible ? 1 : 0,
          duration: 0.2,
      })
  }, [isNavVisible])
  
  return (
    <div ref={navRef} className={`fixed flex items-center w-full h-16 z-[100] transition-all duration-300 ease-in-out ${params != '/' ? 'text-white' : 'text-black'}`}>
      <header className='absolute w-full px-10'>
        <div className='flex flex-row justify-between '>
          <div>
            <a href="/">
              Logo
            </a>
          </div>
          {params != "/" ? '' :
          (
            <div className='hidden md:flex flex-row gap-5 '>
              {navLinks.map((link) => (
                <a href={link.link}  key={link.name}>
                  <span className='link link-underline link-underline-black'>{link.name}</span>
                </a>
              ))}
            </div>
          )}
          
        </div>
      </header>
    </div>
  )
}

export default Navbar