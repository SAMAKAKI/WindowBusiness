import React from 'react'
import { About, Assortment, AssortmentDetails, Menu, Welcome, Contact, Footer } from '../../components'
import './style.css'

export const Home: React.FC = () => {
  return (
    <>
    <div className='wrapper'>
      <Menu />
      <Welcome />
    </div>
    <Assortment />
    <div className='wrapper'>
      <AssortmentDetails />
      <About />
      <Contact />
    </div>
    <Footer />
    </>
  )
}

