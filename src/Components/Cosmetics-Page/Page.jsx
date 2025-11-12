import React from 'react'
import AllProducts from './AllProducts'
import Footer from '../Footer/Footer'
import NavSwitcher from '../Navbar/NavSwitcher'
import img from '../../assets/Red.jpeg'
import eyes from '../../assets/eyes.avif'
import best from '../../assets/best.avif'
import face from '../../assets/Fac.avif'
import feat from '../../assets/Feat.avif'
import TransButton from '../Button/TransButton'

const Page = () => {
    return (
        <>
            <NavSwitcher />

            <div className='relative w-full h-[250px] sm:h-[550px] overflow-hidden'>
                <img
                    src={img}
                    alt="img"
                    className='w-full h-full object-cover object-right'
                />
                <div className="absolute sm:bottom-[40px] sm:left-[7%]  left-[3%] bottom-[20px]">
                    <h1 className='text-sm sm:text-3xl font-extrabold text-white'>HER COSMETICS</h1>
                </div>
            </div>

            {/* Small Images Row of Cosmetics Categories */}

            <div className='flex sm:gap-5 gap-2 justify-start items-start m-3 mt-10 sm:m-15 '>
                <div className='sm:w-[130px] sm:h-[130px]  w-[80px] h-[80px]   rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={eyes} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>eyes & brows</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[80px] h-[80px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={best} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>best sellers</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[80px] h-[80px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={face} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>face</p>
                </div>
                <div className='sm:w-[130px] sm:h-[130px]  w-[80px] h-[80px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={feat} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2 text-xs sm:text-base'>featured</p>
                </div>
            </div>

            {/* Total Products + categorical buttons */}

            <div className='flex justify-between items-center m-6 sm:m-15'>
                <p className='text-base whitespace-nowrap sm:text-xl Font grey mt-5'>218 products</p>

                <select className='border border-black px-1 py-1 w-[160px] sm:px-2 sm:py-2 rounded-md flex Font mt-5'>
                    <option>Sort by: Featured </option>
                    <option>Sort by: newest</option>
                    <option>Sort by: best selling </option>
                    <option>Sort by: price (high to low) </option>
                    <option>Sort by: price (low to high) </option>
                </select>
            </div>

            <div className='m-2  lg:m-6'>
                <AllProducts />
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <TransButton text={"load more"} />
            </div>
            <Footer />
        </>
    )
}

export default Page