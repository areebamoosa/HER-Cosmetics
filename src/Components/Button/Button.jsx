import React from 'react'

const Button = ({ text, width = "w-32", height = "h-10" }) => {
  return (
    <>
      <button className='font grey bg-white border-1 border-black px-5 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>{text}</button>
    </>
  )
}

export default Button