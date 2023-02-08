import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='xl:hidden bg-dblue h-12 flex justify-between p-4 text-lbgray'>
      <div className='flex '>
        <a
          href='https://github.com/octanavarro'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub className='mx-4' size={25} />
        </a>
        <a
          href='https://linkedin.com/in/octa-nav-tech'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='mx-4' size={25} />
        </a>
        <a
          href='https://www.instagram.com/octa_navarro/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className='mx-4' size={25} />
        </a>
      </div>
      <div className=''>
        <p>Created by Octa</p>
      </div>
    </div>
  )
}
