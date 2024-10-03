import React from 'react'
import CountUp from 'react-countup';

function Counter(props) {
  return (
    <div>
      <div className='flex flex-col gap-x-2 py-3 gap-3 max-w-[150px]'>
        <p className='text-xl font-[cursive] font-semibold text-neutral-700'>
          <span className='text-2xl text-emerald-800'>{props.icon}  </span>
          <CountUp end={props.counting} /></p>
        <p className='font-semibold font-serif text-[14px] text-zinc-700'>{props.name}
          <span className='font-thin'>{props.desc}</span>
        </p>
      </div>
    </div>  
  )
}

export default Counter