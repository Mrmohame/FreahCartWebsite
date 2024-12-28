import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import UseLoading from '../Hook/UseLoading';
import { useQuery } from '@tanstack/react-query';
import UseCategories from '../Hook/UseCategories';

export default function CategorySlider() {
const [first, setfirst] = useState("")
  var settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: first == "2" ? 2 : first == "4" ? 4 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500
  };
  
  window.addEventListener('resize', () => {
    const pageWidth = document.documentElement.clientWidth;
   if(pageWidth < 994 && pageWidth > 750 ){
    setfirst("4")
   }else if(pageWidth < 700 ){
    setfirst("2")
   }else if(pageWidth > 994){
    setfirst(false)
   }
  });

let {loading,isLoading,data} =  UseCategories()


  if(isLoading){
  return  <UseLoading/>
  }


  return (
    <>
    

  <Slider className={`  md:mt-16 pt-3 w-[80%] md:w-[90%] mx-auto mb-0  pb-0`} {...settings}>
{data?.data?.data?.map((category)=><div key={category._id}>
  <img className='h-[150px] w-full' src={category.image}/>
  <h4 className='text-center'>{category.name}</h4>
</div>)}
</Slider>



    </>
   
  )
}
