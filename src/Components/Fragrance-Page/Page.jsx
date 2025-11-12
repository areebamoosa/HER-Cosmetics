import React from 'react'
import AllProducts from './AllProducts'
import NavSwitcher from '../Navbar/NavSwitcher'

const Page = () => {
    return (
        <>
            <div className='min-h-screen bg-black'>
                <NavSwitcher />

                <div className='pt-[200px] '>
                    <h1 className='Font text-4xl text-white font-extrabold ml-15'>FRAGRANCE</h1>
                </div>

                <div className='flex justify-between items-center m-6 sm:m-15'>
                    <p className='text-base whitespace-nowrap sm:text-xl Font text-white mt-5'>30 products</p>

                    <select className='border border-white px-1 py-1 w-[160px] sm:px-2 sm:py-2 rounded-md flex Font mt-5 text-white'>
                        <option>Sort by: Featured </option>
                        <option>Sort by: Newest</option>
                        <option>Sort by: Best selling</option>
                        <option>Sort by: Price (high to low)</option>
                        <option>Sort by: Price (low to high)</option>
                    </select>
                </div>

                <div className='m-2 sm:m-6 mb-[100px]'>
                    <AllProducts />
                </div>

                {/* Customised Footer  */}

                <div className='mt-[120px] flex flex-col justify-center items-center '>
                    <div className='text-white  flex flex-col gap-3 font'>
                        <h1 className='text-sm sm:text-lg lg:text-xl font-normal'>sign up for updates:</h1>
                        <div className='flex justify-center items-center gap-6'>
                            <input type="text" placeholder='email address' className='w-60 sm:w-110 lg:w-150 h-10 border p-4 rounded-sm border-white' />
                            <button className={`bg-transparent font border border-white  w-30 md:w-30  lg:w-40 h-10  font-light  px-5 py-2 rounded-md  cursor-pointer hover:bg-black hover:text-white`}>submit</button>

                        </div>

                        <div className='flex gap-1 text-sm sm:text-lg'>
                            <p className='text-white'>by signing up you agree to our</p>
                            <p className='text- underline cursor-pointer'>terms</p>
                        </div>
                    </div>

                    <div className='text-2xl sm:text-3xl flex gap-10 mt-20 cursor-pointer'>

                        <i className="fa-brands fa-facebook-f" style={{ color: "#ffffff" }}></i>
                        <i class="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
                        <i class="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i>
                        <i class="fa-brands fa-tiktok" style={{ color: "#ffffff" }}></i>

                    </div>

                    <div className='flex text-white font     gap-3 whitespace-nowrap  sm:gap-5 mt-10 sm:mt-20 text-xs sm:text-lg'>
                        <p className='hover:underline cursor-pointer'>contact us</p>
                        <p className='hover:underline cursor-pointer'>faq</p>
                        <p className='hover:underline cursor-pointer'>shipping</p>
                        <p className='hover:underline cursor-pointer'>order tracking</p>
                        <p className='hover:underline cursor-pointer'>rewards</p>
                        <p className='hover:underline cursor-pointer'>gift card balance</p>
                    </div>

                    <div className='flex  text-white   gap-2 sm:gap-4 mt-10 sm:mt-15 text-xs sm:text-base whitespace-nowrap'>
                        <p className='underline cursor-pointer'>privacy policy</p>
                        <p className='underline cursor-pointer'>terms</p>
                        <p className='underline cursor-pointer'>accessibility</p>
                        <p className='underline cursor-pointer'>set my cookie choices</p>
                        <p className='underline cursor-pointer'>cookie policy</p>
                    </div>

                    <div className='mt-8 mb-10'>
                        <p className='text-white font-medium font text-sm sm:text-base lg:text-lg'>Developed with <i className="fa-regular fa-heart " style={{ color: "#ffffff" }}></i> by A.M</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page