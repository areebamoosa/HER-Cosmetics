import React from 'react'
import Button from '../Button/Button'
import main from '../../assets/project.png'
import Category from '../Category/Category'
import Feat from '../FeaturedProducts/Feat'
import Bag from '../Banners/Bag'
import Lipsticks from '../Banners/Lipsticks'
import Blogger from '../Banners/Blogger'
import Cosmic from '../Banners/Cosmic'
import SecFeat from '../FeaturedProducts/SecFeat'
import Limited from '../Banners/Limited'
import Footer from '../Footer/Footer'
import NavbarSwitcher from '../Navbar/NavSwitcher'

const Page = () => {
  return (
    <>
      <NavbarSwitcher />

      {/* Hero Page Image */}

      <div>
        <div className="relative  h-[650px] sm:h-[600px] md:h-[1000px] lg:h-screen w-full">
          <img src={main} alt="hero" className="w-full h-full object-cover object-[78%_20%] sm:object-[80%_20%]" />
          <div className=" red sm:!text-white md:!text-white lg:!text-white absolute mt-4 sm:mt-0  translate-x-1/5  sm:bottom-[50px] sm:translate-x-1/5 lg:bottom-[150px] lg:left-[23%] lg:-translate-x-1/5">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>
              <p className="tracking-widest red text-base lg:text-4xl font-semibold sm:!text-white">
                WINTER SALE
              </p>
              <div className="h-[2px] w-20 red-bg sm:!bg-white"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl sm:text-7xl font-bold red sm:!text-white">
                25% OFF
              </h1>
              <h2 className="text-3xl sm:text-5xl font-bold mt-4 red sm:!text-white">
                SITEWIDE
              </h2>
              <div className="mt-5">
                <Button text="shop now" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-80 sm:mt-0'>
        <Category />
      </div>

      <Feat />

      <div className="mt-20">
        <Cosmic />
      </div>

      <Blogger />

      <div className="mt-20">
        <Lipsticks />
      </div>
      <Bag />

      <SecFeat />

      <div className="mt-20">
        <Limited />
      </div>

      <div className="mt-100">
        <Footer />
      </div>

    </>
  )
}

export default Page
