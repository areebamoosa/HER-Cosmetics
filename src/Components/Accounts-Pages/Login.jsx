import React from 'react'
import AccountNav from '../Navbar/AccountNav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>

            <AccountNav />

            <div className='flex flex-col justify-center items-center mt-60 sm:mt-75 lg:mt-60 '>


                <h1 className='headFont dark-pink text-2xl sm:text-3xl'>LOGIN</h1>

                <input type="email" placeholder='email' className='w-100 sm:w-120 h-10 bg-white grey p-6 rounded-sm mt-10 font' />
                <input type="password" placeholder='password' className='w-100 sm:w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font' />

                <div className='flex justify-end mt-2'>
                    <p className='cursor-pointer whitespace-nowrap underline ml-60 sm:ml-90 font grey text-sm sm:text-base'>forgot password?</p>
                </div>

                <div className='flex text-sm sm:text-base text-left  leading-tight mt-8 gap-1 grey'>
                    <input type="checkbox" />
                    <p>by logging in, you agree to our</p>
                    <p className='underline cursor-pointer'>terms, privacy policy,</p>
                    <p>and</p>

                </div>

                <div className='text-left grey text-sm sm:text-base'>
                    <p className='underline cursor-pointer'>rewards program terms</p>

                </div>


                <button className='w-80 sm:w-120 h-10  p-2 border-1 rounded-sm border-black mt-8 cursor-pointer grey'>log in</button>

                <p className='mt-10 grey text-sm sm:text-base'>don't have an account yet?</p>
                <p className='cursor-pointer underline grey text-sm sm:text-base mt-2'><Link to="/create"> create account  </Link></p>

            </div>


            <Footer />

        </>
    )
}

export default Login