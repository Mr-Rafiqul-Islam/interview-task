import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { IoPlay } from 'react-icons/io5'

function Hero() {
  return (
    <section className='bg-hero bg-cover bg-right'>
      <div className='bg-[rgba(33,22,14,0.6)] pb-[337px] pt-[185px] md:py-[413px]'>
       <Container>
        {/* text content */}
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Heading color='change' pretext={`time to reconnect`} text={`A new vission of comfort`}/>
          <div className="border cursor-pointer w-[88px] h-[88px] rounded-full grid place-content-center group">
            <IoPlay className='text-white text-4xl group-hover:scale-125 transition-all duration-700'/>
          </div>
          <p className='text-[#e3e1e0] font-roboto font-normal text-sm tracking-[4px] uppercase'>Watch the film</p>
        </div>
       </Container>
      </div>
    </section>
  )
}

export default Hero