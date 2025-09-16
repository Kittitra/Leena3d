'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { pagesData } from '@/constants'
import Details from '@/app/components/Details';
import BottomImage from '@/app/components/BottomImage';
import Masonry from 'react-masonry-css';

const texture = pagesData[2];
const breakpointColumnsObj = {
  default: 2, // desktop 3 คอลัมน์
  1100: 2,    // จอ <= 1100px เหลือ 2 คอลัมน์
  700: 1      // จอ <= 700px เหลือ 1 คอลัมน์
};

const Texture = () => {
  return (
    <section className='relative w-full min-h-screen h-full bg-gray-100 '>
        <div className='relative w-full h-3/4 overflow-hidden  '>
            <img src="/images/texture-image.jpg" alt="" className='w-full h-screen object-cover ' />
            <div className='absolute inset-0 bg-black opacity-45' />
        </div>

          <div className='absolute top-52 xl:top-[15vh] xl:left-20'>
            <Card className='w-[50vh] xl:w-[65vh] h-full md:pt-42 xl:pt-0 shadow-none p-7 bg-transparent rounded-3xl text-white border-none '>
                <CardHeader>
                    <CardTitle>
                        <h1 className='text-2xl md:text-6xl font-noto-bold'>{texture.title}</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-noto-sans text-sm md:text-lg'>
                        {texture.content}
                    </p>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>

        <Masonry 
            breakpointCols={breakpointColumnsObj}
            className="px-5 xl:px-20 py-24 md:py-[40vh] flex flex-col md:flex-row justify-around w-full h-full gap-10" // container
            columnClassName="masonry-column " // แต่ละคอลัมน
        >
                {texture.images.map((url, index) => (
                    <div key={index} className='w-fit h-fit overflow-hidden rounded-2xl mb-3'>
                        <img src={url} alt="" className='w-fit' />
                    </div>
                ))}
        </Masonry>

        <h1 className='font-noto-bold text-3xl md:text-6xl text-start pl-48 pb-5'>Detail</h1>
        <Details detail={texture.detail} />
        <div className='py-5 xl:py-20' />
        <h1 className='font-noto-bold text-2xl md:text-6xl text-center pb-5'>Usable</h1>
        <Details detail={texture.usable} />


        <BottomImage bottomImage={texture.bottomImage} example={texture.example} />
    </section>
  )
}

export default Texture