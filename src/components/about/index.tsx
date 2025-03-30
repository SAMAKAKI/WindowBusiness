import React, { useLayoutEffect, useRef } from 'react'
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className='about-wrapper' ref={aboutRef}>
      <div className="about-items">
        <div className="about-item">
          <div className="about-item-left">
            <h2>Наша Команда</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus vero accusamus, ea suscipit illum maiores modi, veniam dignissimos inventore reiciendis rem tenetur veritatis id possimus numquam, magni consequuntur repellat!
            Veritatis cum nesciunt itaque ad. Possimus eligendi dolor, id ipsum sit voluptatum aut aperiam, ipsam harum eos deleniti nisi pariatur distinctio! Excepturi ut consequuntur mollitia perspiciatis doloribus dolorem natus eum.
            Quod quo nisi ipsam distinctio velit facere corporis eos, in rerum soluta autem, quidem vero temporibus natus fugit illum praesentium voluptatibus quibusdam esse laudantium omnis. Harum aspernatur molestiae alias expedita.</p>
          </div>
          <div className="about-item-right">
            <img src="/img1.jpg" alt="" />
          </div>
        </div>
        <div className="about-item reverse">
          <div className="about-item-left">
            <h2>Кар'єра</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus vero accusamus, ea suscipit illum maiores modi, veniam dignissimos inventore reiciendis rem tenetur veritatis id possimus numquam, magni consequuntur repellat!
            Veritatis cum nesciunt itaque ad. Possimus eligendi dolor, id ipsum sit voluptatum aut aperiam, ipsam harum eos deleniti nisi pariatur distinctio! Excepturi ut consequuntur mollitia perspiciatis doloribus dolorem natus eum.
            Quod quo nisi ipsam distinctio velit facere corporis eos, in rerum soluta autem, quidem vero temporibus natus fugit illum praesentium voluptatibus quibusdam esse laudantium omnis. Harum aspernatur molestiae alias expedita.</p>
          </div>
          <div className="about-item-right reverse-img">
            <img src="/img1.jpg" alt="" />
          </div>
        </div>
        <div className="about-item">
          <div className="about-item-left">
            <h2>Виробництво</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus vero accusamus, ea suscipit illum maiores modi, veniam dignissimos inventore reiciendis rem tenetur veritatis id possimus numquam, magni consequuntur repellat!
            Veritatis cum nesciunt itaque ad. Possimus eligendi dolor, id ipsum sit voluptatum aut aperiam, ipsam harum eos deleniti nisi pariatur distinctio! Excepturi ut consequuntur mollitia perspiciatis doloribus dolorem natus eum.
            Quod quo nisi ipsam distinctio velit facere corporis eos, in rerum soluta autem, quidem vero temporibus natus fugit illum praesentium voluptatibus quibusdam esse laudantium omnis. Harum aspernatur molestiae alias expedita.</p>
          </div>
          <div className="about-item-right">
            <img src="/img1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
