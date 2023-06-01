import React from 'react'
import IMG9 from '../../images/Rectangle 47.png'
import IMG10 from '../../images/Rectangle 49.png'
import IMG11 from '../../images/Rectangle 51.png'
import IMG12 from '../../images/Rectangle 53.png'
import IMG13 from '../../images/Rectangle 55.png'
import IMG14 from '../../images/Rectangle 57.png'
import SlidingImage4 from './SlidingImage4';
import './slider4.css'


const Slider4 = () => {
  const imagess = [
    IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14,IMG9, IMG10, IMG11, IMG12, IMG13, IMG14
  ]
  return (
    <section className="slider4">
      <h4>Discover unique hand-picked items</h4>
      <SlidingImage4 imagess={imagess}/>
    </section>
  )
}

export default Slider4