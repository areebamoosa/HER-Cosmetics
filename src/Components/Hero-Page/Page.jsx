import React from 'react'
import main from '../../assets/main.png'
import Button from '../Button/Button'
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

      <div>
        <div className='relative h-screen w-screen'>

          <img src={main} alt="hero" className='w-full h-full object-cover' />

          <div className="absolute bottom-[200px] left-[23%] -translate-x-1/5  ">
            <Button text="shop now" />
          </div>

        </div>
      </div>

      <Category />
      <Feat />
      <Bag />
      <div className='mt-20'>
        <Lipsticks />
      </div>
      <Blogger />
      <div className='mt-20'>
        <Cosmic />
      </div>
      <SecFeat />
      <div className='mt-20'>
        <Limited />
      </div>
      <div className='mt-60'>
        <Footer />
      </div>
    </>
  )
}

export default Page