import React from 'react'
import { heroData } from '../../Data'
import Header from './Header'
const Hero = () => {
  const { title, subtitle, btnText, image } = heroData
  return (
    // xl: flex-row items - center h - full md: py - 24
    <section className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto  h-full relative'>
        <div className=' bg-slate-100 rounded-md flex flex-col xl:flex-row  h-full md:py-24'>
          <div className='text-center xl:text-left xl:absolute xl:ml-9'>
            <h1 className='text-[40px] xl:text-[80px] font-bold leading-[1.1] xl:max-w-[700px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='400'>{title}</h1>
            <p className='text-lg text-secondary font-secondary font-medium leading-relaxed xl:max-w-[380px] lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subtitle}</p>
            <button className='mb-8 xl:mb-0 bg-accent-primary hover:bg-accent-primary_hover text-lg h-[60px] px-[30px] rounded-full transition text-white' data-aos='fade-down' data-aos-delay='600'>
              {btnText}
            </button>
          </div>
          <div className='xl:absolute xl:-right-12 xl:bottom-16 xl:w-3/5' data-aos='fade-up' data-aos-delay='700'>
            <img src={image} alt='herosection' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero