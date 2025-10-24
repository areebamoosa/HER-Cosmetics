import React from 'react'
import Button from '../Button/Button'
import bag from '../../assets/bag.jpg'

const Bag = () => {
  return (
    <>
    <div className='flex justify-center items-center w-[2000px] h-[1000px] rounded-lg'>

        <div className='w-[1000px] h-[1000px] overflow-hidden rounded-l-lg'>
            <img src={bag} alt="bag" className='w-full h-full object-cover'/>
        </div>

        <div>

            <div className='flex flex-col justify-center items-center bg-white w-[1000px] h-[1000px] rounded-r-lg'>

                <h1 className='Font font-semibold text-black text-xl'>LIMITED TIME ONLY</h1>

                <h1 className='headFont dark-pink text-4xl mt-5'>FREE</h1>
                <h1 className='headFont dark-pink text-4xl'>COSMIC OMBRE</h1>
                <h1 className='headFont dark-pink text-4xl mt-1'>TOTE BAG</h1>


                <p className='text-xl grey mt-4'>get a free, one-of-a-kind</p>

                <div className='flex gap-2 '>
                    <p className='text-xl grey font-medium'>cosmic ombre tote bag</p>
                    <p className='text-xl grey'>that's</p>
                </div>
                
                    <p className='text-xl grey'>perfect for carrying all of your</p>
                    <p className='text-xl grey'>winter beauty faves.</p>

                <div className='flex flex-col justify-center items-center text-xl grey mt-6'>

                <p className='text-xl grey mt-4'>get a free, one-of-a-kind</p>
                <p className='text-xl grey font-medium'>cosmic ombre tote bag</p>
                    <p className='text-xl grey'>that's</p>
                    <p className='text-xl grey'>perfect for carrying all of your</p>
                    <p className='text-xl grey'>winter beauty faves.</p>

                </div>

                <div className='flex flex-col justify-center items-center text-xl grey mt-6'>
                    <p>available in six pre-paired,</p>
                    <p>contrasting shades.</p>
                </div>

                <div className='mt-6'>
                    <Button text={'shop now'} />
                </div>

            </div>

        </div>

    </div>

</>
  )
}

export default Bag