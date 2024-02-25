import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'

const Carousel = () => {
  return (
    <>
      <div className="main-carousel -z-1">
      <Swiper
        
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        
  
        cssMode={true}
        sticky={false}
        freeMode={{ enable: true }}
        mousewheel={{
          mousewheel: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        modules={[ Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
            <div className='slide1 flex w-full h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-35 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full " src="../../Public/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full  " src="../../Public/slide3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full " src="../../Public/slide4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="../../Public/slide5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="../../Public/slide6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="../../Public/slide7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="../../Public/slide8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src="../../Public/slide9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Carousel