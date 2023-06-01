import React from 'react'
import { data } from './data'
import './slider2.css'

const Slider2 = () => {
  return (
    <section className="slider2">
      {data.map((slide, index) => (
        <div className="slider2_">
          <div className="slider2__content">
            <h2>{slide.head}</h2>
            <p>{slide.para}</p>
          </div>
          <div className={`slider2__image ${slide.class}`}>
          {/* <img src={`${slide.image}`} alt='no images' /> */}

          </div>
        </div>
      ))}
    </section>
  )
}

export default Slider2