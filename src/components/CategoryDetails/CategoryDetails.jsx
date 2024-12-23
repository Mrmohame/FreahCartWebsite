import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CategoryDetails() {
let [alldata,setAlldata] = useState()
let {category} =useParams()
  function CategoryDetails(categoryName) {
axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
.then((response) => {

  setAlldata(response.data)
  console.log(response)})
.catch((error) => {error})
  }

  useEffect(() => {
    CategoryDetails(category)
  },[])

  return (
    <>
    
<div className='mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-start h-[100vh]'>
{alldata?.map((products)=>{
  return(
    <div key={products.id}  className=' m-2 rounded-[28px] text-center border-[3px] border-solid border-gray-500'>
           <Link key={products.id} to={`/specificcategorydetails/${products.id}/${products.category}`}>
        <div className="ag-courses_item bg-red-800 w-full">
      <div className="ag-courses-item_link w-full">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title ">
 

      <h2 className='text-[22px] text-nowrap'>{products.title.split(" ").slice(0,2).join(" ")}</h2>
      <h3 className='text-blue-600 text-sm'>{products.category}</h3>
      <img className='w-full h-[200px]' src={products.image} alt="" />
      <div className="rate flex justify-between">
        <span className='text-[15px]'>{products.price}EGP</span>
        <span className='text-[15px]'>{products?.rating?.rate}<i className="fa-solid fa-star text-yellow-300"></i></span>
      </div>


        </div>

    
      </div>
    </div>
</Link>
<button className='bg-yellow-400 my-3 p-3'>Add to cart</button>
    </div>
  )
})}
</div>

    </>
   
  )
}
