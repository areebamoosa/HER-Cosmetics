import React from 'react'
import main from '../../assets/prod.webp'
import hovImg from '../../assets/hov.webp'
import main1 from '../../assets/black.webp'
import { useState } from 'react'
import main2 from '../../assets/peach.webp'

const Product = () => {

    // Main Img of each product
    const [mainImg, setImg] = useState(main);

    // Small images of products
    const smallImgs = [main1, main2, main, main2]

    return (
        <>
            {/* Design Card of each Product */}

            <div className='relative h-[560px] w-[420px] bg-white rounded-lg transition-all duration-500  group'>

                <div className='relative h-[400px] w-[420px] rounded-t-lg '>

                    {/* Original Default Image */}
                    <img src={mainImg} alt="prod" className='absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0' />

                    {/* Hover Image */}
                    <img src={hovImg} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100 " />

                </div>

                <div className='p-5 '>

                    {/* Small Images row container */}

                    <div className='flex gap-1 cursor-pointer '>
                        {smallImgs.map((img, index) => (
                            <img src={img} alt="img" key={index} onClick={() => setImg(img)} className={`w-[45px] h-[45px] object-cover  border  ${mainImg === img ? "border-black" : "border-gray-100"}`} />
                        ))}
                    </div>

                    {/* Star Rating */}
                    <div className='flex gap-1 mt-2'>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                    </div>

                    {/* Details of Product */}

                    <div className='flex  justify-between mt-1'>
                        <span className=' font-semibold text-lg'>true brown k</span>
                        <span className='font-semibold text-lg'>$36</span>
                    </div>

                    <p className='text-lg grey mt-[-2px] '>king kylie mattee lip kit</p>

                </div>


            </div >

        </>
    )
}

export default Product