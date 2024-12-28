import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export let CartContext=createContext(0)


let headers={
  token:localStorage.getItem("token"),
}

export default function CartContextProvider(props) {

let [numOfItems,setNumOfItems] = useState(0)
let [numOfWishList,setnumOfWishList] = useState(0)


function addToCart(id){
  return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {productId:id},{headers:headers})
  .then((response)=>response)
  .catch((error)=>error)
}
function CartData(){
  return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {headers:headers})
  .then((response)=>response)
  .catch((error)=>error)
}
function deleteCart(id){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {headers:headers})
  .then((response)=>response)
  .catch((error)=>error)
}
function updateCart(id,count){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count} ,{headers:headers})
  .then((response)=>response)
  .catch((error)=>error)
}
function CheckOut(id,url,values){
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,
    {
    shippingAddress:values
  },
{
  headers:headers
}
)
  .then((response)=>response)
  .catch((error)=>error)
}
function AddWishList(id){
  return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId:id
    },
{
  headers:headers
}
)
  .then((response)=>response)
  .catch((error)=>error)
}
function RemoveWishList(id){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
{
  headers:headers
}
)
  .then((response)=>response)
  .catch((error)=>error)
}
function GetUserWishList() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      headers:headers
    }
    )
      .then((response)=>
        {console.log(response.data.data)

          setnumOfWishList(response?.data?.data)
        }
    )
      .catch((error)=>error)
}


async function getNumberOfItems(){
  let {data}= await CartData()
  setNumOfItems(data)
  }

useEffect(()=>{
 if(headers == true){
  getNumberOfItems()
  GetUserWishList()
 }
},[])

  return <CartContext.Provider value={{numOfWishList,setnumOfWishList,numOfItems,setNumOfItems,addToCart,CartData,deleteCart,updateCart,CheckOut,AddWishList,RemoveWishList}}>
    {props.children} 
   </CartContext.Provider>
  
}

