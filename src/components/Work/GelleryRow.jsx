import React from 'react'
import Card from './Card'
import { images } from './data'

function GelleryRow(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        {images[props.activeCard].map((image) => {
            return <Card key={image.id} image={image}/>
        })}
    </div>
  )
}

export default GelleryRow