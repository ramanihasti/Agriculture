import { faDashcube } from '@fortawesome/free-brands-svg-icons'
import { faBox, faCube, faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PricingCart(props) {
  return (
    <>
    {props.activeCard 
    ? 
    <div className={`bg-[#fafef9] shadow-md shadow-[#c3c1c19c] px-12 py-12 rounded-md ${props.activeCard ? "border-4 border-teal-900 rounded-[20px]" : "rounded-md" }`}>
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-[28px] font-serif font-semibold text-[#3a5050]">{props.title}</h3>

      <div className={`bg-[#c4d5b1] h-[65px] w-[65px] p-2 rounded-full flex items-center justify-center ${props.activeCard ? "border-2 border-teal-800" : ""}`}>
          <FontAwesomeIcon icon={props.icon} className="text-xl text-[#303030]"/>
      </div>

      <div className="font-thin">
        <p className='text-xl text-emerald-900'>
          <sup className='text-xl text-emerald-900 font-serif'>$</sup> 
          <span className=' font-[cursive] text-4xl text-[#1f4141]'>{props.price}</span>
        /month</p>
      </div>
    </div>
      <ul className='flex flex-col gap-4 font-[cursive] text-[16px] mt-10 text-neutral-800'>
        <li 
        className={`flex items-start gap-2 ${
          props.feature.one ? "" : "line-through"
      }`}
      >
          <FontAwesomeIcon icon={props.feature.one ? faUserCheck : faUserXmark}
          className={`${props.feature.one ? "text-green-800" : "text-red-800"}`}/>
          <p>
            {props.desc1}
          </p>
        </li>
      
        <li 
        className={`flex items-start gap-2 ${
          props.feature.two ? "" : "line-through"
      }`}
      >
          <FontAwesomeIcon icon={props.feature.two ? faUserCheck : faUserXmark}
          className={`${props.feature.two ? "text-green-800" : "text-red-800"}`}/>
          <p>
            {props.desc2}
          </p>
        </li>

        <li 
        className={`flex items-start gap-2 ${
          props.feature.three ? "" : "line-through"
      }`}
      >
          <FontAwesomeIcon icon={props.feature.three ? faUserCheck : faUserXmark}
          className={`${props.feature.three ? "text-green-800" : "text-red-800"}`}/>
          <p>
            {props.desc3}
          </p>
        </li>

        <li 
        className={`flex items-start gap-2 ${
          props.feature.four ? "" : "line-through"
      }`}
      >
          <FontAwesomeIcon icon={props.feature.four ? faUserCheck : faUserXmark}
          className={`${props.feature.four ? "text-green-800" : "text-red-800"}`}/>
          <p>
            {props.desc4}
          </p>
        </li>

        <li 
        className={`flex items-start gap-2 ${
          props.feature.five ? "" : "line-through"
      }`}
      >
          <FontAwesomeIcon icon={props.feature.five ? faUserCheck : faUserXmark}
          className={`${props.feature.five ? "text-green-800" : "text-red-800"}`}/>
          <p>
           {props.desc5}
          </p>
        </li>
      </ul>
  </div>
  :
  
    <div className={`bg-[#fafef9] shadow-md shadow-[#aeacac55]  px-12 py-10 rounded-md ${props.activeCard ? "border-4 border-teal-900 rounded-[20px]" : "rounded-md" }`}>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-[25px] font-serif font-semibold text-[#3a5050]">{props.title}</h3>

        <div className={`bg-[#c4d5b1] h-[55px] w-[55px] p-2 rounded-full flex items-center justify-center ${props.activeCard ? "border-2 border-teal-800" : ""}`}>
            <FontAwesomeIcon icon={props.icon}/>
        </div>

        <div className="font-thin">
          <p className='text-xl text-emerald-900'>
            <sup className='text-xl text-emerald-900 font-serif'>$</sup> 
            <span className=' font-[cursive] text-3xl text-[#1f4141]'>{props.price}</span>
          /month</p>
        </div>
      </div>
        <ul className='flex flex-col gap-4 font-[cursive] text-[16px] mt-10 text-neutral-800'>
          <li 
          className={`flex items-start gap-2 ${
            props.feature.one ? "" : "line-through"
        }`}
        >
            <FontAwesomeIcon icon={props.feature.one ? faUserCheck : faUserXmark}
            className={`${props.feature.one ? "text-green-800" : "text-red-800"}`}/>
            <p>
              {props.desc1}
            </p>
          </li>
        
          <li 
          className={`flex items-start gap-2 ${
            props.feature.two ? "" : "line-through"
        }`}
        >
            <FontAwesomeIcon icon={props.feature.two ? faUserCheck : faUserXmark}
            className={`${props.feature.two ? "text-green-800" : "text-red-800"}`}/>
            <p>
              {props.desc2}
            </p>
          </li>

          <li 
          className={`flex items-start gap-2 ${
            props.feature.three ? "" : "line-through"
        }`}
        >
            <FontAwesomeIcon icon={props.feature.three ? faUserCheck : faUserXmark}
            className={`${props.feature.three ? "text-green-800" : "text-red-800"}`}/>
            <p>
              {props.desc3}
            </p>
          </li>

          <li 
          className={`flex items-start gap-2 ${
            props.feature.four ? "" : "line-through"
        }`}
        >
            <FontAwesomeIcon icon={props.feature.four ? faUserCheck : faUserXmark}
            className={`${props.feature.four ? "text-green-800" : "text-red-800"}`}/>
            <p>
              {props.desc4}
            </p>
          </li>

          <li 
          className={`flex items-start gap-2 ${
            props.feature.five ? "" : "line-through"
        }`}
        >
            <FontAwesomeIcon icon={props.feature.five ? faUserCheck : faUserXmark}
            className={`${props.feature.five ? "text-green-800" : "text-red-800"}`}/>
            <p>
              {props.desc5}
            </p>
          </li>
        </ul>
        {props.activeCard ? <button>click more</button> : ""}
    </div>
}
    </>
  )
}

export default PricingCart