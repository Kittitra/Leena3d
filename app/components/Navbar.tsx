'use client';

import { navLinks } from '@/constants'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  const params = usePathname();

  const { y: currentScrollY } = useWindowScroll();
  
  const { progress } = useProgress()
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setShow(true);
    }
  } ,[progress])
  
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
    if (params === "/") {
      setShow(progress >= 100)
    } else {
      setShow(true) // ✅ หน้าอื่นให้โชว์ navbar เลย
    }
  }, [progress, params])
  
  return (
    <div ref={navRef} className={`fixed flex items-center w-full h-16 z-[100] transition-all duration-300 ease-in-out ${params != '/' ? 'text-white' : 'text-black'} ${show ? ' block': 'hidden'}` }>
      <header className='absolute w-full px-10'>
        <div className='flex flex-row justify-between '>
          <div>
            <Link href="/">
              <Image src='/images/Logo.png' alt='logo' width={50} height={50} className=' rounded-full' />
            </Link>
          </div>
          {params != "/" ? '' :
          (
            <div className='hidden md:flex flex-row gap-5 items-center '>
              {navLinks.map((link) => (
                <Link href={link.link}  key={link.name}>
                  <span className='link link-underline link-underline-black'>{link.name}</span>
                </Link>
              ))}
            </div>
          )}
          
        </div>
      </header>
    </div>
  )
}

export default Navbar