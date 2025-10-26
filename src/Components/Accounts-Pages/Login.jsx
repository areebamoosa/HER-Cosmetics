import React from 'react'
import AccountNav from '../Navbar/AccountNav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>

            <AccountNav />

            <div className='flex flex-col justify-center items-center  mt-80 '>


                <h1 className='headFont dark-pink text-3xl'>LOGIN</h1>

                <input type="email" placeholder='email' className='w-120 h-10 bg-white grey p-6 rounded-sm mt-10 font' />
                <input type="password" placeholder='password' className='w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font' />

                <div className='flex justify-end mt-2'>
                    <p className='cursor-pointer underline ml-90 font grey'>forgot password?</p>
                </div>

                <div className='flex  text-left  leading-tight mt-8 gap-1 grey'>
                    <p>by logging in, you agree to our</p>
                    <p className='underline cursor-pointer'>terms, privacy policy,</p>
                    <p>and</p>

                </div>

                <div className='text-left grey'>
                    <p className='underline cursor-pointer'>rewards program terms</p>

                </div>


                <button className='w-120 h-10  p-2 border-1 rounded-sm border-black mt-8 cursor-pointer grey'>log in</button>

                <p className='mt-10 grey'>don't have an account yet?</p>
                <p className='cursor-pointer underline grey'><Link to="/create"> create account  </Link></p>

            </div>

            <div className='mt-[290px]'>
                <Footer />
            </div>
        </>
    )
}

export default Login