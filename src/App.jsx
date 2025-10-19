import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'
import Product from './Components/Limited-Addition/Product'

function App() {

  return (
    <>
      <Page />
      <Category/>
      <Product/>
    </>
  )
}

export default App