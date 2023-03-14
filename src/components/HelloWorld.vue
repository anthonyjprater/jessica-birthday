<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper';

// Import Swiper Styles
import 'swiper/css';

import "swiper/css/thumbs"
import "swiper/css/free-mode"
// import 'swiper/css/pagination';
// import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
// import "swiper/css/zoom";

const photos = [  
  '@/assets/jess0.JPG',
  '@/assets/jess10.JPG',
  '@/assets/jess20.JPG',
  '@/assets/jess30.JPG',
  '@/assets/jess60.JPG',
  '@/assets/jess80.JPG',
  '@/assets/jess89.JPG',
  '@/assets/jess100.JPG'
]

const images = photos.map(photo => photo)

console.log(images)

// function getFullUrl(relativeUrl) {
//   return new URL(relativeUrl, import.meta.url).href
// }

let thumbsSwiper = null;

const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper;
}

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
<Swiper
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="[FreeMode, Navigation, Thumbs]"
    class="mySwiper2"
  >
    <SwiperSlide v-for="(photo, i) in images" :key="i">
      <img :src="`${photo}`" alt="">
    </SwiperSlide>
  </Swiper>

  <Swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="[FreeMode, Navigation, Thumbs]"
    class="mySwiper"
  >
    <SwiperSlide class="thumb-nav" v-for="(photo, i) in images" :key="i">
      <img :src="`${photo}`" alt="">
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>



.swiper {
  width: 100%;
  height: 75%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  background: #000;
}

/* .swiper-wrapper.thumb-nav {
  height: 20%;
} */
.thumb-nav img {
  object-fit: cover;
}

.mySwiper2 div.swiper-button-next,
.mySwiper2 div.swiper-button-prev {
  color: #c0c;
}

.mySwiper {
  height: 10%;
}

.mySwiper2 {
  min-height: 500px;
}

@media (min-width: 1024px) {
  .swiper {
    height: 100%;
  }
}
</style>
