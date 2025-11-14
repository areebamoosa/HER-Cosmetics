import React from 'react'
import prod from '../../assets/lipsticks.webp'
import Button from '../Button/Button'

const Lipsticks = () => {
    return (
        <>
            <div className='relative'>

                <div className='w-full h-full object-cover'>
                    <img src={prod} alt="prod" className='w-full h-full object-cover' />
                </div>

                <div className='absolute sm:bottom-1/16 sm:left-1/4 lg:bottom-1/5 lg:left-1/6 -translate-x-1/2 text-white flex flex-col justify-start items-start gap-1 lg:gap-2 '>
                    <h1 className=' dark-pink font sm:text-sm lg:text-lg font-bold'>COMING JAN 9</h1>
                    <h1 className=' dark-pink font mt-2 sm:text-xl lg:text-4xl font-bold'>SHADES OF LIPS</h1>
                    <h1 className=' dark-pink font mt-2 sm:text-base lg:text-xl font-bold'>HER LIP COMBO'S</h1>
                    <div className='lg:mt-4 sm:mt-1 '>
                        <h2 className='text-sm lg:text-lg  grey  font '>longlasting, fresh - get</h2>
                        <h2 className='text-sm lg:text-lg grey  font'>our best selling and award winning</h2>
                        <h2 className='text-sm lg:text-lg grey  font'>product in 12 different shades.</h2>
                    </div>

                    <div className='lg:mt-4 mt-1'>
                        <Button text={'shop now'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lipsticks