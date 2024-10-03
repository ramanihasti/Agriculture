import React from 'react'

function Card(props) {
  return (
    <div className="h-[270px]">
      <img src={props.image.img} alt="" className="object-cover h-full w-full shadow-md shadow-black rounded-sm cursor-pointer hover:animate-pulse" />
    </div>
  )
}

export default Card