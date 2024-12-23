import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

// const swiper = new Swiper('.swiper', {
//   scrollbar: {
//     el: 	any,
   
//   },
// });

export default function About() {




  return (
    <>
      <Swiper
        scrollbar={{
          
          hide: true,
          draggable:true,
          snapOnRelease:true,
          scrollbarDisabledClass:"swiper-scrollbar-disabled",
          
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/3e/75/2a/3e752aad5722a77482f36edf0327544c.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/37/b0/4f/37b04f9785931d48021dffe75f598190.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/86/0d/b4/860db45a808da1f9201313b3b1e72386.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/5f/0a/da/5f0ada532717c52ea8802624ed6d2006.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/aa/b4/ab/aab4ab073bbfdf0b238827df0a627f81.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
