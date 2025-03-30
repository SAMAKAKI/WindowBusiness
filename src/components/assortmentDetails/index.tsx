import React from 'react'
import './style.css'
import { Carousel } from '../carousel';
import { slides } from '../../interface/slides';

export const AssortmentDetails: React.FC = () => {
  return (
    <Carousel version={2} slides={slides} slideWidth={320} visibleSlides={5}/>
  )
}
