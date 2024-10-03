import React from 'react'
import Slider from 'react-slick';
import SlideInfo from './SlideInfo';
import BackGroundImg from './BackGroundImg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faL } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
      img: "/images/t01.jpg",
      name: "Ribadiya Navish",
      filed: "CEO & Founder",
      desc:"“Agriculture not only gives riches to a nation, but the only riches she can call her own.”",
    },
    {
      img: "/images/t02.jpg",
      name: "Amipara Divisha",
      filed: "Designer",
      desc:"“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”",
    },
    {
      img: "/images/t03.jpg",
      name: "Ramani Rutvik",
      filed: "Store Owner",
      desc:"“You have succeeded in life when all you really want is only what you really need.”",
    },
    {
      img: "/images/t04.jpg",
      name: "Sejpara Saanvi",
      filed: "Freelancer",
      desc:"“If you don't build your dream, someone else will hire you to help them build theirs.”",
    },
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    dots:false,
  };

function SlideRow() {
  return (
    <>

       <Slider {...settings}>
        {data.map((value , index) => {
          return <SlideInfo 
          key={index}
          img={value.img}
          name={value.name}
          filed={value.filed}
          desc={value.desc}
    
          />
        })}
       </Slider>
    
    </>
  )
}

export default SlideRow