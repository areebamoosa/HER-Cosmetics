import React from 'react'
import main from '../../assets/Main.png'
import Button from '../Button/Button'

const Page = () => {
  return (
    <>
      <div>
        <div className='relative h-screen w-screen'>
          <img src={main} alt="hero" className='w-full h-full object-cover' />
          <div className="absolute bottom-[200px] left-[23%] -translate-x-1/5  ">
            <Button text="shop now" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page