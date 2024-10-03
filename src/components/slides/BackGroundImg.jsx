import React from 'react'

function BackGroundImg() {
  return (
    <div className="h-[65vh] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-950
         opacity-80 z-[0]"/>
            <img src="/images/08.jpg" alt="" className='object-cover w-full h-full'/>                   
    </div>
  )
}

export default BackGroundImg