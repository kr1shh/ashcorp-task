'use client'
import React, { useEffect, useState } from 'react';
import ServiceCard from "./ui/ServiceCard"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './serviceCarousel.css'

const ServiceCarousel = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  return (
    <div className="relative w-full flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <ServiceCard
            title="BLM College"
            image={"/assets/images/service-img-1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Food, Civil Supplies"
            image={"/assets/images/service-img-2.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            title="Land Development"
            image={"/assets/images/service-img-3.png"}
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination hidden sm:inline absolute bottom-[-35px] left-0"></div>
    </div>
  );
}

export default ServiceCarousel;