import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-scroll'

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com/in/octa-nav-tech',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/octanavarro',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:navarrooctavioa@gmail.com',
    },
  ]

  return (
    <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-lblue' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-lbgray'
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
        <li>
          <Link
            to={'home'}
            smooth
            duration={500}
            className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-lblue rounded-br-md text-lbgray cursor-pointer'
          >
            Back Home <MdOutlineKeyboardArrowUp size={40} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
