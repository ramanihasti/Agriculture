import React from 'react'
import PricingCart from './PricingCart'
import { faCube, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons';
import Title from '../Common/Title';

const pricingData = [
  {
    title: "Medicin Plan",
    icon: faCube,
    price: 0,
    feature:
    {
      one:true,
      two:true,
      three:true,
      four:false,
      five:false
    },
    desc1:"such as enhancing overall wellbeing, reducing stress levels, and improving air quality.",
    desc2:"A large number of medicinal plants are cultivated in tropical and subtropical regions of the world.", 
    desc3:"Medicinal plants are an essential natural resource for the treatment of more persistent diseases.", 
    desc4:"Sunflower cultivation is one of the most lucrative forms of agriculture in India", 
    desc5:"Overharvesting has placed many medicinal species at risk of extinction.", 
  },
  {
    title: "Business Plan",
    icon: faRocket,
    price: 29,
    feature:
    {
      one:true,
      two:true,
      three:true,
      four:false,
      five:true,
    }, 
    activeCard:true,
    desc1:"The goals to be defined by the business have to be practical and achievable.",
    desc2:"The financial plan of the business is  current business operations as well as its future projections.", 
    desc3:"Agriculture is the most important and widely undertaken occupation in the country.", 
    desc4:" A business having good products but not an effective marketing", 
    desc5:"plays a crucial role in the development and growth of the agricultural sector.", 
  },
  {
    title: "Developer Plan",
    icon: faPaperPlane,
    price: 47,
    feature:
    {
      one:true,
      two:true,
      three:true,
      four:false,
      five:false,
    },
    desc1:"The world has the capacity to provide enough food for all of its inhabitants.",
    desc2:"highlights the importance of agriculture and food production to livable communities.", 
    desc3:"Agriculture can help reduce poverty, raise incomes and improve food security for 80% of the world's poor", 
    desc4:"potential political instability from food shortages, disconnect between rural farmers and the government, and impact on social structures.", 
    desc5:"Over-reliance on Government Subsidies",  
  },
];

function PricingRow() {
  return (
    <>
    <Title 
    title="PRICINGPART"
    desc="I believe agriculture is the key to change for this country." 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 md:px-20 py-8">
      {pricingData.map((value , index) => {
        return (
          <PricingCart 
          key={index}
          title={value.title}
          icon={value.icon}
          price={value.price}
          feature={value.feature}
          activeCard={value.activeCard}
          desc1={value.desc1}
          desc2={value.desc2}
          desc3={value.desc3}
          desc4={value.desc4}
          desc5={value.desc5}
          />
        )
      })}
    </div>
    </>
  )
}

export default PricingRow