'use client'


import React, { useEffect, useState } from 'react';
import ProjectCard from "./ui/ProjectCard"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../public/styles/customSwiper.css'

const ProjectCarousel = () => {
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
        <ProjectCard
          title={"BLM Orchid"}
          image={"/assets/images/project-img-1.png"}
          place={"Mannarkkad"}
          squareFeet={"1500 SQFT X6"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <ProjectCard
          title={"BLM Orchid"}
          image={"/assets/images/project-img-2.png"}
          place={"Mannarkkad"}
          squareFeet={"1500 SQFT X6"}
        />
        </SwiperSlide>
        <SwiperSlide>
        <ProjectCard
          title={"BLM Orchid"}
          image={"/assets/images/project-img-3.png"}
          place={"Mannarkkad"}
          squareFeet={"1500 SQFT X6"}
        />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination hidden sm:inline absolute bottom-[-35px] left-0"></div>
    </div>
  );
}

export default ProjectCarousel;