import React from 'react'

interface Info {
//   title: string;
//   content: string;
//   mainImage: string;
//   images: string[];
//   bottomImage: string;
  detail: string[];
//   usable: string[];
//   example: string;
}

const Details: React.FC<Info> = ({detail}) => {
  return (
        <div className='flex flex-col px-20 w-full h-full items-center border border-black '>
            <div className='flex flex-row gap-5 md:gap-20 py-[15vh] flex-wrap'>
                {detail.map((p) => (
                        <p key={p} className='font-noto-sans w-[45vh] text-sm md:text-2xl'>- {p}</p>
                ))}
            </div>
        </div>
  )
}

export default Details