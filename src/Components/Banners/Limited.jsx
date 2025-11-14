import React from 'react'
import lip from '../../assets/virtualtry.webp'
import Button from '../Button/Button'

const Limited = () => {
  return (
    <>
      <div className='relative'>

        <div className='w-full h-full object-cover'>

          <img src={lip} alt="lip" className='w-full h-full object-cover' />
        </div>

        <div className='absolute sm:bottom-1/6 lg:bottom-1/3 left-1/2 -translate-x-1/2 text-white flex flex-col justify-center items-center '>


          <h1 className=' dark-pink font font-semibold text-3xl'>LIMITED EDITION</h1>
          <div className='mt-8'>

            <h2 className=' text-lg text-white font '>try on lipsticks, blushes & more to</h2>
            <h2 className=' text-lg text-white font mt-2'>discover your new favourite shade.</h2>

          </div>

          <div className='mt-8'>

            <Button text={'shop now'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Limited