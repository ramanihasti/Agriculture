import React, { useState } from 'react'
import TabBar from '../components/Work/TabBar'
import GelleryRow from '../components/Work/GelleryRow';

function Gellery() {
  const [activeCard , setActiveCard] = useState(1);
  // console.log(activeCard)


  return (
    <>
       <TabBar activeCard={activeCard} setActiveCard={setActiveCard}/>
       <GelleryRow  activeCard={activeCard} />
    </>
  )
}

export default Gellery