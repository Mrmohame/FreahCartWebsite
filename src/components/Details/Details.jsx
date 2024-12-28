


import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import UseLoading from '../Hook/UseLoading';
import style from "../Products/Products.module.css"
import { CartContext } from '../../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Details() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let {id,category} = useParams()
console.log(category);

  let {addToCart,setNumOfItems,AddWishList,RemoveWishList}=useContext(CartContext)
  let [productDetails, setProductDetails] = useState([])
  let [RelproductDetails, setRelProductDetails] = useState([])



  async  function callAdd(id){
    let {data}=await addToCart(id)
    setNumOfItems(data)
    console.log(data?.data?.products);
   let productCount = data?.data?.products?.filter((x)=> x.product == id)
   console.log(productCount[0]?.count);
   if (data.status == "success") {
    toast.success(data.message);
    
   }else{
    toast.error('This is an error!');
    
   }
    
  }


  function getAllProductDetails(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(function({data}){
console.log(data.data);
setProductDetails(data.data)

    }).catch((err)=>{
console.log(err);

    })
  }


  function getAllRelProductDetails(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(function({data}){
console.log(data.data);
let relPro=data.data
let allRelPro= relPro.filter((product)=>product?.category?.name == category)
console.log(allRelPro);
setRelProductDetails(allRelPro)

    }).catch((err)=>{
console.log(err);

    })
  }

  useEffect(()=>{
getAllProductDetails(id)
getAllRelProductDetails(category)
  },[id,category])
  

  

if(productDetails == "" || RelproductDetails== "" ){
return <UseLoading/>
}

  return (
    <>
    <div className='mt-20 '>

    <div className="grid w-[95%] mx-auto sm:grid-cols-1 lg:mt-32 my-5 lg:pt-10 md:grid-cols-[25%_75%] items-center text-center ">
<div>
<Slider {...settings} className=''>
  {productDetails?.images?.map((image,index)=>    
  <img key={index} className='w-[100%] h-[450px]' src={image} alt="" />
  )}
 </Slider>
</div>
<div>
<h2>{productDetails?.title?.split(" ").slice(0,2).join(" ")}</h2>
      <h3 className='text-blue-600 text-sm'>{productDetails?.category?.name}</h3>
      <h4 className='my-4'>{productDetails?.description}</h4>
      <div className="rate flex justify-center gap-8">
        <span>{productDetails?.price}EGP</span>
        <span>{productDetails?.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></span>
      </div>

      <button 
onClick={()=>callAdd(products.id)}

className={` my-5 w-[20%] bg-green-600 text-white rounded-lg py-3`}><i className="fa-solid fa-plus"></i> Add to cart
</button>
</div>
    </div>
    </div>

<h2 className='text-center text-[2.5rem] font-bold mt-4'>Related Products</h2>
<div className='w-[20%] mx-auto bg-gray-600  h-1 mb-10 '></div>


<div className="ag-format-container  mx-auto">
  <div className="ag-courses_box">
  <div className=' grid sm:grid-cols-1 w-[95%] mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
{RelproductDetails?.map((products)=>{
  return (
    <>
           <div key={products.id}  className={`py-8 px-4 m-1 ${style.CartDiv}  rounded-[15px]  hover:shadow-lg hover:shadow-green-500 duration-[500ms]`}>
           
        
    <div className="relative">
    <Link to={`/details/${products.id}/${products.category.name}`} key={products.id}>
    <img className='w-full' src={products.imageCover} alt="" />
    </Link>

    </div>
       
        
    <Link to={`/details/${products.id}/${products.category.name}`} key={products.id}>

      
      <h2 className='text-[16px]'>{products.title.split(" ").slice(0,2).join(" ")}</h2>
      <h3 className='text-blue-600 text-sm'>{products.category.name}</h3>
      <div className="rate flex justify-between">
        <span className='text-[15px]'>{products.price}EGP</span>
        <span className='text-[15px]'>{products.ratingsAverage}<i className="fa-solid fa-star text-green-500 ps-1"></i></span>

    </div>
       </Link>

<div className="flex justify-between items-center">
<button 
onClick={()=>callAdd(products.id)}

className={`${style.addCart} w-[80%] bg-green-600 text-white rounded-lg my-3 p-3`}><i className="fa-solid fa-plus"></i> Add to cart
</button>

<button onClick={
  (e)=>{
    makeFavorite == false ?
    makeWishList(products.id,e.target)
    :
    // console.log(makeFavorite.map((x)=>x==products.id))
    
    makeFavorite.map((x)=>x==products.id) ?
    removeAddedWishList(products.id,e.target)
    :
    makeWishList(products.id,e.target)
    }} className="  rounded-md"

    >

<i  id={products.id} className={`text-black text-[1.7rem]  fa-solid fa-heart`}></i>

</button>
</div>

    </div>

    </>
  )
})}
    </div>

    </div>
    </div>

</>
  )
}
