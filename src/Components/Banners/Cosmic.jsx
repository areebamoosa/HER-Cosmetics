import React from 'react'
import balm from '../../assets/frag.webp'
import Button from '../Button/Button'

const Cosmic = () => {
    return (
        <>
            <div className='black relative mt-10'>
                <div className='flex justify-center items-center w-full h-full '>
                    <img src={balm} alt="balm" className=' w-full h-full object-contain' />
                </div>

                <div className='absolute sm:bottom-1/14 sm:left-[30px] lg:bottom-1/3  lg:left-[70px]  flex justify-center items-start  flex-col'>
                    <div>
                        <h1 className='text-white font font-semibold sm:text-sm lg:text-2xl'>COSMIC 2.0 WINTER</h1>
                        <h1 className='text-white font font-semibold mt-3 sm:text-sm lg:text-2xl'>MAKEUP COLLECTION</h1>
                    </div>

                    <div className='font sm:text-sm lg:text-xl mt-6 text-white flex flex-col gap-1'>
                        <p>create ethereal, glowy summer </p>
                        <p>looks with our new makeup</p>
                        <p>collection inspired by</p>
                        <p className='font-bold'>cosmic 2.0</p>
                    </div>

                    <div className='mt-6'>
                        <Button text={'shop now'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cosmic