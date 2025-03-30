import React from 'react'
import './style.css'
import { APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

export const Contact: React.FC = () => {
  return (
    <div className='contact-wrapper'>
      <div className="contact-left">
        <form className='contact-form'>
          <div className="input-group">
            <div className="input">
              <label>Імя *</label>
              <input type="text" placeholder='Імя'/>
            </div>
            <div className="input">
              <label>Призвище *</label>
              <input type="text" placeholder='Призвище'/>
            </div>
          </div>
          <div className="input-group">
            <div className="input">
              <label>Пошта *</label>
              <input type="email" placeholder='Пошта'/>
            </div>
            <div className="input">
              <label>Телефон *</label>
              <input type="tel" placeholder='Телефон'/>
            </div>
          </div>
          <div className="input">
            <label>Як ми можемо допомогти?</label>
            <textarea placeholder='Як ми можемо допомогти?'></textarea>
          </div>
          <button type='submit'>Надіслати</button>
        </form>
      </div>
      <div className="contact-right">
        <APIProvider apiKey={`${import.meta.env.VITE_GOOGLE_MAP_API}`}>
          <Map disableDoubleClickZoom  defaultZoom={13} defaultCenter={{lat: 50.0, lng: 36.306}} gestureHandling={"none"} disableDefaultUI>
            <Marker position={{lat: 50.0, lng: 36.306}} />
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}
