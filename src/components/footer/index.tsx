import React from 'react'
import './style.css'
import { FaInstagram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'

export const Footer: React.FC = () => {
  return (
    <>
    <div className='footer-wrapper'>
      <div className="footer-info">
        <div className="footer-logo">business</div>
        <div className="footer-navigation">
          <h3>Навігація</h3>
          <a href=''>Асортимент</a>
          <a href=''>Про Нас</a>
          <a href=''>Контакт</a>
          <a href=''>Купити Зараз</a>
        </div>
        <div className="footer-social">
          <h3>Cоціальні Mережі</h3>
          <a href=''><FaInstagram />Instagram</a>
        </div>
        <div className="footer-contact">
          <h3>Контакт</h3>
          <a href=''><MdEmail />example@email.com</a>
          <a href=''><TbWorld />example-website.com</a>
        </div>
      </div>
    </div>
    <p className='footer-copyright'>&copy; 2025 SAMAKAKI. All rights reserved.

</p>
    </>
  )
}

