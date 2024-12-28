import React, { useContext, useEffect, useState } from 'react'
import { counterContext } from '../../../Context/CounterContext'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
// import AnotherCategories from '../anotherCategories/anotherCategories'
import { useTranslation } from 'react-i18next';




export default function Home() {
let {change,counter} = useContext(counterContext)


  return (
    <div className='mt-32'>



    <MainSlider></MainSlider>
    <CategorySlider></CategorySlider>
 
<Products></Products>

    </div>
   
  )
}
