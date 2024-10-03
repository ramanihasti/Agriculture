import React from 'react'

function AboutImg() {
  return (
    <div className='grid grid-cols-3 gap-2 h-[400px] w-[650px] md:w-[930px] '>
    <img src="/images/03.jpg" alt="" className='rounded-md object-cover h-full w-full'/>
    <div className='flex flex-col gap-2'>
        <img src="/images/04.jpg" alt="" className='rounded-md object-cover h-full w-full filter contrast-[80%]'/>
        <img src="/images/06.jpg" alt="" className='rounded-md object-cover h-full w-full'/>
    </div>
 </div>
)
}

export default AboutImg