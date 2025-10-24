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


                <div className='absolute bottom-1/3  left-[70px]  flex justify-center items-start  flex-col'>

                    <div>

                        <h1 className='text-white headFont text-2xl'>COSMIC 2.0 WINTER</h1>
                        <h1 className='text-white headFont text-2xl'>MAKEUP COLLECTION</h1>

                    </div>

                    <div className='font text-xl mt-6 text-white'>
                        <p>create ethereal, glowy summer </p>
                        <p>looks with our new makeup</p>
                        <p>collection inspired by</p>
                        <p className='font-bold'>cosmic 2.0</p>

                    </div>

                    <div className='mt-4'>
                        <Button text={'shop now'} />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Cosmic