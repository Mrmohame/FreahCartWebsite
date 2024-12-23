import React, { useEffect, useState } from 'react'

import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

import Navbar1 from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>

    <Navbar1/>

<Outlet></Outlet>
<Footer/>
    </>
   
  )
}
