import React from 'react'
import ContactInfoRow from '../components/contact/ContactInfoRow'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Title from '../components/Common/Title'

function Contact() {
  return (
    <div>
    <Title 
    title="CONTACT US"
    desc="To make agriculture sustainable the grower has got to be able to make a profit."/>  
    <ContactInfo />
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] px-16 gap-12">
      <ContactInfoRow />
      <ContactForm />
    </div>
    </div>
  )
}

export default Contact