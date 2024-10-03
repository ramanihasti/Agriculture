import React from 'react'
import Title from '../Common/Title'
import ServiceCard from './ServiceCard'

function ServiceRow() {
    const data = [
        {
            image:"/images/f2.svg",
            title: "Planting",
            desc: "Tree planting is the process of transplanting tree seedlings, generally for forestry, landscaping purposes.",
        },
        {
            image:"/images/f3.svg",
            title: "Mulching",
            desc: "A mulch is a layer of material applied to the surface of soil. Reasons for applying mulch include. ",
        },
        {
            image:"/images/f4.svg",
            title: "Plowing",
            desc: "The plow is the basic tool for growing crops. It is the first implement used in preparing a seedbed for crops. ",
        },
        {
            image:"/images/f5.svg",
            title: "Mowing",
            desc: "The lawn should be mown for the first time when the gardening season starts in spring.",
        },
        {
            image:"/images/f6.svg",
            title: "Seeding",
            desc: "Best time and depth of seeding and planting is an effective cultural practice that reduces disease impact. ",
        },
        {
            image:"/images/f7.svg",
            title: "Fresh Vegetables",
            desc: "Fresh vegetables are one of the key sources of vitamins and minerals for human beings.",
        },
        {
            image:"/images/f9.svg",
            title: "Watering",
            desc: "Irrigation has been a key aspect of agriculture for over 5,000 years and has been developed by many cultures.",
        },
        {
            image:"/images/f8.svg",
            title: "Vegetable selling",
            desc: " Being a vegetable shop owner at small local areas is not easy. those who end up as vegetable sellers have no choice",
        }
    ];
  return (
    <>
       <Title 
       title="SERVICES"
       desc="Providing Fresh Produce Every Single Day"/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-12 gap-0'>
          {
            data.map((value,index) => {
                return <ServiceCard
                key={index} 
                image={value.image} 
                title={value.title} 
                desc={value.desc}
                />
            })
          }
      </div>
    </>
  )
}

export default ServiceRow