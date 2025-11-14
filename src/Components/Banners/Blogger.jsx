import React from 'react'
import Button from '../Button/Button'
import Blog from '../../assets/Blog.mov'

const Blogger = () => {
    return (
        <>
            <div className='m-5 flex justify-center items-center mt-20'>
                <div className='flex sm:flex-col lg:flex-row justify-center items-center  sm:w-[1200px] sm:h-[1200px] lg:w-[1600px] h-[1000px] rounded-lg'>
                    <div className='sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[1000px] overflow-hidden rounded-l-lg'>
                        <video src={Blog} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center bg-white sm:w-[600px] lg:w-[800px] sm:h-[600px] lg:h-[1000px] rounded-r-lg'>
                            <h1 className='font font-semibold dark-pink text-4xl'>HER'S</h1>
                            <h1 className='font font-semibold mt-8 dark-pink text-4xl '>FAVE NEW EYE KIT</h1>
                            <p className='text-xl grey mt-6'>create the perfect winter eye look</p>
                            <div className='flex gap-2 '>
                                <p className='text-xl grey'>with our new</p>
                                <p className='text-xl grey font-medium'>vibrant eye kit.</p>
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
            </div>
        </>
    )
}

export default Blogger