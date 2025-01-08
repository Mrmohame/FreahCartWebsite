import axios from 'axios'
import {useFormik }from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from "./Login.module.css"
import { userContext } from '../../../Context/UserContext'
export default function Login() {
let navigate=useNavigate()
  let [getApi,setGetApi]=useState(false)
  let [globalError,setGlobalError]=useState("")

  let {setCheckLogin,setUserName,setUserEmail} = useContext(userContext)

let validationSchema=yup.object().shape({

  email:yup.string().email("email invalid").required("email is required"),
  password:yup.string().matches(/^[\d]{3,8}$/,"password invalid").required("password is required"),


})


async function handleSubmitApi(values){
  setGetApi(true)
     axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
 .then(
  function(data){
    localStorage.setItem("token", data?.data?.token)
    localStorage.setItem("userName", data.data.user.name)
    localStorage.setItem("userEmail", data.data.user.email)
    setUserEmail(data.data.user.email)
    setCheckLogin(data.data.token)
    setUserName(data.data.user.name)
    setGetApi(false)
    console.log(data);
    navigate('/')
  }
 ).catch(
  function(error){
    setGlobalError(error.response.data.message)
    setGetApi(false)
    console.log(error);
    // console.log(error.message);
    
  }
 )
  
}



  let formik=useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    onSubmit:handleSubmitApi,
    validationSchema:validationSchema,
  })
  return (
    <>
    

<form className="max-w-md mx-auto mt-16 pt-16" onSubmit={formik.handleSubmit}>

{globalError?<div className="p-4 mb-4 my-5  text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{globalError}</span>
</div>:null}



  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  
    {formik.errors.email && formik.touched.email ?<div className="p-4 mb-4 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.email}</span>
</div>:null}
  
  </div>

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  
    {formik.errors.password && formik.touched.password ?<div className="p-4 mb-4 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.password}</span>
</div>:null}
  
  </div>

  <button type="submit" className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
 
 { getApi?<span className={style.loader}></span>:"Submit"}



  
    </button>

    <p className='text-center'>Don't have account ? <Link to="/register" className='text-blue-600'>Register</Link> </p>
    <Link to="/forgetPassword" className='text-blue-600'>
     <p className='text-center'>Forget Password ?</p>
    </Link> 
</form>


    </>
   
  )
}