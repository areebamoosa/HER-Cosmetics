import React from 'react'
import prod from '../../assets/prod.webp'
import hovImg from '../../assets/hov.webp'
import Button from '../Button/Button'

const Product = () => {
  return (
    <>
    {/* Design Card of each Product */}

    <div className='group h-[550px] w-[450px] bg-white rounded-lg transition-all duration-500 '>

        <div className='relative h-[450px] w-[450px] rounded-t-lg'>

        {/* Original Default Image */}
        <img src={prod} alt="prod" className='absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 group-hover:opacity-0' />

        {/* Hover Image */}
        <img src={hovImg} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"/>

        </div>

        <div className='p-5 transition-all duration-500 group-hover:h-[180px] h-[130px] '>

            <div className='flex gap-1'>
            {/* Star Rating */}
            <i class="fa-solid fa-star" style = {{color: "#cccccc"}}></i>
            <i class="fa-solid fa-star" style = {{color: "#cccccc"}}></i>
            <i class="fa-solid fa-star" style = {{color: "#cccccc"}}></i>
            <i class="fa-solid fa-star" style = {{color: "#cccccc"}}></i>
            <i class="fa-solid fa-star" style = {{color: "#cccccc"}}></i>
            </div>


                <div className='flex  justify-between mt-1'>
                <span className=' font-semibold text-lg'>true brown k</span>
                <span className='font-semibold text-lg'>$36</span>
                </div>

                <p className='text-lg grey mt-[-2px]'>king kylie mattee lip kit</p>


                {/* Buttons — show only on hover */}
               <div className=" opacity-0 group-hover:opacity-100  flex  transition-all duration-200  justify-center items-center">
                <Button text={"add to cart"}  width = "w-[152px]" height = "h-10"/>
               </div>

            </div>


        </div>

    </>
  )
}

export default Product