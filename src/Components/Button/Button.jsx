import React from 'react'

const Button = ({ text, width = "w-32", height = "h-10" }) => {
  return (
    <>
      <button className='font bg-white px-5 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>{text}</button>
    </>
  )
}

export default Button