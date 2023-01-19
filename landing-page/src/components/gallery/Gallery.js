import React from 'react'

import GallerySlide from './GallerySlider'
const Gallery = () => {
  return (
    <section id='#gallery' >
      <div className='container-fluid mx-auto' 
        data-aos='zoom-in'
        data-aos-offset='100'
        data-aos-delay='500'
      >
        <div className='bg-neutral-200 min-h-[600px]'>
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
          <h2 className=' text-[40px] font-bold leading-tight font-primary  text-white text-center mb-[80px]'>Gallery</h2>
            <GallerySlide />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery