import React from 'react'

function Title(props) {
  return (
    <div className='flex flex-col px-24 py-8 gap-4 items-center md:items-start  '>
        <h2 className='font-thin text-neutral-500 tracking-[5px] '>{props.title} <hr className='border-zinc-400 mt-[-10px] ml-[140px] w-[80px] md:w-[130px]'/></h2>
        <p className='font-serif text-2xl text-teal-800  '>{props.desc}</p>
    </div>
  )
}

export default Title