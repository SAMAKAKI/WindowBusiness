import React from 'react'
import './style.css'
import './animation.css'

export const Menu: React.FC = () => {
  return (
    <div className='menu'>
      <div className="menu-items">
        <div className="menu-logo">
          <p>business</p>
        </div>
        <div className="menu-navigation-items">
          <div className="menu-navigation-item">
            <a href="">Асортимент</a>
          </div>
          <div className="menu-navigation-item">
            <a href="">Про Нас</a>
          </div>
          <div className="menu-navigation-item">
            <a href="">Контакт</a>
          </div>
        </div>
        <a href='' className="menu-buy-button">Купити Зараз</a>
      </div>
    </div>
  )
}
