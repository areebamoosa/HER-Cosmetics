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

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={
          <>
            <Page />
            <Category />
            <Product />
            <Cosmic />
            <ProductUpcoming />
            <Banner />
            <Footer />
          </>
        } />

        <Route path="/discover" element={<Discover />} />
      </Routes>

    </Router>

  )
}

export default App