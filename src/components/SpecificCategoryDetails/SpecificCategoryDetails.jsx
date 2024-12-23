import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom'

export default function SpecificCategoryDetails() {


let [productDetails,setProductDetails] = useState()
let {id} = useParams()

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
   
  },[])


function getData(id){
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(response => {
    console.log(response.data);
    setProductDetails(response.data)
    
  })
  .catch(error => {
    console.log(error);
    
  })
}
useEffect(() => {
getData(id)
CategoryDetails(category)
},[id,category])

  return (
    <>
    
    <div className='mt-20'>

    <div className="grid sm:grid-cols-1 md:grid-cols-[25%_75%]  items-center text-center">
<div>

  
  <img className='h-[350px] object-fill rounded-lg'  src={productDetails?.image} alt="" />


</div>
<div className='p-10 text-white'>
<h2>{productDetails?.title?.split(" ").slice(0,2).join(" ")}</h2>
      <h3 className='text-blue-600 text-sm'>{productDetails?.category?.name}</h3>
      <h4>{productDetails?.description}</h4>
      <div className="rate flex justify-center gap-8">
        <span>{productDetails?.price}EGP</span>
        <span>{productDetails?.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></span>
      </div>

<button className='bg-green-800 p-2 my-4 text-white'>Add To Card</button>
</div>
    </div>
    </div>

<h2 className='text-center text-[2.5rem] font-bold'>Related Products</h2>

<div className='mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-start'>
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
