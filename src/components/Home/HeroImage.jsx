import React from 'react'

function HeroImage(props) {
  return (
    <div className='relative'>
    <img src={props.img} alt="" className=" h-[50vh] md:h-[95vh] w-full"/>

    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4 text-start'>
       <h2 className='text-3xl tracking-[15px] font-[cursive] font-bold text-[#d6f0cf] '>{props.title}</h2>
       <p className='text-xl text-center font-[GaMaamli] font-semibold text-[#a1a2a4] tracking-widest'>{props.desc}</p>
    </div>
</div>
  )
}

export default HeroImage