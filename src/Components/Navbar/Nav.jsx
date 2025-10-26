import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 p-2 bg-white">

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
                        <p><i className="fa-solid fa-magnifying-glass"></i></p>
                        <p><i className="fa-solid fa-bag-shopping"></i></p>
                    </div>
                </div>

                <div className='text-black flex justify-center items-center mt-8 mb-2'>
                    <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                        <li><Link to="/cosmetic" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '>cosmetics </Link></li>
                        <li><Link to="/" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> fragrance</Link></li>
                        <li><Link to="/" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> skin</Link></li>
                        <li><Link to="/discover" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '> discover</Link></li>
                        <li><Link to="/faq" className='light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 '>About Us </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav