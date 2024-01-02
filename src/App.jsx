import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import About from './components/About'
import Error from './components/Error'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import Login from './components/Login'
import Footer from './components/Footer'
const App = () => {
  return <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/> 
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path='/singleProduct/:id' element= {<SingleProduct/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/product' element= {<Products/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element = {<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}

export default App