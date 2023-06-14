import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import About from './Components/About/About'
import Offer from './Components/Offers/Offer'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
// import Login from './Components/loginPage/Login'
// import Details from './Components/Details/Details'



const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About/>
    <Blog/>
    <Footer/>
    {/* <Details/> */}
    {/* <Login/> */}


    
    </>
  )
}

export default App