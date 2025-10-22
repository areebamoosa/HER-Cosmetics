import React from 'react'
import main from '../../assets/main.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <>
      <div>
        <div className='relative h-screen w-screen'>

          <img src={main} alt="hero" className='w-full h-full object-cover' />

          <div className="absolute top-0 left-0 w-full z-10">

            {/* Customised Different Nav Bar for Hero Page  */}

            <div className='text-white flex justify-between items-center mt-6 text-2xl '>

              <div className='text-white flex justify-center items-center gap-2 ml-10'>
                <p className='font'>us</p>
                <i className="fa-solid fa-dollar-sign"></i>
              </div>

              <div>
                <h1 className='headFont text-3xl ml-50'>HER COSMETICS</h1>
              </div>

              <div className='text-white flex justify-center items-center gap-12 text-2xl mr-10 cursor-pointer'>
                <p><i className="fa-solid fa-heart"></i></p>
                <p><Link to="/login"><i className="fa-solid fa-user"></i></Link></p>
                <p><i className="fa-solid fa-magnifying-glass"></i></p>
                <p><i className="fa-solid fa-bag-shopping"></i></p>
              </div>

            </div>

            <div className='text-white flex justify-center items-center mt-8 '>
              <ul className='flex justify-center items-center gap-10 font cursor-pointer'>
                <li>  <Link to="/">cosmetics </Link></li>
                <li>  <Link to="/"> fragrance</Link></li>
                <li>  <Link to="/"> skin</Link></li>
                <li>  <Link to="/discover"> discover</Link></li>
                <li>  <Link to="/">rewards </Link></li>
              </ul>
            </div>
          </div>

          <div className="absolute bottom-[200px] left-[23%] -translate-x-1/5  ">
            <Button text="shop now" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Page