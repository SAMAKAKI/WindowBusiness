import React, { useEffect, useRef } from 'react'
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel } from '../carousel';

gsap.registerPlugin(ScrollTrigger);

export const Assortment: React.FC = () => {
  const images = [
    "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg",
    "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg",
    "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg",
    "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg",
  ];
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const carouselRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current || !carouselRef1.current || !carouselRef2.current || !carouselRef3.current) return;

    gsap.fromTo(
      [carouselRef.current, carouselRef2.current],
      { opacity: 0, x: "100%" },
      {
        opacity: 0.5,
        x: "-50%",
        scrollTrigger: {
          trigger: [carouselRef.current, carouselRef2.current],
          start: "top 80%",
          end: "bottom 40%",
          scrub: .5,
        },
      }
    );
    gsap.fromTo(
      [carouselRef1.current, carouselRef3.current],
      { opacity: 0, x: "-50%" },
      {
        opacity: 0.5,
        x: "0",
        scrollTrigger: {
          trigger: [carouselRef1.current, carouselRef3.current],
          start: "top 80%",
          end: "bottom 40%",
          scrub: .5,
        },
      }
    );
  }, []);
  return (
    <div className='assortment-wrapper'>
      <Carousel ref={carouselRef} images={images} version={1}/>
      <Carousel ref={carouselRef1} images={images} version={1}/>
      <Carousel ref={carouselRef2} images={images} version={1}/>
      <Carousel ref={carouselRef3} images={images} version={1}/>
      <div className="assortment-logo">
        <h2>Пластикові</h2>
        <h2>Кольорові</h2>
        <h2>Пластикові</h2>
        <h2>Кольорові</h2>
      </div>
    </div>
  )
}
