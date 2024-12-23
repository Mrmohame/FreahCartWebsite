import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"

export default function MainSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    arrows:false
  };

  return (
    <>
    
   <div className='md:mt-20  grid sm:grid-cols-1 md:grid-cols-[75%_25%] p-10 m-3'>
<div>
<Slider className='' {...settings}>
  <img src={img1} alt="" className='w-full h-[400px] object-fill'  srcset="" />
  <img src={img2} alt="" className='w-full h-[400px] object-fill' srcset="" />
  <img src={img3} alt="" className='w-full h-[400px] object-fill' srcset="" />
  </Slider>
</div>
<div>
<img src={img4} alt="" className='w-full h-[200px] object-cover bg-[top]' />
<img src={img5} alt="" className='w-full h-[200px] object-cover' />
</div>
   </div>


    </>
   
  )
}
