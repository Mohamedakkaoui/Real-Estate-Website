import React, { useState, useRef } from 'react';

// Example image imports or definitions
import Image from '../../assets/property26.jpg';
import Image2 from '../../assets/property17.jpg';
import Image3 from '../../assets/property16.jpg';

const Carousel = () => {
  const images = [Image, Image2, Image3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handlePrevClick = () => {
    const previousSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(previousSlide);
  };

  const handleNextClick = () => {
    const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div id="default-carousel" className="relative w-[79%] m-auto h-[600px] mb-10 " ref={carouselRef}>
      <div className="relative overflow-hidden rounded-lg h-full">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img src={image} alt={`Slide ${index + 1}`} className="block w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-white/50'} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
