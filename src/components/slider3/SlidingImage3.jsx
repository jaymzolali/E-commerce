import React, { useState, useEffect } from 'react';
import './slider3.css';
import Left from '../../images/Left expand.png';
import Right from '../../images/Right expand.png';
import { slider3Data } from './slider3Data';

const SlidingImage3 = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearTimeout(slideTimeout);
  }, [currentImageIndex, images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleImages = () => {
    const endIndex = currentImageIndex + 7;
    return images.slice(currentImageIndex, endIndex);
  };

  return (
    <div>
      <div className="image-container">
        <button onClick={prevImage}><img src={Left} alt="" /></button>
        {getVisibleImages().map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Sliding Images ${index + 1}`}
              className={index === 1 ? 'active' : ''}
            />
            <p>{slider3Data[currentImageIndex + index]?.title}</p>
          </div>
        ))}
        <button onClick={nextImage}><img src={Right} alt="" /></button>
      </div>
    </div>
  );
};

export default SlidingImage3;
