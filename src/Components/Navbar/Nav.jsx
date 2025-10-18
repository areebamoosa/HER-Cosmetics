import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='text-white flex justify-between items-center mt-6 text-2xl '>

                <div className='text-white flex justify-center items-center gap-2 ml-10'>
                    <p className='font'>us</p>
                    <i className="fa-solid fa-dollar-sign"></i>
                </div>

                <div>
                    <h1 className='headFont text-2xl ml-50'>HER COSMETICS</h1>
                </div>

                <div className='text-white flex justify-center items-center gap-12 text-2xl mr-10'>
                    <p><i className="fa-solid fa-heart"></i></p>
                    <p><i className="fa-solid fa-user"></i></p>
                    <p><i className="fa-solid fa-magnifying-glass"></i></p>
                    <p><i className="fa-solid fa-bag-shopping"></i></p>
                </div>

            </div>

            <div className='text-white flex justify-center items-center mt-8 '>
                <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                    <li>cosmetics</li>
                    <li>fragrance</li>
                    <li>skin</li>
                    <li>discover</li>
                    <li>rewards</li>
                </ul>
            </div>
        </>
    )
}

export default Nav