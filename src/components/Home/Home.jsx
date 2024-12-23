import React, { useContext, useEffect, useState } from 'react'
import { counterContext } from '../../../Context/CounterContext'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
// import AnotherCategories from '../anotherCategories/anotherCategories'





export default function Home() {
let {change,counter} = useContext(counterContext)
  
  return (
    <>

    <MainSlider></MainSlider>
    <CategorySlider></CategorySlider>
    {/* <AnotherCategories></AnotherCategories> */}
<Products></Products>

    </>
   
  )
}
