import React from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-scroll'

export default function UpArrow() {
  return (
    <div className='text-lbgray z-20 xl:hidden fixed bottom-8 right-4 w-12 h-12 bg-lblue rounded-full'>
      <Link to={'home'} smooth duration={1000}>
        <MdOutlineKeyboardArrowUp size={50} />
      </Link>
    </div>
  )
}
