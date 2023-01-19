import React from 'react'
import { Link } from 'react-scroll'
import { navigationData } from '../../Data'
const NavMobile = ({ setNavMobile, navMobille }) => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {navigationData.map((item, index) => {
        return (
          <li  className='cursor-pointer' key={index}>
            <Link onClick={() => setNavMobile(!navMobille)} to={item.href} smooth={true}>
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMobile