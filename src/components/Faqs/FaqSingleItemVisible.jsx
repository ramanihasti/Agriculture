import React, { useState } from 'react'
import FaqSingleItem from './FaqSingleItem'
import Title from "../Common/Title"

const data = [ 
    {
        id: 1,
        que: " How do you maintain a tractor?",
        ans: " Regularly checking the radiator-fluid level, tractor’s oil, tire pressure, air filter helps to maintain a farm tractor.",
    },
    {
        id: 2,
        que: "How many different types of farming methods are there in India?",
        ans: "Organic farming, subsistence farming, commercial farming are popular farming methods used in India. However, depending on geographical conditions, production demand, level of technology and labour, farming can be based on ley farming, horticulture, agroforestry, etc.",
    },
    {
        id: 3,
        que: "What are the benefits of organic farming?",
        ans: "Organic farming prevents the use of pesticides, herbicides and other harmful chemicals. Due to organic farming, plants and insects will survive.",
    },
    {
        id: 4,
        que: "What are the basic needs for farming?",
        ans: " Natural resources like air, nutrients, land, water, and sunlight are essential for farming.",
    },
    {
        id: 5,
        que: " What is pearl farming?",
        ans: "Pearl farming is a method of cultivating freshwater cultivated pearls on the farm. For nearly 2-5 years, growers nucleate and take care of oysters to generate a pearl.",
    },
];

function FaqSingleItemVisible() {

    const [isVisibleAns , setIsVisibleAns] = useState(null);

    function showHideAns(id) {
        setIsVisibleAns(id === isVisibleAns ? null : id)
    }

  return (
    <>
    <Title 
    title="FAQs  LEARN"
    desc="Agricultur is the most healthful, most useful and most nobel employment of man."/>
    <div className="grid grid-cols-1 md:grid-cols-2 px-12 py-8 gap-10">
        <div className="flex flex-col gap-3 ">

            <h2 className="text-2xl font-[italic] font-semibold text-[#384f30] drop-shadow-md">Agriculture Questions and Answers - Farming FAQ.</h2>
            <p className="font-serif text-[16.5px] text-neutral-800">Farming is hugely practised to prepare the ground, sow seeds, and grow plants for food security. Even rearing animals and other living habitats for resources is Farming. </p>

            {data.map((faq) => {
                return <FaqSingleItem 
                key={faq.id} 
                faq={faq}
                isVisibleAns={isVisibleAns}
                showHideAns={showHideAns}
                />
            })}
        </div>

        <div className="rounded-sm h-[80vh]">
            <img src="/images/07.jpg" alt="" className='h-full w-full object-cover' />
        </div>
    </div>        
    </>
  )
}

export default FaqSingleItemVisible