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
          <Container className="w-full h-full flex flex-col items-center justify-center gap-12 text-white">
            <h1 className="font-bold text-4xl">
              Все для электрики в одном месте!
            </h1>
            <p className="w-1/2 text-center">
              Получите профессиональное оборудование и комплектующие для
              электромонтажа! У нас можно найти кабельно-проводниковую
              продукцию, низковольтное оборудование, электроустановочные и
              электромонтажные изделия, светотехническую продукцию, системы для
              прокладки кабеля, приборы учета и управления, инструменты и
              средства защиты, а также шкафы для оборудования.
            </p>
            <p className="w-full text-center">Качество гарантировано!</p>
            <Link
              href={PATHS.catalog}
              className="p-2 bg-accent text-black animate-bounce"
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
      {/* <SwiperSlide>
        <Image
          fill
          priority
          objectFit="cover"
          objectPosition="center"
          src="/intro/intro.jpg"
          alt="hands"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill
          priority
          objectFit="cover"
          objectPosition="center"
          src="/intro/intro.jpg"
          alt="hands"
        />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Banner;
