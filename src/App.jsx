import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Product from './Components/Limited-Addition/Product'
import Cosmic from './Components/Cosmic/Cosmic'
import Footer from './Components/Footer/Footer'
import ProductUpcoming from './Components/Upcoming/Product'
import Banner from './Components/Advertisement/Banner'
import Discover from './Components/Pages/Discover'
import Faqs from './Components/Pages/Faqs'
import Login from './Components/Accounts-Pages/Login'
import Create from './Components/Accounts-Pages/Create'
import Bag from './Components/Bag/Bag'
import Cosmetic from './Components/Cosmetics-Page/Page'


function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={
          <>
            <Page />
            <Category />
            <Cosmic />
            <div className='m-20'>
            <Banner />
            </div>
            <Product />
            <div className='m-20'>
              <Bag/>
            </div>
            <ProductUpcoming />
            <Footer />
          </>
        } />

        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>

    </Router>

  )
}

export default App