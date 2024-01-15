'use client'
import Image from 'next/image'
import Slider from 'react-slick'

import Depoimento1 from '@/assets/depoimentos/1.png'
import Depoimento2 from '@/assets/depoimentos/2.png'
import Depoimento3 from '@/assets/depoimentos/3.png'
import Depoimento4 from '@/assets/depoimentos/4.png'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className="!flex items-center justify-center w-full">
        <Image
          src={Depoimento1}
          alt="Depoimento 1"
          width={300}
          height={300}
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="!flex items-center justify-center w-full">
        <Image
          src={Depoimento2}
          alt="Depoimento 2"
          width={300}
          height={300}
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="!flex items-center justify-center w-full">
        <Image
          src={Depoimento3}
          alt="Depoimento 3"
          width={300}
          height={300}
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="!flex items-center justify-center w-full">
        <Image
          src={Depoimento4}
          alt="Depoimento 4"
          width={300}
          height={300}
          quality={100}
          className="object-contain"
        />
      </div>
    </Slider>
  )
}
