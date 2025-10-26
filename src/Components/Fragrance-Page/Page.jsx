import React from 'react'
import AllProducts from './AllProducts'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'

const Page = () => {
    return (
        <>
            <Nav />

            <div className='pt-[200px] m-15'>
                <div>
                    <h1 className='Font text-4xl text-black font-extrabold'>FRAGRANCE</h1>
                </div>
            </div>

            {/* Total Products + categorical buttons */}

            <div className='flex justify-between items-center m-15 '>
                <p className='text-xl Font grey mt-5'>30 products</p>

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
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <Button text={"load more"} />
            </div>
            <Footer />
        </>
    )
}

export default Page