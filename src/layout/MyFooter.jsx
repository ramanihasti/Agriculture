import { Footer } from 'flowbite-react'
import React from 'react'
import {BsFacebook , BsInstagram , BsTwitter , BsGithub , BsDribbble} from "react-icons/bs"

function MyFooter() {
  return (
    <Footer container className='mt-8 bg-[rgba(17,17,17,0.84)] rounded-none'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <Footer.Brand
            href="https://flowbite.com"
            name='AGRICULTURE'
            className="font-[italic] text-[#c5e1a5] "
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 font-serif text-xl">
          <div className='flex flex-col gap-2'>
            <Footer.Title title="About" className='text-[18px] text-[#cdb88a]'/>
            <Footer.LinkGroup col  className='flex gap-1 md:mb-8 text-neutral-300 text-[15.5px]'>
              <Footer.Link href="#">Agriculture</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='flex flex-col gap-2'>
            <Footer.Title title="Follow us" className='text-[18px] text-[#cdb88a]'/>
            <Footer.LinkGroup col className='flex gap-1 md:mb-8 text-neutral-300 text-[15.5px]'>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='flex flex-col gap-2'>
            <Footer.Title title="Legal" className='text-[18px] text-[#cdb88a]'/>
            <Footer.LinkGroup col className='flex gap-1 md:mb-8 text-neutral-300 text-[15.5px]'>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between p-8">
        <Footer.Copyright href="#" by=" Agriculture™" year={2024} className="font-serif text-[18px] text-[#c8e6c9]" />
        <div className="mt-4 flex  space-x-6 sm:mt-0 sm:justify-center ">
          <Footer.Icon href="#" icon={BsFacebook} className="text-[#a5d6a7] hover:text-neutral-200"/>
          <Footer.Icon href="#" icon={BsInstagram} className="text-[#a5d6a7]  hover:text-neutral-200"/>
          <Footer.Icon href="#" icon={BsTwitter} className="text-[#a5d6a7]  hover:text-neutral-200"/>
          <Footer.Icon href="#" icon={BsGithub} className="text-[#a5d6a7] hover:text-neutral-200"/>
          <Footer.Icon href="#" icon={BsDribbble} className="text-[#a5d6a7] hover:text-neutral-200"/>
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter