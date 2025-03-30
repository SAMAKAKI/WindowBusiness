import React from 'react'
import './style.css'
import '../menu/animation.css'

export const Welcome: React.FC = () => {
  return (
    <div className='welcome-wrapper'>
      <div className="welcome-right">
        <h1 className='welcome-logo'>business</h1>
        <p className='welcome-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ea praesentium mollitia a, molestiae, laboriosam cumque vero explicabo deleniti placeat doloribus.</p>
        <div className="welcome-hr"></div>
        <a href="" className='welcome-buy-button'>Купити Зараз</a>
      </div>
      <div className="welcome-left">
        <img src="/welcome-windows.png" alt="" className='welcome-image'/>
      </div>
    </div>
  )
}
