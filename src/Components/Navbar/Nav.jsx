import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='text-white flex justify-between items-center mt-6 text-2xl '>

                <div className='text-black flex justify-center items-center gap-2 ml-10'>
                    <p className='font'>us</p>
                    <i className="fa-solid fa-dollar-sign"></i>
                </div>

                <div>
                    <h1 className='headFont text-3xl ml-50 dark-pink'>HER COSMETICS</h1>
                </div>

                <div className='text-black flex justify-center items-center gap-12 text-2xl mr-10'>
                    <p><i className="fa-solid fa-heart"></i></p>
                    <p><i className="fa-solid fa-user"></i></p>
                    <p><i className="fa-solid fa-magnifying-glass"></i></p>
                    <p><i className="fa-solid fa-bag-shopping"></i></p>
                </div>

            </div>

            <div className='text-black flex justify-center items-center mt-8 '>
                <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                    <li>  <Link to="/">cosmetics </Link></li>
                    <li>  <Link to="/"> fragrance</Link></li>
                    <li>  <Link to="/"> skin</Link></li>
                    <li>  <Link to="/discover"> discover</Link></li>
                    <li>  <Link to="/">rewards </Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav