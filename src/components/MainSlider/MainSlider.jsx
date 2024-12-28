// import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";
import img1 from "../../assets/images1.jpg"
import img2 from "../../assets/images1 (1).jpg"
import img3 from "../../assets/images1 (2).jpg"
import img4 from "../../assets/images1 (3).jpg"
import img5 from "../../assets/images1 (4).jpg"


// export default function MainSlider() {

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed:2000,
//     arrows:false
//   };

//   return (
//     <>
    



//    <div className='bg-green-900 w-[80%] md:w-[40%] grid md:grid-cols-1 mx-auto'>
// <div className='bg-red-600'>
// <Slider className='' {...settings}>
//   <img src={img1} alt="" className='w-full'  srcset="" />
//   <img src={img2} alt="" className='w-full' srcset="" />

//   </Slider>
// </div>
// <div className='bg-blue-700'>
// <img src={img3} alt="" className='w-full' srcset="" />
// <img src={img4} alt="" className='  w-full ' />
// </div>
//    </div>


//     </>
   
//   )
// }
import React from "react";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
 <div className="w-[40%] grid grid-cols-1 md:grid-cols-2 mx-auto my-5">
     <Slider  {...settings}>
      <div>
    <img className="w-full" src={img1} alt="" />
      </div>
      <div>
      <img className="w-full" src={img2} alt="" />
      </div>
      <div>
      <img className="w-full" src={img5} alt="" />
      </div>
    </Slider>
<div>
<img src={img3} alt="" />
<img src={img4} alt="" />
</div>
 </div>
  );
}