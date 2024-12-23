import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import UseLoading from '../Hook/UseLoading';
import { useQuery } from '@tanstack/react-query';
import UseCategories from '../Hook/UseCategories';

export default function CategorySlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500
  };

let {loading,isLoading,data} =  UseCategories()

  if(isLoading){
  return  <UseLoading/>
  }


  return (
    <>
    

  <Slider className='md:mt-16 mb-5 mx-8 p-5' {...settings}>
{data?.data?.data?.map((category)=><div>
  <img className='h-[150px] w-full' src={category.image}/>
  <h4 className='text-center'>{category.name}</h4>
</div>)}
</Slider>



    </>
   
  )
}
