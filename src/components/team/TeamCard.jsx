import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const icons = [
    {
        icon: faTwitter,
    },
    {
        icon: faInstagram,
    },
    {

        icon: faFacebook,
    },
    {
        icon: faLinkedin,
    },
];

function TeamCard(props) {

    const data = props.isShowData === props.id;

  return (
<>

    { data ? <div className="hover:shadow-md hover:shadow-[#242323d8] text-center cursor-pointer" onMouseOver={() => {
        props.showData(props.id)
    }}>
    <div className="h-[270px] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.60)]
         opacity-80 z-[0] rounded-md"/>
            <img src={props.img} alt="" className="w-full h-full object-cover rounded-md" />
        

         <div className="flex flex-wrap flex-col gap-1 mt-[-120px] text-[#e2f9ff]">
            <p className="text-[18.5px] font-serif font-semibold ">{props.name}</p>
            <p className="font-[cursive] text-sm">{props.filed}</p>
            <p className=' flex items-center justify-center gap-6 mt-[px] '>
                {icons.map((value , index) => {
                    return <FontAwesomeIcon 
                    className="text-xl hover:text-emerald-900 text-white hover:border hover:border-neutral-300 p-1 rounded-md"
                    key={index}
                    icon={value.icon}
                    />
                })}
            </p>
        </div>
        </div> 
    </div>

        : 

    <div className="hover:shadow-md hover:shadow-[#1a1a1ad8] text-center rounded-md" onMouseOver={() => {
        props.showData(props.id);
    }}>
    <div className="h-[270px]">
        <img src={props.img} alt="" className="w-full h-full object-cover rounded-md"/>
        </div>
    </div>
    } 
</>
  )
}

export default TeamCard