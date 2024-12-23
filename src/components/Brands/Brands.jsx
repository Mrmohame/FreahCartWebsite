import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from "../Products/Products.module.css"
import { useQuery } from '@tanstack/react-query';
import UseLoading from '../Hook/UseLoading';

export default function Brands() {



  function getAllBrands() {
  return  axios.get("https://ecommerce.routemisr.com/api/v1/brands")

  }

 let {loading,isLoading,data} =  useQuery({
  queryKey: ["recentBrands"],
            queryFn:getAllBrands,
            staleTime:1000,
  })
  // console.log(data?.data?.data);
  if(isLoading){
  return  <UseLoading/>
  }

  return (
    <>
    
    <div className="mt-32 ">

<div className="text-center pb-10">
<h2 className={`text-center sm:text-[2.5rem] md:text-[3.5rem] font-bold  `}>Brands</h2>
<div className='w-[15%] mx-auto bg-gray-600  h-1'></div>

</div>


<div className='grid w-[90%] mx-auto  sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
{data?.data?.data?.map((category, index)=> <div className={`${style.categoryHover} transition-all duration-[1000ms] rounded-lg relative hover:shadow-lg hover:shadow-green-800  cursor-pointer overflow-hidden`}>
<img src={category.image} className='w-[100%] h-[300px]' alt="" />
<div className={`absolute w-[100%]
 h-[100%]  ${style.layer} transition-all duration-[1000ms] flex flex-col justify-center items-center
 top-[100%] bg-green-800/80 text-white`}>
<h3 className='text-[2rem]'>{category.name}</h3>
</div>
</div>)}

</div>

</div>

    </>
   
  )
}
