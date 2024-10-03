import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactInfo() {
  return (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] px-16 py-8 gap-12'>
          <div className="bg-[#f6f0f0db] shadow-md shadow-[#312b2b89] border border-neutral-200 flex items-center flex-col gap-3 p-6 text-center">

            <FontAwesomeIcon icon={faLocationDot} className=" border-2 border-dotted border-[#235a4f] rounded-full p-3 w-[15px] h-[15px] text-emerald-900 hover:bg-[#2c6145ee] hover:text-white hover:border  hover:border-neutral-600"/>
            <h2 className="font-serif font-semibold text-xl text-teal-950">Address</h2>
            <p className="font-[cursive] text-[15px] text-neutral-700 ">Plot No. B-21/7  Hoziwala Industrial Estate, Vanz, Gaon, Surat.</p>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 w-full">
            <div className="bg-[#f6f0f0db] shadow-md shadow-[#312b2b89] border border-neutral-200 flex items-center flex-col gap-3 p-6 text-center">

              <FontAwesomeIcon icon={faPhone} className=" border-2 border-dotted border-[#235a4f] rounded-full p-3 w-[15px] h-[15px] text-emerald-900 hover:bg-[#2c6145ee] hover:text-white hover:border  hover:border-neutral-600"/>
              <h2 className="font-serif font-semibold text-xl text-teal-950">Call Us</h2>
              <p className="font-[cursive] text-[14.5px] text-neutral-700 ">+1 5589 55488 55</p>

            </div>

            <div className="bg-[#f6f0f0db] shadow-md shadow-[#312b2b89] border border-neutral-200 flex items-center flex-col gap-3 p-6 text-center">

              <FontAwesomeIcon icon={faEnvelope} className=" border-2 border-dotted border-[#235a4f] rounded-full p-3 w-[15px] h-[15px] text-emerald-900 hover:bg-[#2c6145ee] hover:text-white hover:border  hover:border-neutral-600"/>
              <h2 className="font-serif font-semibold text-xl text-teal-950">Email Us</h2>
              <p className="font-[cursive] text-[15px] text-neutral-700 ">info@gmail.com</p>

            </div>

           
          </div>

        </div>
  )
}

export default ContactInfo