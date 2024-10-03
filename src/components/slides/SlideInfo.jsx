import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BackGroundImg from './BackGroundImg'

function SlideInfo(props) {
  return (
<>
  <div className="relative py-8">
      <BackGroundImg />

  <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white'>
         <div className='flex flex-col items-center gap-4'>

         <div className="h-[120px] w-[120px] ">
            <img src={props.img} alt="" className='h-full w-full object-cover rounded-full border-2 border-neutral-400'/>
          </div> 

          <h2 className="text-xl font-serif font-semibold text-[#f0ecdf]">{props.name}</h2>
          <p className="text-base font-thin text-[#d6d0b6] -mt-3">{props.filed}</p>
          <p className="text-yellow-600 hover:text-orange-500 flex flex-row gap-1">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>

          </p>
          <p className="font-serif text-[17px]">{props.desc}</p>
         </div>
    </div>

</div>

 </>   
  )
}

export default SlideInfo