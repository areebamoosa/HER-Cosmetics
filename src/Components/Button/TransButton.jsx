import React from 'react'

const TransButton = ({ text, width = "w-32", height = "h-10"} ) => {
  return (
    <>
      {/* Transparent Button with black on hover*/}
      <button className={`${width} ${height}
 bg-transparent font border border-black    font-light  px-5 py-2 rounded-md  cursor-pointer hover:bg-black hover:text-white`}>{text}</button>

    </>
  )
}

export default TransButton