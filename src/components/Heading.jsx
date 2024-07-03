import React from 'react'
import TitleLine from './TitleLine'
// import titleLine from '../assets/title_line.svg'

function Heading({color,pretext,text}) {
  return (
    <div className='flex flex-col gap-y-7 text-center'>
        <h2 className={`uppercase font-roboto font-normal text-sm tracking-[4px] leading-4 flex justify-center gap-x-5 items-center ${color==="change" ? 'text-[#e3e1e0]' : 'text-[#7a6f68]'} `}>
          {/* <img src={titleLine} alt="" /> */}
          <TitleLine color={`${color==="change" ? '#e3e1e0' : '#7a6f68'}`}/>
          {pretext}</h2>
        <h1 className={`capitalize font-anglecia font-normal text-5xl leading-[56px] sm:text-[64px] sm:leading-[72px] ${color==="change" ? 'text-white' : 'text-headingColor'}`}>{text}</h1>
    </div>
  )
}

export default Heading