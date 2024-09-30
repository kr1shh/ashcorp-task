'use client'

import React, { useEffect, useState } from 'react';
import TestimonialCard from "./ui/TestimonialCard"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../public/styles/customSwiper.css'

const TestimonialCarousel = () => {
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
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialCard
            bgColor="#E3F4EB"
            clientReview={
              "I am Vineesh Kumaran, a graphic designer and proud member of the BLM Society. utmost satisfaction with the service and support I have received from the BLM Society. "
            }
            clientName={"Vineesh Kumaran"}
            clientDesignation={"IIT Engineer"}
            profileImg={"/assets/icons/profile-icon-1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            bgColor="#FEF9DB"
            clientReview={
              "I am Vineesh Kumaran, a graphic designer and proud member of the BLM Society. utmost satisfaction with the service and support I have received from the BLM Society. "
            }
            clientName={"Vineesh Kumaran"}
            clientDesignation={"IIT Engineer"}
            profileImg={"/assets/icons/profile-icon-1.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            bgColor="#FEEEE5"
            clientReview={
              "I am Vineesh Kumaran, a graphic designer and proud member of the BLM Society. utmost satisfaction with the service and support I have received from the BLM Society. "
            }
            clientName={"Vineesh Kumaran"}
            clientDesignation={"IIT Engineer"}
            profileImg={"/assets/icons/profile-icon-1.png"}
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination hidden sm:inline absolute bottom-[-35px] left-0"></div>
    </div>
  );
}

export default TestimonialCarousel;