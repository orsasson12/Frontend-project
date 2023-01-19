import React from 'react'
import ItemsContainer from './ItemsContainer'
import { footerData } from '../../Data'
import { footerIcons } from '../../Data'
import SocialIcons from './SocialIcons'
const Footer = () => {
    const { title, btn1 } = footerData
    return (
        <footer id='#contact' className='bg-gray-900 text-white' data-aos='fade-up'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5'>{title}</h1>

                <div>
                    <input type='text' placeholder='enter your phone' className='text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none ' />
                    <button className='bg-teal-400 hover:bg-teal-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full xl:mt-4'>{btn1}</button>
                </div>
                <ItemsContainer />
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8 mt-5 items-center"
            >
                <span>© 2020 Appy. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcons Icons={footerIcons} />
            </div>
        </footer>
    )
}

export default Footer