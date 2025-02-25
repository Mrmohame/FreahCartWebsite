import React, { useEffect, useState } from 'react'
import { useFormik, validateYupSchema } from "formik"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

export default function Login() {

let [RegisterError,setRegisterError] = useState("")
let [relod,setRelod] = useState(false)

let validationscheme=yup.object().shape(
  {

    email: yup.string().email("email invalid").required("email is required"),

    password: yup.string().matches(/^[0-9]{4,10}$/,"password invalid"),

  }
)


  let navigate=useNavigate()
  async function handleApi(values) {

    setRelod(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)

.then(
  function(x){
    setRelod(false)
    // console.log(x);
    navigate(`/`)
  }
 ) .catch(
  function(x){
    setRelod(false)
    console.log(x.response.data.message);
    setRegisterError(x.response.data.message)
  }
 )

// let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)

//     console.log(data);
//     if(data.message=="success"){
//       navigate(`/`)
//     }
    
  }
  let formikValues=useFormik({
    initialValues:{

      email: "",

      password: "",

    },
    onSubmit:handleApi,
    validationSchema:validationscheme
  })
  return (
    <>
    


    <form className="max-w-md mx-auto mt-20" onSubmit={formikValues.handleSubmit}>

{RegisterError?<p className='bg-red-700 p-4 text-center text-white my-5'>{RegisterError}</p> : null}



  <div className="relative z-0 w-full mb-5 group">
      <input type="email" onChange={formikValues.handleChange} onBlur={formikValues.handleBlur} value={formikValues.values.email} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      {formikValues.errors.email && formikValues.touched.email?
   <p className='bg-red-700 p-4 text-center text-white'>{formikValues.errors.email}</p>
   :null}
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>







  <div className="relative z-0 w-full mb-5 group">
      <input type="password" onChange={formikValues.handleChange} onBlur={formikValues.handleBlur} value={formikValues.values.password} name="password" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      {formikValues.errors.password && formikValues.touched.password?
   <p className='bg-red-700 p-4 text-center text-white'>{formikValues.errors.password}</p>
   :null}
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  
  



  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {relod?"good":"Submit"}
    
    </button>


</form>


    </>
   
  )
}
