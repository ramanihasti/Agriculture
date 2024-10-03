import React from 'react'
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFaceSmile, faHeadphones, faUserGroup,  } from '@fortawesome/free-solid-svg-icons';
import Title from '../Common/Title';
import AboutImg from './AboutImg';

function AboutRow() {
    const data = [
        {
            icon : <FontAwesomeIcon icon={faFaceSmile}/>,
            counting: 232,
            name: "Happy Clients ",
            desc: "consequuntur quae",
        },
        {
            icon: <FontAwesomeIcon icon={faBook}/>,
            counting: 521,
            name: "Project ",
            desc:"adipisci atque cum quia aut",
        },
        {
            icon: <FontAwesomeIcon icon={faHeadphones} />,   
            counting: 103,
            name: "Hours Of Support ",
            desc: "commodi quaerat",
        },
        {
            icon: <FontAwesomeIcon icon={faUserGroup}/>,
            counting: 290,
            name: "Hard Workers ",
            desc: "rerum asperiores dolor",
        }
];

  return (
    <>
       <Title 
       title="WATERPLANT"
       desc="Mostly Farmer Use To Fountain Water Plan!"/>

    <div className='grid grid-cols-1 md:grid-cols-2 px-12 py-6'>
        <div className="flex flex-col grow-1">
            <AboutImg />
        </div>

         <div className='flex flex-col grow-1 gap-3 bg-fuchsia-100 p-4 rounded-sm'>
            <h2 className='font-[cursive] font-bold text-[22px] text-emerald-800'>Farm fountains are water features designed for agricultural settings.</h2>
            <p className='font-[italic] text-slate-800'>Decorative water fountains are common architectural features in the Southwest, found in public plazas, malls, in front of government and office buildings and industrial plants, and in and outside private residences.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 px-8'>
            {data.map((value,index) => {
                return <Counter 
                key={index}
                icon={value.icon}
                counting={value.counting}
                name={value.name}
                desc={value.desc}/>
            })}
            </div>
         </div>
    </div>
    </> 
  )
}

export default AboutRow