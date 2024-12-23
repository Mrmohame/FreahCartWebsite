import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouting(props) {
  if(localStorage.getItem("token") !== null){
return props.children
  }else{
    return <Navigate to="/login"/>
  }
  return (
    <>
    


    </>
   
  )
}
