'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { showcaseData } from '@/constants'
import React from 'react'
import ShowCastExp from '../components/models/showcast-models/ShowcastWrap';


const Texture = showcaseData[0];
const uv = showcaseData[2];
const node = showcaseData[3];
const rig = showcaseData[4];


const Showcase = () => {
  return (
    <section className='text-white mt-[110vh] w-full min-h-screen'>
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col text-center xl:w-[100vh] gap-5'>
          <h1 className='font-noto-bold text-2xl md:text-5xl'>
            องค์ประกอบโมเดล
          </h1>
          <p className='font-noto-sans text-sm md:w-[50vh] xl:w-fit md:text-lg px-5 md:px-0 '>การนำ mesh ไปผ่านกระบวนการต่างๆ เช่นการ Texture piant, UVmap, Geometry Nodes และ rig and weightpaint จนออกมาเป็น model ที่ต้องการ</p>
        </div>

        <div className='w-full flex-col xl:flex-none px-5 items-center justify-center gap-5 md:gap-0 h-full md:relative mt-40 z-20 overflow-visible'>
          <div className='xl:absolute left-0 xl:left-[35vh] top-0 z-10 mb-10'>
            <FloatCard title={Texture.title} content={Texture.content} footerLink={Texture.footerLink} />
          </div>

          <div className='xl:absolute right-[25vh] top-0 mb-10 xl:mb-0'>
            <FloatCard title={uv.title} content={uv.content} footerLink={uv.footerLink} />
          </div>

          <div className='xl:absolute right-[35vh] top-[55vh] mb-10'>
            <FloatCard title={rig.title} content={rig.content} footerLink={rig.footerLink} />
          </div>

          <div className='xl:absolute left-[25vh] top-[65vh] mb-10'>
            <FloatCard title={node.title} content={node.content} footerLink={node.footerLink} />
          </div>

        </div>

        <figure>
          <div className='h-[55vh] w-[90vw] xl:w-[105vh] xl:h-[125vh] xl:mt-[-5rem] rounded-4xl'>
            <ShowCastExp />
          </div>
        </figure>

      </div>
    </section>
  )
}

export default Showcase


type Props = {
  title: string
  content: string
  footerLink: string
}

const FloatCard = (props: Props) => {
  return (
    <Card className='flex justify-center items-center  w-fit md:w-full xl:w-[35vh] px-0 py-12 bg-black text-white'>
      <CardHeader className='w-full'>
        <CardTitle>
          <h1 className='font-noto-bold md:text-lg'>
            {props.title}
          </h1>
        </CardTitle>
      </CardHeader>
      <CardContent className='text-sm font-noto-sans'>
        {props.content}
      </CardContent>
      <CardFooter>
        <a href={props.footerLink} className='cursor-pointer text-sm transition-all duration-200 ease-in-out hover:text-orange-300' target='_blank'>
          ข้อมูลเพิ่มเติมที่ blender.org
        </a>
      </CardFooter>
    </Card>
  )
}
