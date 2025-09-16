import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { pagesData } from '@/constants'
import Details from '@/app/components/Details';
import BottomImage from '@/app/components/BottomImage';

const animation = pagesData[4];

const Animation = () => {
  return (
    <section className='relative w-full min-h-screen h-full bg-gray-100 '>
        <div className='relative w-full h-3/4 overflow-hidden  '>
            <img src={animation.mainImage} alt="" className='w-full h-screen object-cover ' />
            <div className='absolute inset-0 bg-black opacity-45' />
        </div>

        <div className='absolute top-52 xl:top-[15vh] xl:left-20'>
            <Card className='w-[50vh] xl:w-[65vh] h-full shadow-none p-7 bg-transparent rounded-3xl text-white border-none '>
                <CardHeader>
                    <CardTitle>
                        <h1 className='text-2xl md:text-6xl font-noto-bold'>{animation.title}</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-noto-sans text-sm md:text-lg'>
                        {animation.content}
                    </p>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>

        <div className='px-5 xl:px-20 py-24 md:py-[40vh] flex flex-col xl:flex-row justify-around w-full h-full gap-10 '>
            {animation.images.map((url, index) => (
                <div key={index} className='w-fit xl:h-[50vh] overflow-hidden rounded-2xl'>
                    <img src={url} alt="" className='w-fit' />
                </div>
            ))}
        </div>

        <h1 className='font-noto-bold text-3xl md:text-6xl text-start pl-48 pb-5'>Detail</h1>
        <Details detail={animation.detail} />
        <div className='py-5 xl:py-20' />
        <h1 className='font-noto-bold text-2xl md:text-6xl text-center pb-5'>Usable</h1>
        <Details detail={animation.usable} />


        <BottomImage bottomImage={animation.bottomImage} example={animation.example} />
    </section>
  )
}

export default Animation