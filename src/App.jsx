import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Cosmic from './Components/Banners/Cosmic'
import Footer from './Components/Footer/Footer'
import Limited from './Components/Banners/Limited'
import Blogger from './Components/Banners/Blogger'
import Lipsticks from './Components/Banners/Lipsticks'
import Discover from './Components/Discover-Page/Discover'
import Faqs from './Components/AboutUs-Page/Faqs'
import Login from './Components/Accounts-Pages/Login'
import Create from './Components/Accounts-Pages/Create'
import Bag from './Components/Banners/Bag'
import Cosmetic from './Components/Cosmetics-Page/Page'
import ProductDetails from './Components/Cosmetics-Page/ProductDetails'
import NavbarSwitcher from './Components/Navbar/NavSwitcher'
import Skin from './Components/Skin-Page/Page'
import Fragrance from './Components/Fragrance-Page/Page'
import SkinProductDetails from './Components/Skin-Page/ProductDetails'
import FragProductDetails from './Components/Fragrance-Page/ProductDetails'
import Feat from './Components/FeaturedProducts/Feat'
import SecFeat from './Components/FeaturedProducts/SecFeat'
import Transition from './Components/Transition/Transition'
import CheckoutPage from './Components/Cart/CheckoutPage'

function App() {

  return (

    <Router>
      <Transition />
      <Routes>
        <Route path="/" element={
          <>
            <NavbarSwitcher />
            <Page />
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
        } />

        {/* Routes of Pages */}

        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Route of each product's detailed pages */}

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/skin/:id" element={<SkinProductDetails />} />
        <Route path="/fragrance/:id" element={<FragProductDetails />} />

      </Routes>

    </Router>
  )
}

export default App