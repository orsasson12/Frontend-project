import React, { useState } from 'react'
import Logo from '../../assets/imgs/DrawKit Vector Illustration Project Manager (6).svg'
import Navbar from '../navbar/Navbar'
import { animateScroll as scroll,Link as Links } from 'react-scroll'
import NavMobile from '../navbar/NavMobile'
import { FaBars } from 'react-icons/fa'
const Header = () => {

  const [navMobille, setNavMobile] = useState(false);
  return (
    <header className='mb-12 lg-mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-x-[120px]'>
            {/* Logo */}

            <Links href='/'>
              <img  src={Logo} style={{ width: '30%' }} alt='logo' />
            </Links>
            {/* nav initially hidden - Only show on large screen */}
            <div className='hidden lg:flex'>
              <Navbar />
            </div>
          </div>
          {/* Mobile nav - initially show - hidden on large screens  */}
          <div className={`${navMobille ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-20 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
            <NavMobile setNavMobile={setNavMobile} navMobille={navMobille} />
          </div>
          {/* NavMobile Trigger Button - Only shown on mobile views */}
          <div onClick={() => setNavMobile(!navMobille)} className='lg:hidden text-2xl text-primary cursor-pointer'>
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header