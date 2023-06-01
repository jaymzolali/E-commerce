import React, { useState, useEffect } from 'react';
import './slider4.css';
import Left from '../../images/Left expand.png';
import Right from '../../images/Right expand.png';
import { slider4Data } from './slider4Data';

const SlidingImage4 = ({ imagess }) => {
  const [currentImageIndexx, setCurrentImageIndexx] = useState(0);

  useEffect(() => {
    const slideTimeout1 = setTimeout(() => {
      setCurrentImageIndexx((prevIndexx) => (prevIndexx === imagess.length - 1 ? 0 : prevIndexx + 1));
    }, 2000);

    return () => clearTimeout(slideTimeout1);
  }, [currentImageIndexx, imagess.length]);

  const prevImagee = () => {
    setCurrentImageIndexx((prevIndexx) => (prevIndexx === 0 ? imagess.length - 1 : prevIndexx - 1));
  };

  const nextImagee = () => {
    setCurrentImageIndexx((prevIndexx) => (prevIndexx === imagess.length - 1 ? 0 : prevIndexx + 1));
  };

  const getVisibleImages = () => {
    const endIndex = currentImageIndexx + 5;
    return imagess.slice(currentImageIndexx, endIndex);
  };

  return (
    <div>
      <div className="image-container">
        <button onClick={prevImagee}><img src={Left} alt="" /></button>
        {getVisibleImages().map((imagee, index) => (
          <div key={index}>
            <img
              src={imagee}
              alt={`Sliding Images ${index + 1}`}
              className={index === 1 ? 'active' : ''}
            />
            <p>{slider4Data[currentImageIndexx + index]?.title_}</p>
            <h6>{slider4Data[currentImageIndexx + index]?.amount}</h6>
          </div>
        ))}
        <button onClick={nextImagee}><img src={Right} alt="" /></button>
      </div>
    </div>
  );
};

export default SlidingImage4;
