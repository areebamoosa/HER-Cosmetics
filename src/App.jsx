import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Product from './Components/Limited-Addition/Product'
import Cosmic from './Components/Cosmic/Cosmic'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Page />
      <Category />
      <Product />
      {/* <Banner/> */}
      <Cosmic />
      <Footer />

    </>
  )
}

export default App