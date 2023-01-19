import React from 'react'

import { featruesData } from '../../Data'
import FeaturesList from './FeaturesList'
const Features = () => {
  const { title, subtitle, list } = featruesData
  return (
    <section id='#features' className='my-[70px] xl:my-[150px]'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='font-primary text-primary text-[40px] font-bold leading-tight mb-6 xl:mb-12'
            data-aria-owns='fade-down'
            data-aos-delay='100'
          >{title}</h2>
          <p className='mb-16 xl:mb-24 text-lg text-secondary font-secondary font-medium leading-relaxed max-w-[585px] mx-auto '
            data-aria-owns='fade-down'
            data-aos-delay='200'
          >
            {subtitle}
          </p>
        </div>
        <FeaturesList list={list} />
      </div>
    </section>
  )
}

export default Features