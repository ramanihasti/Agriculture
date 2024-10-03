import React from 'react'
// import Navbar from "../layout/Navbaravbar"
import ServiceRow from '../components/ServiceRow/ServiceRow'
import InfoCard from '../components/InfoRow.jsx/InfoCard'
import AboutRow from '../components/AboutRow/AboutRow'
import FaqSingleItemVisible from '../components/Faqs/FaqSingleItemVisible'
import SlideRow from '../components/slides/SlideRow'
import TeamRow from '../components/team/TeamRow'
import ContactInfo from '../components/contact/ContactInfo'
import ContactInfoRow from '../components/contact/ContactInfoRow'
import Contact from './Contact'
import PricingRow from '../components/pricing/PricingRow'
import HeroImage from '../components/Home/HeroImage'

function Home() {
  return (
    <>
       {/* <Navbar /> */}

      <HeroImage 
      img="/images/10.jpg"
      title="AGRICULTURE🪴"
      desc="AGRIFARM" />
       <InfoCard 
       heading="Pharmacy is the science and practice of discovering, producing, preparing, dispensing, reviewing and monitoring medications"
       para1="Agricultural Medicine: A Practical Guide is a textbook about the hazards, injuries, illnesses, disability, and mortality associated with agriculture."
       desc1="also that agriculture now only provides half of rural jobs as farmers took advantage of the investment to diversify."
       desc2="Engineering Agricultural and Pharmacy Common Entrance Test, commonly."
       desc3="Agricultural Products and Machinery Online at BigHaat."
       para2="Agricultural medicine encompasses, the anticipation, recognition, diagnosis, treatment, prevention, and community health aspects of health problems"
       image="/images/info1.jpg"
       />
       <ServiceRow />
       <AboutRow />
       <FaqSingleItemVisible />
       <PricingRow />
       <SlideRow />
       <TeamRow />
       <Contact />
    </>
  )
}

export default Home