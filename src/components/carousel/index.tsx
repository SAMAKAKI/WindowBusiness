import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Slides } from '../../interface/slides'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CarouselProps = {
  ref?: React.Ref<HTMLDivElement>,
  images?: string[],
  slides?: Slides[],
  slideWidth?: number,
  visibleSlides?: number,
  version?: number
}

export const Carousel: React.FC<CarouselProps> = ({ref, images = [], slides = [], slideWidth = 0, visibleSlides = 1, version = 1}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const maxIndex = slides?.length - visibleSlides;

   useEffect(() => {
    if (carouselRef.current && activeIndex <= maxIndex) {
      gsap.to(carouselRef.current, {
        x: -activeIndex * slideWidth,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [activeIndex, maxIndex, carouselRef, slideWidth]);

  useEffect(() => {
    if (activeRef.current) {
      gsap.fromTo(activeRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [activeIndex, activeRef]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    { version === 1 && (
      <div className="carousel-container">
        <div className="carousel" ref={ref}>
          { images.map((image, index) => (
            <img src={image} alt={image} key={index}/>
          )) }
        </div>
      </div>
    ) }
    { version === 2 && (
      <div className='assortment-details-wrapper'>
        <div className="assortment-details-active" ref={activeRef}>
          <button className='assortment-arrow' onClick={prevSlide}><FaArrowLeftLong /></button>
          <img src={slides[activeIndex].img} alt={slides[activeIndex].title} />
          <div className="assortment-details-active-description">
            <h2>{slides[activeIndex].title}</h2>
            <div className="assortment-details-active-description-info">
              <div className="colors">
                <div className="brown"></div>
                <div className="white"></div>
                <div className="gray"></div>
              </div>
              <p>{slides[activeIndex].price}</p>
            </div>
            <p className='assortment-details-active-description-description'>
              {slides[activeIndex].description}
            </p>
          </div>
          <button className='assortment-arrow' onClick={nextSlide}><FaArrowRightLong /></button>
        </div>
        <div className="assortment-details-carousel-container">
          <div ref={carouselRef} className="assortment-details-carousel" style={{width: `${slides.length * slideWidth - 20}px`, transform: `${activeIndex <= maxIndex && 'translateX(-${activeIndex * slideWidth}px)}' }`}}>
            {slides.map((slide, index) => (
              <div className={`assortment-details-slide ${activeIndex === index ? 'slide-active' : ''}`} key={index}>
                <img src={slide.img} alt={slide.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ) }
    </>
  )
}
