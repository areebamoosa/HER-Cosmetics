import React from 'react'
import hovBag from '../../assets/Bag1.jpeg'
import bag from '../../assets/Bag2.jpeg'
import Button from '../Button/Button'

const Bag = () => {
    return (
        <>
            <div className='m-5 flex justify-center items-center'>

                <div className='flex justify-center items-center w-[1600px] h-[1000px] rounded-lg '>

                    <div className='relative w-[800px] h-[1000px] overflow-hidden rounded-l-lg'>
                        <img src={bag} alt="prod" className='absolute h-full w-full object-cover  transition-opacity duration-200 hover:opacity-0' />
                        <img src={hovBag} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 hover:opacity-100 " />
                    </div>

                    <div>
                        <div className='flex flex-col justify-center items-center bg-white w-[800px] h-[1000px] rounded-r-lg'>
                            <h1 className='Font font-semibold text-black text-lg'>LIMITED TIME ONLY</h1>
                            <h1 className='Font font-bold dark-pink text-3xl mt-5'>FREE</h1>
                            <h1 className='Font font-bold dark-pink text-3xl'>COSMIC OMBRE</h1>
                            <h1 className='Font font-bold dark-pink text-3xl mt-1'>TOTE BAG</h1>
                            <p className='text-lg grey mt-4'>get a free, one-of-a-kind</p>

                            <div className='flex gap-2 '>
                                <p className='text-lg grey font-medium'>cosmic ombre tote bag</p>
                                <p className='text-lg grey'>that's</p>
                            </div>

                            <p className='text-lg grey'>perfect for carrying all of your</p>
                            <p className='text-lg grey'>winter beauty faves.</p>

                            <div className='flex flex-col justify-center items-center text-lg grey mt-6'>
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

export default Bag