import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faLeaf, faTractor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='bg-[rosybrown] p-8 gap-4'>
        <div className='md:flex items-center justify-between grid grid-cols-1 gap-4 '>
          <div className='h-[40px] w-[130px] '>
            <img src="/images/f1.jpg" alt="" className=' h-full w-full rounded-full'/>
          </div>  

          <ul className='flex flex-col gap-2 md:flex-row  md:gap-8 text-fuchsia-100 font-[cursive] text-[15px]'>
           
            <li className='hover:text-green-800'>
              <Link to="/" >Home</Link> 
            </li>

            <li className='hover:text-green-800'>
              <Link to="/about" >About Us</Link> 
            </li>

            <li className='hover:text-green-800'>
              <Link to="/service" >Our Service</Link> 
            </li>

            <li className='hover:text-green-800'>
              <Link to="/blog" >Blog</Link> 
            </li>

            <li className='hover:text-green-800'>
              <Link to="/gellery" >Gellery</Link> 
            </li>

            <li className='hover:text-green-800'>
              <Link to="/contact" >Contact</Link> 
            </li>

          </ul>

          <div className='flex flex-row gap-3'>
            
            <FontAwesomeIcon icon={faTractor} className='border p-2 border-emerald-800 rounded-lg text-emerald-800 hover:border-fuchsia-200 hover:shadow-gray-950 hover:shadow-md'/>

            <FontAwesomeIcon icon={faLeaf} className='border p-2 border-emerald-800 rounded-lg text-emerald-800 hover:border-fuchsia-200 hover:shadow-gray-950 hover:shadow-md'
            />

            <FontAwesomeIcon icon={faHouse} className='border p-2 border-emerald-800 rounded-lg text-emerald-800 hover:border-fuchsia-200 hover:shadow-gray-950 hover:shadow-md'/>

            <FontAwesomeIcon icon={faPagelines} className='border p-2 border-emerald-800 rounded-lg text-emerald-800 hover:border-fuchsia-200 hover:shadow-gray-950 hover:shadow-md'/>

          </div>

        </div>
      </nav>
    </>
  
  )
}

export default Navbar