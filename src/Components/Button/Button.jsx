import React from 'react'

const Button = ({ text, width = "w-32", height = "h-10" }) => {
  return (
    <>
      <button className='font bg-white px-4 py-2 rounded-md  '>{text}</button>
    </>
  )
}

export default Button