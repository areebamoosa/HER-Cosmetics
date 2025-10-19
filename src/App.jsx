import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Page from './Components/Hero-Page/Page'
import Category from './Components/Category/Category'

function App() {

  return (
    <>
      <Page />
      <Category/>
    </>
  )
}

export default App