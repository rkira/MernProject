// HomePage.js

import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length;

    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }

    const translation = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translation})`;
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Run the effect when currentIndex changes

  return (
    <div>
      <header>
        <h2>TRIVENIEYE+</h2>
      </header>
      <img
        width="338"
        height="263"
        src="https://trivenieyeplus.com/wp-content/uploads/2023/07/cropped-final-1.png"
        className="custom-logo"
        alt="TriveniEye+"
        decoding="async"
        srcSet="https://trivenieyeplus.com/wp-content/uploads/2023/07/cropped-final-1.png 338w, https://trivenieyeplus.com/wp-content/uploads/2023/07/cropped-final-1-300x233.png 300w"
        sizes="(max-width: 338px) 100vw, 338px"
      />

      <div className="carousel-container">
        <div className="carousel">
          <img src=" " alt="Placeholder Image 1" />
          <img src=" " alt="Placeholder Image 2" />
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default HomePage;
