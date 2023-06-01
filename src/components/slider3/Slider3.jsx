import React from 'react'
import './slider3.css'
import SlidingImage3 from './SlidingImage3';
import IMG1 from '../../images/Rectangle 25.png'
import IMG2 from '../../images/Rectangle 27.png'
import IMG3 from '../../images/Rectangle 29.png'
import IMG4 from '../../images/Rectangle 31.png'
import IMG5 from '../../images/Rectangle 33.png'
import IMG6 from '../../images/Rectangle 35.png'
import IMG7 from '../../images/Rectangle 37.png'
import IMG8 from '../../images/Rectangle 39.png'
// import IMG9 from '../../images/Rectangle 47.png'
// import IMG10 from '../../images/Rectangle 49.png'

const Slider3 = () => {
  const images = [
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
    IMG7,
    IMG8,
  ];
  return (
    <section className="slider3">
      <h4>Find things you'll love. Support independent sellers.</h4>
      <p>Only on polka.</p>
      <SlidingImage3 images={images} className='styles' />
    </section>
  )
}

export default Slider3