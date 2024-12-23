import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../Context/CartContext'
import UseLoading from '../Hook/UseLoading'
import { Link } from 'react-router-dom'
import style from "../Products/Products.module.css"
import toast, { Toaster } from 'react-hot-toast';

export default function WishList() {

 let {addToCart,setNumOfItems,AddWishList,RemoveWishList,setnumOfWishList,numOfWishList}=useContext(CartContext)

 function JustOpen() {
  numOfWishList ?  numOfWishList?.map((id) => {
    document?.getElementById(id.id)?.classList?.replace("text-black","text-red-700")
  }):null
}
JustOpen()
async function makeWishList(id,theClickedProduct) {
  let res= await AddWishList(id)
  setnumOfWishList(res?.data?.data)
  
  theClickedProduct.classList.replace("text-black","text-red-700")
  if(res.data.status == "success"){
    toast.success('Successfully, you add Product to wishList!');
  }
}


async function removeAddedWishList(id,theClickedProduct) {
  let res= await RemoveWishList(id)
  // console.log(res);
  setnumOfWishList(res?.data?.data?.map((id) =>{ return(
    numOfWishList?.filter((x) => x.id == id)
  )})?.map((x)=>x[0]))
  console.log();
  
  theClickedProduct.classList.replace("text-red-700","text-black")
  if(res.data.status == "success"){
    toast.error('Successfully, you remove Product to wishList!');
  }
}

 function CheckUserWishList(id,theClickedProduct) {
// console.log(numOfWishList);

  
if(numOfWishList?.filter((Product) => Product.id == id || Product == id) == false){
  makeWishList(id,theClickedProduct)
  console.log("notFound");
  
}else{
  removeAddedWishList(id,theClickedProduct)
  console.log("Found");
}
  

  
 } 


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
if(numOfWishList == null || numOfWishList == "") {
  return <UseLoading/>
}

  return (
    <>
    
<div className='lg:mt-32'>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-5 mx-auto">
{numOfWishList? numOfWishList?.map((products) =>            <div key={products.id}  className={`py-8 px-4 m-1 ${style.CartDiv}  rounded-[15px]  hover:shadow-lg hover:shadow-green-500 duration-[500ms]`}>
           
        
    <div className="relative">
    <Link to={`/details/${products.id}/${products?.category?.name}`} key={products.id}>
    <img className='w-full' src={products.imageCover} alt="" />
    </Link>

    </div>
       
        
    <Link to={`/details/${products.id}/${products?.category?.name}`} key={products.id}>

      
      <h2 className='text-[16px]'>{products?.title?.split(" ").slice(0,2).join(" ")}</h2>
      <h3 className='text-blue-600 text-sm'>{products?.category?.name}</h3>
      <div className="rate flex justify-between">
        <span className='text-[15px]'>{products.price}EGP</span>
        <span className='text-[15px]'>{products.ratingsAverage}<i className="fa-solid fa-star text-green-500 ps-1"></i></span>

    </div>
       </Link>

<div className="flex justify-between items-center">
<button 
onClick={()=>callAdd(products.id)}

className={`${style.addCart} w-[80%] bg-green-600 text-white rounded-lg my-3 p-3`}><i class="fa-solid fa-plus"></i> Add to cart
</button>

<button
onClick={(theClickedProduct)=>CheckUserWishList(products.id,theClickedProduct.target)}
>
<i  id={products.id} className={`text-black text-[1.7rem]  fa-solid fa-heart`}></i>
</button>
</div>
    </div>)
    :null}
</div>
</div>

    </>
   
  )
}
