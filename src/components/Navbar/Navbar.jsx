"use client";
import React, {  useContext, useEffect, useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { counterContext } from '../../../Context/CounterContext'
import { userContext } from '../../../Context/UserContext'
import style from "./Navbar.module.css"
import axios from 'axios'
import { CartContext } from '../../../Context/CartContext'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import UseProducts from '../Hook/UseProducts';


export default function Navbar1() {
let navigate=useNavigate()
let {counter}=useContext(counterContext)
let [hover,setHover]=useState(false)
let {checkLogin,setCheckLogin,userEmail,userName,setUserName}=useContext(userContext)
let {numOfItems,CartData} =useContext(CartContext)
let [allData,setAllData] = useState()
let [allCategories,setAllCategories] = useState([])
let [getCattegoryData1,setgetCattegoryData1] = useState("")
let [getCattegoryData2,setgetCattegoryData2] = useState("")
let [SearchElement,setSearchElement] = useState("")
let [mk,setmk] = useState("")


if(localStorage.getItem("token") == true){
  
function getAllCategories(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  .then(function({data}){

setAllCategories(data.data)

  }).catch((err)=>{


  })
}



let  {data,isError,error,isLoading}= UseProducts()


  let [hover2,setHover2]=useState(false)
  


  function searchProduct(val) {
    setSearchElement(val.value) 
  }


  function getSearchEle(){
  
  
    
    let x= data?.data?.data?.filter((x)=> x.title.split(" ").slice(0,2).join(" ") == SearchElement)
    console.log()

    navigate(`details/${x.length > 0 ? x[0].id : x.id}/${x.length > 0 ? x[0].category.name : x.category.name}`)
    setmk("jj")
    
  }


async function dataItems(){
  let {data} = await CartData()
  setAllData(data)
  
  }




function logOut(){
  localStorage.removeItem("token")
  setCheckLogin(false)

  
  localStorage.removeItem("userName")
setUserName(false)
navigate("/login")
}




function openTheCategory(nameCat){

  if(nameCat == "Electronics"){
    setgetCattegoryData1(  {   name: "hello electonics",
      images:["https://images-workbench.99static.com/MEijjNgm_3IeXBks81FDQ2yZiUU=/99designs-contests-attachments/81/81413/attachment_81413912","https://images-workbench.99static.com/4kuE55nW76Y1bZdy3js5wbLhtlE=/99designs-contests-attachments/80/80674/attachment_80674591","https://images-workbench.99static.com/WEVeQBc872MeRp3RYh5SDrY0QMg=/99designs-contests-attachments/93/93627/attachment_93627901","https://images-workbench.99static.com/XXjHNlHnSnS8OSg3787kduypKv4=/http://s3.amazonaws.com/projects-files/117/11705/1170593/05afe24c-1da1-466a-9d87-ebd200f6d90f.jpg","https://images-workbench.99static.com/j7MBQWoIrEH9aNM3bODpas9Crqo=/99designs-contests-attachments/116/116450/attachment_116450998","https://images-workbench.99static.com/Pf0mQiEoK_bRr6QIVHHnicagwGM=/99designs-contests-attachments/134/134758/attachment_134758766","https://images-workbench.99static.com/vw298eilHMPm8MhpfVzGG6ovxr8=/99designs-contests-attachments/111/111368/attachment_111368519","https://images-workbench.99static.com/U-mX9uGj2cwRyzoUQ1xW6TacHEw=/99designs-contests-attachments/128/128238/attachment_128238591","https://images-workbench.99static.com/cADqkS6jXuoyFQBlPyt0lqGPyuc=/99designs-contests-attachments/130/130108/attachment_130108692"],
  websites:["https://open.spotify.com/","https://soundcloud.com/","https://genius.com/"]
   })
  }


 
if(nameCat == "Music")  {
  setgetCattegoryData1({
    name: "hello music",
    images:["https://images-workbench.99static.com/MEijjNgm_3IeXBks81FDQ2yZiUU=/99designs-contests-attachments/81/81413/attachment_81413912","https://images-workbench.99static.com/4kuE55nW76Y1bZdy3js5wbLhtlE=/99designs-contests-attachments/80/80674/attachment_80674591","https://images-workbench.99static.com/WEVeQBc872MeRp3RYh5SDrY0QMg=/99designs-contests-attachments/93/93627/attachment_93627901","https://images-workbench.99static.com/XXjHNlHnSnS8OSg3787kduypKv4=/http://s3.amazonaws.com/projects-files/117/11705/1170593/05afe24c-1da1-466a-9d87-ebd200f6d90f.jpg","https://images-workbench.99static.com/j7MBQWoIrEH9aNM3bODpas9Crqo=/99designs-contests-attachments/116/116450/attachment_116450998","https://images-workbench.99static.com/Pf0mQiEoK_bRr6QIVHHnicagwGM=/99designs-contests-attachments/134/134758/attachment_134758766","https://images-workbench.99static.com/vw298eilHMPm8MhpfVzGG6ovxr8=/99designs-contests-attachments/111/111368/attachment_111368519","https://images-workbench.99static.com/U-mX9uGj2cwRyzoUQ1xW6TacHEw=/99designs-contests-attachments/128/128238/attachment_128238591","https://images-workbench.99static.com/cADqkS6jXuoyFQBlPyt0lqGPyuc=/99designs-contests-attachments/130/130108/attachment_130108692"],
websites:["https://open.spotify.com/","https://soundcloud.com/","https://genius.com/"]
 })
} 




setHover2(true)




}



useEffect(()=>{
  dataItems()
  getAllCategories()


// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('myCartDropdownButton1').click();
// });

}

,[])

useEffect(()=>{
  document.body.addEventListener("mouseover",()=> {
  setHover(false)
  },true)
  }
  
  ,[])
}

  return (
    <>
    


<div className="w-[100%] left-0 right-0  fixed top-0 z-50 ">

<Navbar className='py-4 shadow-md bg-yellow-200' >
  
  
     
        <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <Link to={"/"}  className="lg:ps-12 text-green-600 text-[1.5rem] font-bold">
          <i className="fa-solid fa-store me-3 text-green-800"></i>
E-commerce
   </Link>
        </span>



      <div className="flex md:order-2 pe-10">
 
 {checkLogin !== false ? 
 <>
       <Dropdown
       arrowIcon={false}
       inline
       label={
         <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
       }
       className=''
     >
       <Dropdown.Header>
         <span className="block text-sm">
         <span className='text-[1.2rem] me-2 text-green-700'>&#8594;</span>
          <span className='font-bold me-2'>Name <span className='mx-1'>:</span></span>{userName}
          </span>

         <span className="block truncate my-2 text-sm font-medium">
          <span className='text-[1.2rem] me-2 text-green-700'>&#8594;</span>
          <span className='font-bold me-2'>Email <span className='ms-2'>:</span>
          </span><br/><span className='me-2 text-green-700'>&spades;</span>{userEmail}</span>
       </Dropdown.Header>
       <Dropdown.Item>
       <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
        <span className="sr-only">
          Cart
        </span>
        <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
        </svg> 
        <span className="hidden sm:flex">My Cart  
       <span className='ms-2 text-green-500'> {numOfItems?.numOfCartItems} </span>
         </span>
        
      </button>
       </Dropdown.Item>
       <Dropdown.Item>
        Settings
        </Dropdown.Item>
       <Dropdown.Item>
        Earnings
        </Dropdown.Item>
       <Dropdown.Divider />
       <Dropdown.Item onClick={logOut}>
<NavLink  to="logout" className="text-red-700">Logout</NavLink>
</Dropdown.Item>
     </Dropdown>
     <Navbar.Toggle />
 </>    
     :
     <>
     
<ul className='md:flex'>
<li className="px-3 list-unstyled">
     <NavLink className="text-black" to="login">Login</NavLink>
     </li>
     <li className="px-3 list-unstyled">
     <NavLink className="text-black" to="register">Register</NavLink>
     </li>
</ul>
   </>

}


      

      </div>

      {checkLogin !== false ? 
 <>
 <Navbar.Collapse className='md:ms-10 py-2'>
       
     <NavLink className="p-[5px] text-[1.1rem]" to={"/"}> Home</NavLink>
     
          <NavLink className="p-[5px] text-[1.1rem]" to="/Categories">Categories</NavLink>

          <NavLink className="p-[5px] text-[1.1rem]" to={"/Brands"}>Brands</NavLink>
   
        <NavLink className="p-[5px] text-[1.1rem]" to={"/Card"}>Cart</NavLink>

        <NavLink className="p-[5px] text-[1.1rem]" to={"/WishList"}>WishList</NavLink>
   
      </Navbar.Collapse>


<div className="flex items-center max-w-sm lg:w-[100%] mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text"  id="simple-search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..."  onInput={(e)=>searchProduct(e.target)} />
    </div>
  <button
  onClick={(e)=> getSearchEle()}
  type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-green-800 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
  </svg>
  <span className="sr-only">Search</span>
</button>

</div>

</>
    :
    null
    }

    </Navbar>



















{/* <div className='w-[100%] bg-white  shadow-xl'>

<ul className=' flex  justify-evenly'>
{allCategories?.map((category) =>   <li className=' my-2 bg-white cursor-pointer hover:border-b-2 hover:border-black duration-500'
onMouseOver={(e)=>{
  setHover(true)
  openTheCategory(category?.name)
}}
>{category?.name}</li>)}



</ul>


{hover ?
<div className={`absolute text-black w-[100%] shadow-2xl  top-[100%] rounded-lg  z-40  `}>

{hover2 ?
    <div className="w-full flex flex-wrap flex-col bg-white text-black px-10">

    <div className="w-full my-5">

<h2 >{  getCattegoryData1?.name}</h2>


      </div>
    <h2>Top Brands</h2>
     <div className='flex flex-wrap my-8'>

     {  getCattegoryData1?.images?.map((image) => <img className='w-[5%] object-cover mx-4 rounded-xl' src={image} alt="" />)}
    
     </div>
    

    
    </div>
    :null
}

</div>
:null
}

</div> */}


</div>

 </>  
  )
}

