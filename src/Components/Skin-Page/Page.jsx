import React from 'react'
import AllProducts from './AllProducts'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import NavSwitcher from '../Navbar/NavSwitcher'
import img from '../../assets/skin.png'


import main9 from '../../assets/pd9.webp'
import hov9 from '../../assets/pd9h.webp'
import hov11 from '../../assets/pd11h.webp'
import hov12 from '../../assets/pd12h.webp'

const Page = () => {
    return (
        <>
            <NavSwitcher />

            <div className='relative w-full h-[650px] overflow-hidden '>
                <img src={img} alt="img" className=' w-full h-full object-cover' />
                <div className="absolute bottom-[40px] left-[7%] -translate-x-1/5  ">
                    <h1 className='text-3xl Font text-white font-extrabold'>HER COSMETICS</h1>
                </div>
            </div>

            {/* Small Images Row of Cosmetics Categories */}

            <div className='flex gap-5 m-15 '>
                <div className='w-[130px] h-[130px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={main9} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2'>skin concerns</p>
                </div>
                <div className='w-[130px] h-[130px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={hov9} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2'>face</p>
                </div>
                <div className='w-[130px] h-[130px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={hov11} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2'>body</p>
                </div>
                <div className='w-[130px] h-[130px] rounded-md cursor-pointer flex justify-center items-center flex-col'>
                    <img src={hov12} alt="eyes" className='w-full h-full object-cover rounded-md' />
                    <p className='Font dark-pink font-semibold mt-2'>lips</p>
                </div>
            </div>

            {/* Total Products + categorical buttons */}

            <div className='flex justify-between items-center m-15'>
                <p className='text-xl Font grey mt-5'>89 products</p>

                <select className='border border-black px-2 py-2 rounded-md flex Font mt-5'>
                    <option>Sort by: Featured </option>
                    <option>Sort by: newest</option>
                    <option>Sort by: best selling </option>
                    <option>Sort by: price (high to low) </option>
                    <option>Sort by: price (low to high) </option>
                </select>
            </div>

            <div className='m-10'>
                <AllProducts />
            </div>-

            <div className='mt-10 flex justify-center items-center'>
                <Button text={"load more"} />
            </div>
            <Footer />
        </>
    )
}

export default Page