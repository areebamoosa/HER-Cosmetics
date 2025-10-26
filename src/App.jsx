import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Product from './Components/Banners/Product'
import Cosmic from './Components/Banners/Cosmic'
import Footer from './Components/Footer/Footer'
import ProductUpcoming from './Components/Banners/Product'
import Banner from './Components/Banners/Banner'
import Discover from './Components/Discover-Page/Discover'
import Faqs from './Components/AboutUs-Page/Faqs'
import Login from './Components/Accounts-Pages/Login'
import Create from './Components/Accounts-Pages/Create'
import Bag from './Components/Banners/Bag'
import Cosmetic from './Components/Cosmetics-Page/Page'
import ProductDetails from './Components/Cosmetics-Page/ProductDetails'
import NavbarSwitcher from './Components/Navbar/NavSwitcher'


function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={
          <>
            <NavbarSwitcher />
            <Page />
            <Category />
            <Cosmic />
            <Banner />
            <Product />
            <Bag />
            <ProductUpcoming />
            <Footer />
          </>
        } />

        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />

        {/* Route of each product's detailed page */}

        <Route path="/product/:id" element={<ProductDetails />} />


      </Routes>

    </Router>

  )
}

export default App