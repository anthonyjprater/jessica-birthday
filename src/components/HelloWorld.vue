<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectCoverflow, Navigation, Zoom } from 'swiper';

// Import Swiper Styles
import 'swiper/css';

import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import "swiper/css/zoom";

const photos = [
  'IMG_0044-3.JPG',
  'IMG_0051.JPG',
  'IMG_0054-3.JPG',
  'IMG_0057-2.JPG',
  'IMG_0059-3.JPG',
  'IMG_0063.JPG',
  'IMG_0066-2.JPG',
  'IMG_0070-2.JPG',
]

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
<Swiper
    :effect="'coverflow'"
    :zoom="true"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation, EffectCoverflow, Zoom]"
    class="mySwiper"
  >
    <SwiperSlide v-for="(photo, i) in photos" :key="i">
      <img :src="`src/assets/${photo}`" alt="">
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>



.swiper {
  width: 100%;
  height: 100%;
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
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  color: #c0c;
}

@media (min-width: 1024px) {

}
</style>
