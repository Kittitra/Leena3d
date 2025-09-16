import { Card } from '@/components/ui/card'
import React from 'react'
import ShowCards from '../components/ShowCards'
import { cardModelTopic } from '@/constants'

const CardShow = () => {
  return (
    <section id='card-show' className='w-full flex flex-col gap-5 px-10  xl:flex xl:flex-row items-center xl:px-50 xl:gap-y-5 md:grid md:grid-cols-3'>
        {cardModelTopic.map((card) => (
          <div key={card.title} className='flex justify-center '>
            <ShowCards title={card.title} link={card.link} imgUrl={card.imgUrl} />
          </div>
        ))}
    </section>
  )
}

export default CardShow