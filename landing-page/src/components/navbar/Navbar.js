import React from 'react'
import {  Link } from 'react-scroll'

import { navigationData } from '../../Data'
const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
          return (
            <li className='cursor-pointer' key={index}>
              <Link to={item.href} smooth={true}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>

  )
}

export default Navbar