import { Card } from '@/components/ui/card'
import React from 'react'

interface CardShowProps {
  title: string
  link: string
  imgUrl: string
}


const ShowCards = ( {title, link, imgUrl}: CardShowProps ) => {
  return (
    <a href={link}>
      <div className='relative overflow-hidden h-fit xl:max-w-[45vh] rounded-xl group cursor-pointer'>
        <img src={imgUrl} alt={title} 
        className=' object-cover transition-all ease-in-out duration-600 group-hover:scale-110 '
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className='absolute opacity-0 font-noto-bold bottom-[100px] left-12 text-xl 
        transition-all duration-500 ease-in-out text-white group-hover:opacity-100 group-hover:-translate-y-2.5 '>
          {title}
        </div>
        <span className='xl:hidden absolute text-white font-noto-bold bottom-[55px] left-12 text-xl'>
          {title}
        </span>
      </div>
    </a>
  )
}

export default ShowCards