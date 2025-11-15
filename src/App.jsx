import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Discover from './Components/Discover-Page/Discover'
import Faqs from './Components/AboutUs-Page/Faqs'
import Login from './Components/Accounts-Pages/Login'
import Create from './Components/Accounts-Pages/Create'
import Cosmetic from './Components/Cosmetics-Page/Page'
import ProductDetails from './Components/Cosmetics-Page/ProductDetails'
import Skin from './Components/Skin-Page/Page'
import Fragrance from './Components/Fragrance-Page/Page'
import SkinProductDetails from './Components/Skin-Page/ProductDetails'
import FragProductDetails from './Components/Fragrance-Page/ProductDetails'
import Transition from './Components/Transition/Transition'
import CheckoutPage from './Components/Cart/CheckoutPage'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App() {

  return (

    <Router>
      <Transition />
      <ScrollToTop />
      <Routes>

        {/* Routes of Pages */}

        <Route path="/" element={<Page />} />
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