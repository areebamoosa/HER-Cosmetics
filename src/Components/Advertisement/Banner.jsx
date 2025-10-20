import React from 'react'
import Button from '../Button/Button'

const Banner = () => {
    return (
        <>
            <div className='flex'>

                <div>
                    <video src=""></video>
                </div>

                <div>

                    <div className='flex flex-col justify-center items-center'>

                        <h1 className='headFont dark-pink text-4xl'>HER'S</h1>
                        <h1 className='headFont dark-pink text-4xl mt-1'>FAVE NEW LIP KITS</h1>


                        <p className='text-xl grey mt-4'>create the perfect winter lip look</p>

                        <div className='flex gap-2 '>
                            <p className='text-xl grey'>with our new</p>
                            <p className='text-xl grey font-medium'>glossy lip kit.</p>
                        </div>


                        <div className='flex flex-col justify-center items-center text-xl grey mt-6'>
                            <p>featuring our ultra-precise precision pout</p>
                            <p>lip liner and cushiony supple kiss lip gaze,</p>
                            <p>this kit has everything you need for a </p>
                            <p>shiny, contoured, long-lasting lip.</p>
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

export default Banner