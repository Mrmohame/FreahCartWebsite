import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseLoading from '../Hook/UseLoading'

export default function VerfiyCode() {



  let navigate = useNavigate()
const [first, setfirst] = useState(null)
const [error, seterror] = useState(null)

  function handleVerfiyCode(values){
    setfirst("false")
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values)
    .then(({data})=>{
      data.status == "Success" &&    navigate("/resetPassword")
      setfirst(data)
console.log(data);

    })
    .catch((err)=>{console.log(err)
      setfirst(err)
      seterror(err.response.data.message)
  })
  }

let formik =useFormik({
  initialValues:{
    resetCode: "",
  },
onSubmit:handleVerfiyCode
})

  return (
    <>
    
    <div className="mt-20 w-[50%] mx-auto">

    {error && <div className="p-4 mb-4 text-sm shadow-md text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">there is an Error !</span> {error}
</div> }

  <h2>reset your account password</h2>
  <form action="" onSubmit={formik.handleSubmit}>



<div className="relative my-4">
    <input 
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.resetCode}
          name='resetCode'
    type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
</div>
<button type="submit" className="text-green-900 bg-white border border-green-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Verify</button>

  </form>

{first == "false"  ? <UseLoading/> : "" }


</div>

    </>
   
  )
}
