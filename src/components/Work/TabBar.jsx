import React from 'react'

const workTab = [
    {id:1 , name: "Farm"},
    {id:2 , name: "Medicin"},
    {id:3 , name: "Plow-Mowing"},
    {id:4 , name: "Plant"},
  ];

function TabBar(props) {
  return (
    <div>
        <ul className="flex items-center justify-center gap-6 p-8 ">
            {workTab.map((tab) => {
                return <li key={tab.id} 
                className="bg-[#88a57a] text-neutral-700 hover:bg-[#516a51] hover:text-white px-4 py-2 rounded-md font-serif "
                onClick={() => {
                  props.setActiveCard(tab.id)
                }}>
                  {tab.name}
                </li>
            })}
        </ul>
    </div>
  )
}

export default TabBar