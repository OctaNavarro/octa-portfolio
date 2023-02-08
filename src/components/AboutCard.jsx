import React from 'react'

export default function AboutCard({ img, alt, title, steps }) {
 
  return (
    <div className='card w-1/4 min-w-[350px] bg-lbgray m-12'>
      <figure className='h-56'>
        <img src={img} alt={alt} className=' object-cover' />
      </figure>
      <div className='card-body p-4'>
        <h2 className='card-title text-3xl justify-center text-blue '>{title}</h2>
        <ul className='steps steps-vertical'>
          {steps.map(e => (
            <li className='step step-warning text-lblue hover:text-blue transition duration-500 text-md' key={e.id}>
              {e.fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
