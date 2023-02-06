import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function () {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'projects',
    },
    {
      id: 4,
      link: 'stack',
    },
    {
      id: 5,
      link: 'contact',
    },
  ]

  return (
    <div
      className='flex justify-between  items-center w-full h-20 px-4 text-lbgray bg-dblue'
      name='home'
    >
      <div className='font-signature text-5xl ml-10'>Octa</div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-20  md:hidden'
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex z-10 flex-col justify-center items-center absolute top-0 left-0 w-full h-[110vh] bg-gradient-to-b from-dblue to-blue'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={1000}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
