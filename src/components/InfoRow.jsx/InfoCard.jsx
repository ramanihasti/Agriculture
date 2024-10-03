import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Title from '../Common/Title'

function InfoCard(props) {
  return (
    <>
    <Title 
       title="PHARMACI "
       desc="Reviewing and Monitoring Medications"/>

    <div className='grid grid-cols-1 md:grid-cols-2 p-12 gap-8 '>
        <div className='grow-1'>
            <img src="/images/info1.jpg" alt="" className='rounded-sm '/>
        </div>

        <div className='grow-1 flex flex-col gap-3 p-2'>
            <h2 className='text-cyan-900 font-[italic] font-semibold text-2xl drop-shadow-md'>{props.heading}</h2>
            <p className='text-neutral-800 font-serif text-[16.5px] '>{props.para1}</p>
            <div className='flex flex-col gap-3 px-4 font-[cursive] text-[14.5px] text-neutral-700'>
                <p>
                    <FontAwesomeIcon icon={faCheckDouble} className='text-green-800'/>  {props.desc1}</p>
                <p>
                    <FontAwesomeIcon icon={faCheckDouble} className='text-green-800'/>  {props.desc2}</p>
                <p>
                    <FontAwesomeIcon icon={faCheckDouble} className='text-green-800'/>  {props.desc3}</p>
            </div>
            <p className='text-neutral-800 font-serif text-[16.5px]'>{props.para2}</p>

        </div>
    </div>
    </>
  )
}

export default InfoCard