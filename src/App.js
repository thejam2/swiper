// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Controller,
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { useState } from "react";

function App() {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const [controlledSwiper, setControlledSwiper] = useState(null);

  

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={2}
        navigation // 화살표
        //pagination={{ clickable: true }} //점
        scrollbar={{ draggable: true }} //스크롤
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} >
            {slideContent}
          </SwiperSlide>
        ))} */}
      </Swiper>
      <hr />
      <Swiper
        modules={[Virtual, Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true, dragSize:'30px' }} //스크롤
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
    </>
  );
}

export default App;
