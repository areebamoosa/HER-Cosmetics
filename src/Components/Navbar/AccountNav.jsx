import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Nav from './Nav'
import CartSideBar from '../Cart/CartSideBar';

const AccountNav = () => {

    const [open, setOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);


    return (
        <>
            <div className='text-white flex justify-between items-center mt-6 text-2xl '>

                <div className='text-black flex justify-center items-center gap-2 ml-10'>
                    <p className='font'>us</p>
                    <i className="fa-solid fa-dollar-sign"></i>
                </div>
                <h1 className='headFont text-3xl ml-50 dark-pink cursor-pointer'><Link to='/'><span className="inline-block animate-door-rotate">H</span>ER COSMETICS </Link>
                </h1>

                <div className='text-black flex justify-center items-center gap-12 text-2xl mr-10'>
                    <p><i className="fa-solid fa-heart"></i></p>
                    <p><Link to="/login"><i className="fa-solid fa-user"></i></Link></p>
                    <div className='relative'>
                        <button onClick={() => setOpen(!open)} className='cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i>  </button>
                    </div>
                    <p><i className="fa-solid fa-bag-shopping"></i></p>
                </div>
            </div>

            <div className='text-black flex justify-center items-center mt-8 mb-2'>
                <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                    <li><Link to="/cosmetic" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '>cosmetics </Link></li>
                    <li><Link to="/fragrance" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> fragrance</Link></li>
                    <li><Link to="/skin" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> skin</Link></li>
                    <li><Link to="/discover" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> discover</Link></li>
                    <li><Link to="/faq" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '>About Us </Link></li>
                </ul>
            </div>

            {/* Search Dropdown */}
            {open && (
                <div className='fixed top-0 left-0 w-full h-[250px] bg-white z-40 flex flex-col items-center justify-center'>
                    <Nav />

                    <div className='flex justify-center items-center gap-10 mt-40'>
                        <div className="relative">
                            <i className="fa-solid fa-magnifying-glass font-light absolute left-4 top-1/2 -translate-y-1/2 text-xl"></i>
                            <input
                                type="text"
                                className="w-[1500px] h-[50px] border border-black rounded-md pl-12 pr-4 text-lg outline-none"
                                placeholder="Search..."
                            />
                        </div>

                        <button onClick={() => setOpen(false)} className='cursor-pointer'>
                            <i className="fa-solid fa-xmark text-3xl text-black"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* Cart Side Bar */}

            {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />}

        </>
    )
}

export default AccountNav