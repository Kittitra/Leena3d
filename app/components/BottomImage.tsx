import React from 'react'

interface Info {
//   title: string;
//   content: string;
//   mainImage: string;
//   images: string[];
  bottomImage: string;
//   detail: string[];
//   usable: string[];
  example: string;
}

const BottomImage: React.FC<Info> = ({ bottomImage, example}) => {
  return (
    <div className='w-full h-fit relative flex justify-center items-center  '>
        <p className=' font-noto-sans absolute text-center text-sm px-7 xl:px-0 md:text-2xl md:w-[50rem] text-white z-10'>
            {example}
        </p>
        <img src={bottomImage} alt="bootomImage" className='w-full h-[35vh] md:h-full object-cover'/>
        <div className='absolute inset-0 bg-black opacity-45 ' />
    </div>
  )
}

export default BottomImage