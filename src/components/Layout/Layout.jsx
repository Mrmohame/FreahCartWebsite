import React, { useContext, useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

import Navbar1 from '../Navbar/Navbar'
import { userContext } from '../../../Context/UserContext'

export default function Layout() {

  let {checkLogin,setCheckLogin,userName,setUserName}=useContext(userContext)

  return (
    <>

    <Navbar1/>

<Outlet></Outlet>
{checkLogin ==true && <Footer/> }

    </>
   
  )
}
