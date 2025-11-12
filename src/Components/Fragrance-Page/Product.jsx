import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ id, title, price, desc, Img, hoverImg, smallImgs }) => {

    // Main Img of each product
    const [mainImg, setImg] = useState(Img);

    const navigate = useNavigate();

    // Navigate to the detailed page when clicking anywhere on the product card except small images
    const handleCardClick = () => {
        navigate(`/fragrance/${id}`);
    };

    // Stopig navigation when clicking small images
    const handleSmallImgClick = (e, img) => {
        e.stopPropagation();
        setImg(img);
    };

    return (
        <>
            {/* Design Card of each Product */}

            <div className='relative lg:h-[560px] lg:w-[400px]  h-[340px] w-[180px] sm:h-[380px] sm:w-[220px] bg-white rounded-xs transition-all duration-500  group shadow-md' onClick={handleCardClick}>

                <div className='relative lg:h-[400px] lg:w-[400px]  h-[220px] w-full rounded-t-xs '>

                    {/* Original Default Image */}
                    <img src={mainImg} alt="prod" className='absolute h-full w-full object-cover rounded-t-xs transition-opacity duration-200 hover:opacity-0' />

                    {/* Hover Image */}
                    <img src={hoverImg} alt="hovImg" className="absolute top-0 left-0 h-full w-full object-cover rounded-t-sm opacity-0 transition-opacity duration-200 hover:opacity-100 " />

                </div>

                <div className='p-2 sm:p-5 '>

                    {/* Small Images row container */}

                    <div className='flex gap-1 cursor-pointer '>
                        {smallImgs.map((img, index) => (
                            <img src={img} alt="img" key={index} onClick={(e) => handleSmallImgClick(e, img)} className={`lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] object-cover  border  ${mainImg === img ? "border-black" : "border-gray-100"}`} />
                        ))}
                    </div>

                    {/* Star Rating */}
                    <div className='flex gap-1 mt-2 text-xs sm:text-sm'>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                        <i class="fa-solid fa-star" style={{ color: "#cccccc" }}></i>
                    </div>

                    {/* Details of Product */}

                    <div className='flex justify-between mt-1'>
                        <span className=' font-semibold sm:text-lg text-sm'>{title}</span>
                        <div>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <span className='font-semibold sm:text-lg text-sm'>{price}</span>
                        </div>
                    </div>
                    <p className='sm:text-lg text-xs-lg grey mt-[-2px] '>{desc}</p>
                </div>
            </div >
        </>
    )
}

export default Product