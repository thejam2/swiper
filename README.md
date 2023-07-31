# swiper

https://swiperjs.com/react

## 설치
`npm i swiper`

## 리액트 기본 샘플
```
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

return (
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}//사용 모듈 추가
    spaceBetween={0}//슬라이드간 간격
    slidesPerView={2}//슬라이드 미리보이는 개수
    navigation // 화살표
    pagination={{ clickable: true }} //페이징(점)
    scrollbar={{ draggable: true }} //스크롤바
    onSwiper={(swiper) => console.log(swiper)}//
    onSlideChange={() => console.log("slide change")}//slide시 이벤트
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    ...
  </Swiper>
)
```
