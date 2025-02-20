"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { PATHS } from "@/routes";

const Banner = () => {
  return (
    <Swiper
      className="w-full h-96 md:h-[700px] relative"
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      loop
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide className="w-full relative">
        <div className="absolute z-10 left-0 top-0 w-full h-full pt-24">
          <Container className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-12 text-white p-10">
            <h1 className="font-bold text-xl md:text-5xl">
              Все для электрики в одном месте!
            </h1>
            <p className="text-center md:hidden">
              Получите профессиональное оборудование и комплектующие для монтажа
              электрооборудования!
            </p>
            <p className="w-4/5 text-center text-xl hidden md:block bg-black bg-opacity-60 p-3">
              Получите профессиональное оборудование и комплектующие для монтажа
              электрооборудования! <br />
              <br /> Кабельно-проводниковая продукция, низковольтное
              оборудование, электроустановочные и электромонтажные изделия,
              светотехнические изделия, системы прокладки кабеля, устройства
              учета и управления, инструменты и средства защиты, а также шкафы
              для оборудования.
            </p>
            <p className="w-full text-center text-xl">
              Качество гарантировано!
            </p>
            <Link
              href={PATHS.catalog}
              className="p-2 bg-accent text-black animate-bounce text-xl"
            >
              Посмотреть каталог
            </Link>
          </Container>
        </div>
        <Image
          className="w-full h-full object-cover brightness-50"
          width={1920}
          height={1280}
          priority
          objectFit="cover"
          objectPosition="center"
          src="/intro/intro.jpg"
          alt="hands"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
