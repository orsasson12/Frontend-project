import React from 'react'

const Item = ({ Links, title }) => {
    return (
        <ul>
            <h1 className='mb-1 font-semibold'>{title}</h1>
            {
                Links.map((link, i) => (
                    <li key={link.name} className='w-max'>
                        <a href={link.link} className='text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6'>{link.name}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Item