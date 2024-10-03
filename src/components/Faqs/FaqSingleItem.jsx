import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FaqSingleItem(props) {
  const showHide = props.isVisibleAns === props.faq.id ;
  return (
    <div className=" hover:shadow-md hover:shadow-[#3255557b] cursor-pointer">
    <div className="bg-[#deeacdd4] px-6 py-4 flex flex-col gap-2 rounded-sm">

        <div className="flex items-center justify-between ">
            <p className="flex item-top gap-2 text-[15px] font-[cursive] font-semibold text-[#1e4631]">
                <span>{props.faq.id}.</span>
                <span>{props.faq.que}</span>
            </p>
            <button onClick={() => {
              props.showHideAns(props.faq.id)
            }}>
              {showHide 
              ?
              <FontAwesomeIcon  icon={faChevronUp}/>
              :
              <FontAwesomeIcon icon={faChevronDown}/>
            }
                </button>
        </div>

       {showHide && <p className="font-serif text-[#212f24] text-[16.3px]">{props.faq.ans}</p>}
    </div>        
    </div>
  )
}

export default FaqSingleItem