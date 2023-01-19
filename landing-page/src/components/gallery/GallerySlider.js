import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import { galleryData } from '../../Data'
const GallerySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === galleryData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        data-aos='fade-in'
        data-aos-offset='100'
        data-aos-delay={galleryData[currentIndex].delay}
        className='w-full flex justify-center flex-col items-center h-full rounded-2xl bg-center bg-cover duration-500'
      >
        <img src={galleryData[currentIndex].image} className=' h-auto max-w-xl' alt='img' />
        <div className='text-lg text-primary fond-bold'>
          {galleryData[currentIndex].title}
        </div>
        <div className='max-w-[240px] text-lg'>
          {galleryData[currentIndex].message}
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {galleryData.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled style={{ color: slideIndex === currentIndex ? 'green' : null }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySlide