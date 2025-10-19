import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Product from './Components/Limited-Addition/Product'
import Banner from './Components/Makeup-Coll-Banner/Banner'
import Cosmic from './Components/Cosmic/Cosmic'

function App() {

  return (
    <>
      <Page />
      <Category/>
      <Product/>
      {/* <Banner/> */}
      <Cosmic/>

    </>
  )
}

export default App