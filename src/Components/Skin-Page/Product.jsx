import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Product = ({ id, title, price, desc, Img, hoverImg, smallImgs }) => {

    // Main Img of each product
    const [mainImg, setImg] = useState(Img);

    return (
        <>
            {/* Design Card of each Product */}

            <div className='relative h-[560px] w-[420px] bg-white rounded-lg transition-all duration-500  group shadow-md'>



                <div className='relative h-[400px] w-[420px] rounded-t-lg  '>
                    <Link to={`/skin/${id}`} >

                        {/* Original Default Image */}
                        <img src={mainImg} alt="prod" className='absolute h-full w-full object-cover rounded-t-lg transition-opacity duration-200 hover:opacity-0' />

                        {/* Hover Image */}
                        <img src={hoverImg} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover rounded-t-lg opacity-0 transition-opacity duration-200 hover:opacity-100 " />

                    </Link>
                </div>


                <div className='p-5 '>

                    {/* Small Images row container */}

                    <div className='flex gap-1 cursor-pointer  small-imgs '>
                        {smallImgs.map((img, index) => (
                            <img src={img} alt="img" key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setImg(img);
                                }
                                }
                                className={`w-[45px] h-[45px] object-cover  border  ${mainImg === img ? "border-black" : "border-gray-100"}`} />
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
                        <span className=' font-semibold text-lg'>{title}</span>
                        <div>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <span className='font-semibold text-lg'>{price}</span>
                        </div>
                    </div>
                    <p className='text-lg grey mt-[-2px] '>{desc}</p>
                </div>
            </div >
        </>
    )
}

export default Product
