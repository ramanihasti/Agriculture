import React, { useState } from 'react'
import TeamCard from './TeamCard'
import Title from '../Common/Title';

const teamData = [
  {
    id:1,
    img: "/images/t1.jpg",
    name: "Sheladiya Kevins",
    filed: "Chief Executive Officer",
  },
  {
    id:2,
    img: "/images/t2.jpg",
    name: "Hussain Naina ",
    filed: "Product Manager",
  },
  {
    id:3,
    img: "/images/t3.jpg",
    name: "Sojitra Hirvan ",
    filed: "CTO",
  },
  {
    id:4,
    img: "/images/t4.jpg",
    name: "Guna Mudra",
    filed: "Medicine Manager",
  },
];

function TeamRow() {
  const [isShowData , setIsShowData] = useState(null);

  function showData(id) {
    setIsShowData(id);
  }
  // console.log("isshowdata" , isShowData);
 
  return (
    <>
    <Title 
    title="TEAMPART"
    desc="“Alone we can do so little; together we can do so much.”"/>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16 py-4">
      {teamData.map((value) => {
        return <TeamCard  
        id={value.id}
        name={value.name}
        filed={value.filed}
        img={value.img}
        isShowData={isShowData}
        showData={showData}
        />
      })}

    </div>
    </>
  )
}

export default TeamRow