import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../Context/CartContext'
import { all } from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import UseLoading from '../Hook/UseLoading';

export default function Crud() {


let {CartData,deleteCart,updateCart,setNumOfItems} = useContext(CartContext)
let [allData,setAllData] = useState()


async function dataItems(){
let {data} = await CartData()
console.log(data);
// console.log();
setAllData(data)


}



async function deleteItems(id){
  let {data} = await deleteCart(id)
  console.log(data);
  setNumOfItems(data?.numOfCartItems)
  setAllData(data)

  if (data.status == "success") {
    toast.error("item is deleted");
    
   }else{
    toast.success('This is an error!');
    
   }
  
  }


  async function updateItems(id,count,checkBoolean){
    let {data} = await updateCart(id,count)
    console.log(data);
    
    setAllData(data)
    if (data.status == "success") {

  if (checkBoolean == true) {
    toast.success("item is added");
  }else{
    toast.error("item is deleted");
  }
   
      
      
     }else{
      toast.error("error")
     }
    
    }

useEffect(() => {

dataItems()
},[])
if(allData== null){
  return <UseLoading/>
  }
  return (
    <>
    
  

<div className="w-[80%] mx-auto overflow-x-auto shadow-md sm:rounded-lg mt-36">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {allData?.data?.products?.map(data =>     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={data.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {data.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=>updateItems(data.product.id,data.count-1,false)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
<span>{data.count}</span>
            </div>
            <button onClick={()=>updateItems(data.product.id,data.count+1,true)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {`${data.price} EGP `}
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>deleteItems(data.product.id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      </tr>)}
  

    </tbody>
  </table>

<Link to="/checkOut"><button className='w-full bg-green-700'>Check Out</button></Link>

</div>




    </>
   
  )
}
