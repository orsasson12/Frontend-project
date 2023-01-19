import React from 'react'

const FeaturesList = ({ list }) => {
  return (
          <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
              {
                  list.map((feature, i) => {
                      const { image, title, description, linkText, delay } = feature
                      return (
                          <div key={i} className='w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                              data-aos='zoom-in'
                              data-aos-offset='100'
                              data-aos-delay={delay}
                          >
                              <div className='max-w-[120px] xl:mr-7 xl:max-w=[230px]'
                                  data-aos='zoom-in-right'
                                  data-aos-delay={delay}
                              >
                                  <img src={image} alt='' style={{ width: '100%' }} />
                              </div>
                              <div className='max-w-[220px] '>
                                  <h3 className='font-primary text-primary text-[24px] mb-4 '>{title}</h3>
                                  <p className='font-light italic gap-x-2 group'>{description}</p>
                                  <div className='flex items-center gap-x-2 group'>
                                      <a className='text-primary font-bold' href='/'>{linkText}</a>
                                  </div>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
  )
}

export default FeaturesList