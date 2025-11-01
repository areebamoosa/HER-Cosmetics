import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import CartSideBar from '../Cart/CartSideBar';
import Search from '../ProductSearch/Search';
import { useSearch } from '../ProductSearch/SearchContext';

const HeroNav = () => {
    const [open, setOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { searchItem, setSearchItem } = useSearch();

    const inputRef = useRef(null);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    return (
        <>
            <div className="absolute top-0 left-0 w-full z-10 ">
                <div className="fixed top-0 left-0 w-full z-50 p-2">
                    <div className='text-white flex justify-between items-center mt-12 text-2xl '>
                        <div className='text-white flex justify-center items-center gap-2 ml-10'>
                            <p className='font'>us</p>
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>

                        <h1 className='headFont text-3xl ml-50 cursor-pointer '>
                            <Link to='/'><span className="inline-block animate-door-rotate">H</span>ER COSMETICS</Link>
                        </h1>

                        <div className='text-white flex justify-center items-center gap-12 text-2xl mr-10 cursor-pointer'>
                            <p><i className="fa-solid fa-heart"></i></p>
                            <p><Link to="/login"><i className="fa-solid fa-user"></i></Link></p>

                            <div className='relative'>
                                <button onClick={() => setOpen(true)} className='cursor-pointer'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>

                            <button className='cursor-pointer' onClick={() => setIsCartOpen(!isCartOpen)}>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className='text-white flex justify-center items-center mt-8'>
                        <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                            <li><Link to="/cosmetic" className='hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2'>cosmetics</Link></li>
                            <li><Link to="/fragrance" className='hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2'>fragrance</Link></li>
                            <li><Link to="/skin" className='hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2'>skin</Link></li>
                            <li><Link to="/discover" className='hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2'>discover</Link></li>
                            <li><Link to="/faq" className='hover:text-black hover:rounded-md hover:bg-white transition-all duration-300 px-4 py-2'>About Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Search Dropdown */}
            {open && (
                <div className="fixed top-0 left-0 w-full min-h-screen bg-white z-40 flex flex-col items-center overflow-y-auto pb-10">
                    <Nav />

                    <div className="flex justify-center items-center gap-10 mt-40">
                        <div className="relative">
                            <i className="fa-solid fa-magnifying-glass font-light absolute left-4 top-1/2 -translate-y-1/2 text-xl"></i>

                            <input
                                ref={inputRef}
                                type="text"
                                value={searchItem}
                                onChange={(e) => setSearchItem(e.target.value)}
                                className="w-[1500px] h-[50px] border border-black rounded-md pl-12 pr-4 text-lg outline-none"
                                placeholder="Search..."
                            />
                        </div>

                        <button onClick={() => setOpen(false)} className="cursor-pointer">
                            <i className="fa-solid fa-xmark text-3xl text-black"></i>
                        </button>
                    </div>

                    <div className="w-full mt-10 px-10">
                        <Search />
                    </div>
                </div>
            )}

            {/* Cart Side Bar */}
            {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />}
        </>
    )
}

export default HeroNav;