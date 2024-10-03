import React from 'react'
import emailjs from '@emailjs/browser';


function ContactForm() {

  function handleSubmit(e) {
    const event = e.preventDefault();
    console.log("event" , event);
  

    emailjs
    .sendForm(
      process.env.REACT_APP_SERCICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
       e.target, {
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    })

    .then(() => {
        alert('SUCCESS! Thank you for visit in Website', );
        e.target.reset();
      })
      .catch((error) => {
        alert('FAILED TO SUBMIT ', error.text);
      })
};

  return (
    <form className="bg-[#eff6f0] " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 text-[#49372d] px-8 py-4">
        <div className="flex items-center justify-center ">
          <p className="text-center bg-[#cce3ce] w-[250px] text-[16.5px] text-[#49372d] font-serif p-1 rounded-sm">Contact Customer Support</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-serif">Student Name :</label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input 
          type="text"
          id="fname"
          name="fname"
          placeholder="Frist Name" 
          required
          className="h-8 border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm placeholder:text-center "
          />
          <input  
          type="text"
          id="mname"
          name="mname"
          placeholder="Middle Name" 
          required
          className="h-8 border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm placeholder:text-center "
          />
          <input 
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          required
          className="h-8 border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm placeholder:text-center " 
          />
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 grow-1">
            <label className="text-[16px] font-serif">Email Id :</label>
            <input 
            type="text"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
            required
            className="h-8 w-full border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm p-2 " 
            />
          </div>
          <div className="flex flex-col gap-2 grow-1">
            <label className="text-[16px] font-serif">Tel No. :</label>
            <input 
            type="text"
            id="phone"
            name="phone"
            placeholder="+91"
            required
            className="h-8 w-full border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm p-2" 
            />
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-serif">Subject :</label>
            <input 
            type="text"
            id="subject"
            name="subject"
            placeholder="Your Subject"
            required
            className="h-8 w-full border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm p-2" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-serif">Message :</label>
            <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Your Message"
            required
            cols={63} 
            rows={2.5}
            className="w-full border-2 border-neutral-200 rounded-md placeholder:font-serif placeholder:text-sm p-2" 
            />
          </div>

      <div className="flex items-center justify-center">
        <button
        type='submit'
        className='bg-[#cce3ce] font-serif p-1 mt-4 w-[100px] rounded-md shadow-md '
        >Submit
        </button>
      </div>

      

      </div>
    </form>
  )
}


export default ContactForm