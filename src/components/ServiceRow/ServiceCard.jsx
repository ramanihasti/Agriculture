import React from 'react'

function ServiceCard(props) {
  return (
    <div className='flex flex-col p-8 gap-6 border-t-[1px] border-l-[1px] border-b-[1px] border-r-[1px] rounded-sm bg-gray-50'>
        <div className='h-[130px] w-[130px] '>
            <img src={props.image} alt=""  className='object-cover h-full w-full'/>
        </div>

        <div className='flex flex-col gap-2 cursor-text'>
            <h2 className='font-[cursive] text-xl text-teal-900 drop-shadow-md'>{props.title} ☘</h2>
            <p className='font-serif text-neutral-700'>{props.desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard