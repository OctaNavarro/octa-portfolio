import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaTimes } from 'react-icons/fa'

export default function Contact() {
  const form = useRef()
  const [msgSent, setMsgSent] = useState(false)
  const [ejsResponse, setEjsResponse] = useState('unknown')

  const msgSentStatusChange = () => setMsgSent(!msgSent)

  const sendEmail = e => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'service_rc9xa04',
        'template_1u4ekji',
        form.current,
        'M32ow5bWNcrtlFZss'
      )
      .then(
        result => {
          console.log(result.text)
          result.text && setEjsResponse('Succesfuly sent')
        },
        error => {
          console.log(error.text)
          error.text && setEjsResponse('Couldn´t send')
        }
      )
  }

  return (
    <div
      name='contact'
      className='w-full h-screen bg-blue to-gray-800 p-12 pt-24 text-lbgray'
    >
      <div className='bg-orange w-2/3 translate-x-1/4 h-[1px] mb-12' />

      {msgSent && (
        <div className='flex flex-col justify-center text-3xl text-blue z-20 w-1/3 h-1/3 left-1/3 translate-y-80 bg-lbgray rounded-lg border-orange border-solid border-2 absolute'>
          <button onClick={msgSentStatusChange}>
            <FaTimes className='absolute top-4 right-4' />
          </button>
          <p className='p-4'>The status of the email is: {ejsResponse}</p>
        </div>
      )}

      <div className='flex flex-col justify-center items-center'>
        <p className='text-6xl font-bold text-orange my-12'>Contact me</p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='grid grid-cols-1 w-full md:w-1/2'
        >
          <input
            type='text'
            name='from_name'
            required={true}
            placeholder='Enter your name'
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />

          <input
            type='email'
            name='user_email'
            required={true}
            placeholder='Enter your email'
            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />

          <textarea
            name='message'
            placeholder='Enter your message'
            rows='10'
            required={true}
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />
          <button
            type='submit'
            value='Send'
            className='text-dblue text-xl font-bold  px-6 py-3 my-2 mx-auto flex justify-center w-1/6 rounded-md bg-gradient-to-r from-tangerine to-yellow cursor-pointer active:translate-y-1 duration-300'
            onClick={() => {
              msgSentStatusChange();
              setEjsResponse('Complete missing fields');
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
