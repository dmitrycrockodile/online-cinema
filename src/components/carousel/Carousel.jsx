import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import './carousel.scss';
import 'swiper/css/navigation';

function Carousel({children}) {
   return (
      <Swiper
         navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
         }}
         slidesPerView={5}
         modules={[Navigation]}
         breakpoints={{
            800: {
               slidesPerView: 3
            },
            1000: {
               slidesPerView: 4
            },
            1300: {
               slidesPerView: 5
            }, 
         }}
      >
         {children.map((child, i) => <SwiperSlide key={i}>{child}</SwiperSlide>)}

         <button className='btn-next'>
            <svg width="32" height="45" viewBox="0 0 16 45" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 40L14 21L2 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </button>
         <button className='btn-prev'>
            <svg width="32" height="45" viewBox="0 0 16 45" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 40L14 21L2 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </button>
      </Swiper>
   )
}

export default Carousel;